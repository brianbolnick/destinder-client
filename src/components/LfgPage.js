import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts, deleteLfgPost } from '../actions/index';
import {
  Container,
  Divider,
  Card,
  Grid
} from "semantic-ui-react";
import Layout from "./Layout.js";
import "../css/Content.css";
import LfgFormContainer from './LfgFormContainer';
import { BounceLoader } from 'react-spinners';
import LfgCard from './LfgCard';
import { jwt } from '../tools/jwt';

class PostData extends Component {
  render() {
    return (
      this.props.fetched ?
        <Grid>
           {this.props.posts.reverse()}
        </Grid>
        :
        <div style={{ textAlign: '-webkit-center' }}>
          <BounceLoader color={'#3dd6d0'} />
        </div>
    )
  }
}

class LfgPage extends Component {
  componentWillMount() {
    this.props.getLfgPosts();
  }

  isLoggedIn() {
    if ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) {
      return true;
    }
    return false;
  }

  render() {
    const posts = this.props.lfgPosts.map((lfgPost) => {
      return (
        <LfgCard key={lfgPost.id} data={lfgPost}  />
      )
    })

    return (
      <Layout>
        <div className="lfg-page" style={{ height: "100vh" }}>
          <Container style={{ width: '80%'}}>
            <div style={{ height: "50px" }} />
            <div style={{ margin: "0 auto" }}>
              <LfgFormContainer isLoggedIn={this.isLoggedIn()} />
            </div>
            <Divider />
            {/* count: {this.props.lfgPosts.length} */}
            <PostData fetching={this.props.fetching} fetched={this.props.fetched} posts={posts} />
          </Container>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    lfgPosts: state.lfgPosts.all,
    fetched: state.lfgPosts.fetched,
    fetching: state.lfgPosts.fetching
  }
}

export default connect(mapStateToProps, { getLfgPosts, deleteLfgPost })(LfgPage)


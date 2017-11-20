import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts } from '../actions/index';
import {
  Container,
  Divider,
  Card
} from "semantic-ui-react";
import Layout from "./Layout.js";
import "../css/Content.css";
import LfgFormContainer from './LfgFormContainer';
import { BounceLoader } from 'react-spinners';


const jwt = JSON.parse(localStorage.getItem('jwt'));


class PostData extends Component {
  render() {
    return (
      this.props.fetched ?
        <Card.Group itemsPerRow={3}>
          {this.props.posts}
        </Card.Group>
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
    console.log(this.props);
    const posts = this.props.lfgPosts.map((lfgPost) => {
      return (
        <Card key={lfgPost.id} >
          <Card.Content header={lfgPost.id} />
          <Card.Content >
            {lfgPost.message}
          </Card.Content>
        </Card>
      )
    })

    return (
      <Layout>
        <div className="lfg-page" style={{ height: "100vh" }}>
          <Container>
            <div style={{ height: "50px" }} />
            <div style={{ margin: "0 auto" }}>
              <LfgFormContainer isLoggedIn={this.isLoggedIn()} />
            </div>
            <Divider />
            count: {this.props.lfgPosts.length}
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

export default connect(mapStateToProps, { getLfgPosts: getLfgPosts })(LfgPage)


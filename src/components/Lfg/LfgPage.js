import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts, deleteLfgPost } from '../../actions/index';
import {
  Container,
  Divider,
  Grid,
  Button,
  Modal,
  Header
} from "semantic-ui-react";
import Layout from "../Layout.js";
import "../../css/Content.css";
import LfgFormContainer from './LfgFormContainer';
import { BounceLoader, ScaleLoader } from 'react-spinners';
import LfgCard from './LfgCard';
import { jwt } from '../../tools/jwt';
import LeaderboardAd from '../LeaderboardAd';

class LoadingPost extends Component {
  render() {
    return (
      this.props.fetching ?
        <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={4}>
          <div style={{ textAlign: '-webkit-center', height: ' 100%', paddingTop: '50%' }}>
            <ScaleLoader color={'#3dd6d0'} />
          </div>
        </Grid.Column>
        :
        null
    )
  }
}


const FilterModal = () => (
  <Modal trigger={<Button floated='right' size='large' basic inverted circular icon='filter' />}>
    <Modal.Header>Filter</Modal.Header>
    <Modal.Content >
      <Modal.Description>
        <Header>We'll have some sweet filtering options coming soon.</Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

class PostData extends Component {
  render() {
    return (
      this.props.fetched ?
        <Grid>
          <LoadingPost fetching={this.props.fetchingNewPost} />
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

  handleRefreshButtonClick() {
    this.props.getLfgPosts();
  }

  render() {

    const posts = this.props.lfgPosts.map((lfgPost) => {
      return (
        <LfgCard key={lfgPost.id} data={lfgPost} />
      )
    })

    return (
      <Layout>
        <div className="lfg-page" style={{ minHeight: '100vh' }}>
          <Container style={{ width: '80%' }}>
            <div style={{ height: "50px" }} >
              <Button floated='right' basic size='large' inverted onClick={() => this.handleRefreshButtonClick()} circular icon='refresh' />
              <FilterModal />
            </div>
            <div style={{ margin: "0 auto" }}>
              <LfgFormContainer isLoggedIn={this.isLoggedIn()} />
            </div>
            <Divider />
            <PostData
              fetching={this.props.fetching}
              fetched={this.props.fetched}
              posts={posts}
              fetchingNewPost={this.props.fetchingNewPost}
            />
          </Container>
          <Divider hidden />
          <LeaderboardAd />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    lfgPosts: state.lfgPosts.all,
    fetched: state.lfgPosts.fetched,
    fetching: state.lfgPosts.fetching,
    fetchingNewPost: state.lfgPosts.fetchingNewPost
  }
}

export default connect(mapStateToProps, { getLfgPosts, deleteLfgPost })(LfgPage)


import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts, deleteLfgPost, filterMode, filterLookingFor, filterMic, filterElo, filterKd } from '../../actions/lfg_index';
import {
  Container,
  Divider,
  Grid,
  Button,
  Message
} from "semantic-ui-react";
import Layout from "../Layout.js";
import "../../css/Content.css";
import LfgFormContainer from './LfgFormContainer';
import { BounceLoader, ScaleLoader } from 'react-spinners';
import LfgCard from './LfgCard';
import { jwt } from '../../tools/jwt';
import LeaderboardAd from '../LeaderboardAd';
import FilterModal from './FilterModal';
import PlatformSelectModal from './PlatformSelectModal';

class ErrorMessage extends Component {
 
  render() {
    const content = (
      <div>
        {this.props.error} Please <a href="mailto:help@destinder.com">Contact Us</a> and let us know what happened!
      </div>
    )

    return (
      <Message 
        icon='frown' 
        error
        header='Whoops! Something went wrong!'
        content={content}
        />
      
    )
  }
}

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
  state = { filterSelect: false, platform: null }

  componentWillMount() {
    if (this.isLoggedIn()) {
      this.props.getLfgPosts();
    } else {
      this.setState({ filterSelect: true })
    }
  }

  setPlatform(value) {
    this.setState({ filterSelect: false, platform: value })
    this.props.getLfgPosts(value);
  }

  isLoggedIn() {
    if ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) {
      return true;
    }
    return false;
  }

  handleRefreshButtonClick() {
    if (this.isLoggedIn()) {
      this.props.getLfgPosts();
    } else {
      this.props.getLfgPosts(this.state.platform);
    }
  }

  handleFilterModeChange = (data) => {
    this.props.filterMode(data);
  }

  handleLookingForFilterChange = (data) => {
    this.props.filterLookingFor(data);
  }

  handleMicFilterChange = (data) => {
    this.props.filterMic(data);
  }

  handleEloFilterChange = (data) => {
    console.log(data)
    this.props.filterElo(data);
  }

  handleKdFilterChange = (data) => {
    console.log(data)
    this.props.filterKd(data);
  }

  render() {

    const posts = this.props.lfgPosts.map((lfgPost) => {
      return (
        <LfgCard key={lfgPost.id} data={lfgPost} />
      )
    })

    const errors = this.props.error != null ?
      <ErrorMessage error={this.props.error} />
      :
      null

    return (
      <Layout>
        <div className="lfg-page" style={{ minHeight: '100vh' }}>
          <Container style={{ width: '80%' }}>
            <PlatformSelectModal
              filterSelect={this.state.filterSelect}
              setPlatform={this.setPlatform.bind(this)}
            />
            {errors}
            <div style={{ height: "50px" }} >
              <Button
                floated='right'
                basic
                size='large'
                inverted
                onClick={() => this.handleRefreshButtonClick()}
                circular
                icon='refresh'
              />
              <FilterModal
                onModeChange={this.handleFilterModeChange.bind(this)}
                onLookingForChange={this.handleLookingForFilterChange.bind(this)}
                onMicChange={this.handleMicFilterChange.bind(this)}
                onEloChange={this.handleEloFilterChange.bind(this)}
                onKdChange={this.handleKdFilterChange.bind(this)}
                onResetClick={this.handleRefreshButtonClick.bind(this)}
              />
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
          <div className='hide-on-mobile'>
            <LeaderboardAd />
          </div>
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
    fetchingNewPost: state.lfgPosts.fetchingNewPost,
    error: state.lfgPosts.error
  }
}

export default connect(mapStateToProps, { getLfgPosts, deleteLfgPost, filterMode, filterLookingFor, filterMic, filterElo, filterKd })(LfgPage)


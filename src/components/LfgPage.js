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
const jwt = JSON.parse(localStorage.getItem('jwt'));

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

  renderLfgPosts() {
    return this.props.lfgPosts.map((lfgPost) => {
      return (
        <Card key={lfgPost.id} >
          <Card.Content header={lfgPost.id} />
          <Card.Content >
            {lfgPost.message}
          </Card.Content>
        </Card>
      )
    })

  }

  render() {
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
            <Card.Group itemsPerRow={3}>
              {this.renderLfgPosts()}
            </Card.Group>
          </Container>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return { lfgPosts: state.lfgPosts.all }
}

export default connect(mapStateToProps, { getLfgPosts: getLfgPosts })(LfgPage)


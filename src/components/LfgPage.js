import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts } from '../actions/index';
import {
  Container,
  Accordion,
  Icon,
  Divider,
  Card,
  Button
} from "semantic-ui-react";
import Layout from "./Layout.js";
// import {posts} from './data/posts';
import "../css/Content.css";
import src from '../img/abstract-background.png'
import NewForm from './LfgPostForm';
import { API_URL } from '../tools/api-config';

const jwt = JSON.parse(localStorage.getItem('jwt'));

class FormOptions extends Component {
  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { activeIndex } = this.state;
    const { value } = this.state;
    return (
      this.props.isLoggedIn
        ?
        <Accordion className="lfg-form-accordion" styled>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon
              color="yellow"
              style={{ marginRight: "15px" }}
              name="write"
              size="big"
            />
            New Post
                        <Icon
              style={{ float: "right", marginTop: "7px" }}
              name="dropdown"
            />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <NewForm />
          </Accordion.Content>
        </Accordion>

        :

        <Button color='green' basic fluid as='a' href={`${API_URL}/login`}>
          You must be signed in to create a new post.
        </Button>
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

    // eslint-disable-next-line
    const labelStyle = {
      /* display: block; */
      margin: "0 0 .28571429rem 0",
      color: "rgba(0,0,0,.87)",
      fontSize: ".92857143em",
      fontWeight: "700",
      textTransform: "none"
    };

    return (
      <Layout>
        <div className="lfg-page" style={{ height: "100vh" }}>
          <Container>
            <div style={{ height: "50px" }} />
            <div style={{ margin: "0 auto" }}>
              <FormOptions isLoggedIn={this.isLoggedIn()} />
            </div>

            <Divider />
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


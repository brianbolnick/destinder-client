import React, { Component } from "react";
import { connect } from 'react-redux'
import { getLfgPosts } from '../actions/index';
import {
  Container,
  Accordion,
  Icon,
  Divider,
  Card
} from "semantic-ui-react";
import Layout from "./Layout.js";
// import {posts} from './data/posts';
import "../css/Content.css";
import src from '../img/abstract-background.png'
import NewForm from './LfgPostForm';



class LfgPage extends Component {
  componentWillMount() {
    this.props.getLfgPosts();
  }

  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleChange = (e, { value }) => this.setState({ value });

  renderLfgPosts() {
    console.log(this.props.lfgPosts);
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

    const { activeIndex } = this.state;
    // eslint-disable-next-line
    const { value } = this.state;
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
            </div>

            <Divider />
            <Card.Group itemsPerRow={3}>
              {this.renderLfgPosts()}
              {/* <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} />
              <Card raised image={src} /> */}
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

// export default LfgPage;

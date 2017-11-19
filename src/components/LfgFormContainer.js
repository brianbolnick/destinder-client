import React, { Component } from "react";
import { connect } from 'react-redux'
import { getPlayerCharacters } from '../actions/index';
import {
  Accordion,
  Icon,
  Button
} from "semantic-ui-react";
// import "../css/Content.css";
import NewForm from './LfgPostForm';
import { API_URL } from '../tools/api-config';

const jwt = JSON.parse(localStorage.getItem('jwt'));

class FormContainer extends Component {
  state = { activeIndex: 1 };

  componentWillMount() {
    this.props.getPlayerCharacters(jwt.user_id);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleChange = (e, { value }) => this.setState({ value });

  renderCharacters() {
    return this.props.characters.map((character, index) => {
      return {
          key: index,
          value: character.character_id,
          text: character.character_type
      }
    })
  }

  render() {
    const { activeIndex } = this.state;
    const charOptions = this.renderCharacters();

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
            <NewForm characters={charOptions}/>
          </Accordion.Content>
        </Accordion>

        :

        <Button color='green' basic fluid as='a' href={`${API_URL}/login`}>
          You must be signed in to create a new post.
        </Button>
    )
  }
}

function mapStateToProps(state) {
    return { characters: state.lfgPosts.characters }
  }
  
  export default connect(mapStateToProps, { getPlayerCharacters: getPlayerCharacters })(FormContainer)
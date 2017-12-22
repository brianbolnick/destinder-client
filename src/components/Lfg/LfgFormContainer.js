import React, { Component } from "react";
import { connect } from 'react-redux'
import { getPlayerCharacters, createLfgPost } from '../../actions/lfg_index';
import {
    Accordion,
    Icon,
    Button
} from "semantic-ui-react";
import NewForm from './LfgPostForm';
import { API_URL } from '../../tools/api-config';
import { jwt } from '../../tools/jwt';

class FormContainer extends Component {
    state = { activeIndex: -1 };

    componentWillMount() {
        //populate form character options with users characters
        if (jwt != null) {
            if ((jwt.exp * 1000) >= Date.now()) {
                this.props.getPlayerCharacters(jwt.user_id);
            } else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('auth_token');
            }
        }
    }

    handleFormSubmit = values => {
        //close accordion on submit
        this.setState({ activeIndex: -1 })

        //merge user id with form props
        values = { ...values, user_id: JSON.parse(localStorage.getItem('jwt')).user_id }
        this.props.createLfgPost(values);
    }

    //handles click for accordion and active items
    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };

    handleChange = (e, { value }) => this.setState({ value });

    //creates an object for the characters option of the form, based on api response
    //TODO: Need to handle method for players who do not have any characters
    renderCharacters() {
        return Object.keys(this.props.characters).map((character, index) => {
            return {
                key: index,
                value: character,
                text: this.props.characters[character].character_type
            }
        })
    }

    render() {
        const { activeIndex } = this.state;
        const charOptions = this.renderCharacters();

        //only show the form if the user is logged in
        return (
            this.props.isLoggedIn
                ?
                <Accordion className="lfg-form-accordion">
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
                        <NewForm
                            characters={charOptions}
                            onSubmit={this.handleFormSubmit}
                            fetching={this.props.fetchingNewPost}
                        />
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
    return {
        characters: state.lfgPosts.characters,
        fetchingNewPost: state.lfgPosts.fetchingNewPost
    }
}

export default connect(mapStateToProps, { getPlayerCharacters, createLfgPost })(FormContainer)
import React, { Component } from "react";
import { connect } from 'react-redux'
import { getMatchingUsers } from '../actions/index';
import {
    Accordion,
    Icon,
    Button,
    Dropdown,
    Form
} from "semantic-ui-react";
// import "../css/Content.css";
import NewForm from './LfgPostForm';
import { API_URL } from '../tools/api-config';

const jwt = JSON.parse(localStorage.getItem('jwt'));

class UserSearch extends Component {

    handleChange = (e, { value }) => {       
        console.log(value);
        // console.log(this.props.formProps);
        this.props.formProps.change('fireteam', value)

    }

    handleSearchChange = ( e, data) => {
        // console.log(data.searchQuery);
        this.props.getMatchingUsers(data.searchQuery);
        // console.log("users", this.props.users);
    }
    

    render() {
        const options = (this.props.users.length === 0) ? null : this.props.users.map((user, index) => {
            return { 
                key: user.user_id, 
                value: user.user_id,                 
                text: user.display_name,
                image: {
                    avatar: true,
                    src: user.avatar
                } 
            }
          })

        return (
            <Form.Field width={8}>
                <label>Tag Your Fireteam (Must have a Destinder Account)</label>
                <Dropdown
                placeholder="Fireteam"
                fluid
                multiple
                search
                selection
                options={options}
                onChange={this.handleChange}
                onSearchChange={this.handleSearchChange}
            />
            </Form.Field>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.lfgPosts.users }
}

export default connect(mapStateToProps, { getMatchingUsers: getMatchingUsers })(UserSearch)
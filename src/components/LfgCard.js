import React, { Component } from "react";
import {
    Card,
    Icon,
    Divider
} from "semantic-ui-react";
import { deleteLfgPost } from '../actions/index';
import { connect } from 'react-redux'
import { jwt } from '../tools/jwt';

const user_id = ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) ? jwt.user_id : null

class LfgCard extends Component {
    deletePostClick() {
        this.props.deleteLfgPost(this.props.data.id);
    }

    isUser() {
        return (user_id === this.props.data.user_id && user_id != null);
    }

    render() {
        const { data } = this.props;

        let deleteButton = null;

        if (this.isUser()) {
            deleteButton = <Icon onClick={this.deletePostClick.bind(this)} link name='trash outline' />;
        }

        return (
            <Card >

                <Card.Content header={`ID: ${data.id}`} />
                <Card.Content >
                    created at: {data.created_at} <br />
                    fireteam data: {data.fireteam_data} <br />
                    is fireteam post: {data.is_fireteam_post} <br />
                    message: {data.message} <br />
                    player data: {data.player_data} <br />
                    posting user id: {data.user_id} <br />
                    <Divider />
                    {deleteButton}

                </Card.Content>
            </Card>
        )
    }
}

export default connect(null, { deleteLfgPost })(LfgCard)
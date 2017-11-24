import React, { Component } from "react";
import {
    Card,
    Icon,
    Divider,
    Grid
} from "semantic-ui-react";
import { deleteLfgPost } from '../actions/index';
import { connect } from 'react-redux'
import { jwt } from '../tools/jwt';
var ta = require("time-ago")();

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

        const character_data = JSON.parse(data.character_data)

        return (
            <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={4}>
                <Card className="lfg-post-card" >

                    <Card.Content header={`ID: ${data.id}`} />
                    {/* <Card.Content >
                        <div>
                            created:  {ta.ago(data.created_at)} <br />
                            fireteam data: {data.fireteam_data} <br />
                            is fireteam post: {data.is_fireteam_post} <br />
                            message: {data.message} <br />
                            player data: {data.player_data} <br />
                            posting user id: {data.user_id} <br />
                            <Divider />
                            {deleteButton}
                        </div>
                    </Card.Content> */}
                    <Card.Content >
                        <div>
                            created:  {ta.ago(data.created_at)} <br />
                            fireteam data: {data.fireteam_data} <br />
                            is fireteam post: {data.is_fireteam_post} <br />
                            message: {data.message} <br />
                            player data: {data.player_data} <br />
                            posting user id: {data.user_id} <br />
                            character: {character_data.character_type} <br />
                            subclass: {character_data.subclass} <br />
                            light level: {character_data.light_level} <br />
                            emblem: {character_data.emblem} <br />
                            emblem bg: {character_data.emblem_background} <br />
                            <Divider />
                            {deleteButton}
                        </div>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}

export default connect(null, { deleteLfgPost })(LfgCard)
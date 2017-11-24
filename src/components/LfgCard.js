import React, { Component } from "react";
import {
    Card,
    Icon,
    Divider,
    Grid,
    Segment,
    Rating,
    Statistic,
    Label
} from "semantic-ui-react";
import { deleteLfgPost } from '../actions/index';
import { connect } from 'react-redux'
import { jwt } from '../tools/jwt';
var ta = require("time-ago")();

const user_id = ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) ? jwt.user_id : null
const membershipType = ((jwt != null) && ((jwt.exp * 1000) >= Date.now())) ? jwt.membership_type : null

class HeaderData extends Component {
    render() {
        return (
            <Grid columns='equal' style={{ height: '50px' }}>
                <Grid.Row style={{ height: '50px', padding: '0' }}>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={6} style={{ paddingTop: '15px', fontSize: '1.2em', color: '#f5f5f5' }}>
                        {this.props.player_data.player_name}
                    </Grid.Column>
                    <Grid.Column style={{ paddingTop: '5px' }}>
                        <span style={{ color: '#f5dc56' }}>✦ {this.props.character_data.light_level}</span> <br />
                        <span style={{ color: '#f5f5f5', fontWeight: '100' }}>{this.props.character_data.character_type}</span>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

class StatData extends Component {
    render() {
        return (
            <Statistic.Group size='mini'>
                <Statistic>
                    <Statistic.Value>1.21</Statistic.Value>
                    <Statistic.Label>K/D</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>1350</Statistic.Value>
                    <Statistic.Label>ELO</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>78</Statistic.Value>
                    <Statistic.Label>WIN %</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>1.48</Statistic.Value>
                    <Statistic.Label>K/AD</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    }
}

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

        const mailButton = membershipType === "1"
            ?
            <Icon link onClick={() => { window.location.href = `https://account.xbox.com/en-US/SkypeMessages?gamerTag=${player_data.player_name}` }} name='mail' />
            :
            null

        const character_data = JSON.parse(data.character_data);
        const player_data = JSON.parse(data.player_data);

        return (
            <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={4}>
                <Card className="lfg-post-card">

                    <Card.Content
                        header={<HeaderData player_data={player_data} character_data={character_data} />}
                        style={{
                            backgroundImage: `url(${character_data.emblem_background})`,
                            height: "50px",
                            backgroundSize: 'cover',
                            textAlign: 'center'
                        }}
                    />

                    <Card.Content >
                        <div>
                            {/* created:  {ta.ago(data.created_at)} <br />
                            fireteam data: {data.fireteam_data} <br />
                            is fireteam post: {data.is_fireteam_post} <br />
                            message: {data.message} <br />
                            player data: {data.player_data} <br />
                            posting user id: {data.user_id} <br />
                            character: {character_data.character_type} <br />
                            subclass: {character_data.subclass} <br />
                            light level: {character_data.light_level} <br /> */}
                            mode: {data.game_type} 
                            <Divider hidden/>
                            {data.message} 
                            <Divider hidden/>
                            <StatData mode={data.game_type} />
                        </div>
                        <Divider />
                        <Grid textAlign='center' columns='equal'>
                            <Grid.Row>
                                <Grid.Column>
                                    {deleteButton}
                                </Grid.Column>
                                <Grid.Column width={6} style={{}}>
                                    <Rating size='mini' defaultRating={3.5} maxRating={5} icon='star' disabled />
                                </Grid.Column>
                                <Grid.Column style={{}}>
                                    {mailButton}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Card.Content>
                </Card>
            </Grid.Column >
        )
    }
}

export default connect(null, { deleteLfgPost })(LfgCard)
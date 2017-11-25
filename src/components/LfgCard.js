import React, { Component } from "react";
import {
    Card,
    Icon,
    Divider,
    Grid,
    Segment,
    Rating,
    Statistic,
    Label,
    Popup,
    Message
} from "semantic-ui-react";
import { deleteLfgPost } from '../actions/index';
import { connect } from 'react-redux'
import { jwt } from '../tools/jwt';
import { GAME_TYPES } from '../data/common_constants'
import "../css/steps.css";
import { Steps } from 'antd';
const Step = Steps.Step;


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
            <Grid columns={4} divided>
                <Grid.Row >
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.kd_ratio}</Statistic.Value>
                            <Statistic.Label>K/D</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.elo.elo}</Statistic.Value>
                            <Statistic.Label>ELO</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.win_rate}%</Statistic.Value>
                            <Statistic.Label>WIN</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.kad_ratio}</Statistic.Value>
                            <Statistic.Label>K/AD</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
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

        const micIcon = data.has_mic
            ?
            <Popup
                trigger={<Icon className="post-icon" name='microphone' color='blue' />}
                content='I have a mic'
            />
            :
            <Popup
                trigger={<Icon className="post-icon" name='microphone slash' style={{ color: '#212121' }} />}
                content='No Mic'
            />

        let lookingForIcon;
        switch (data.looking_for) {
            case 'any':
                lookingForIcon =
                    <Popup
                        trigger={<Icon className="post-icon" color='red' inverted name='world' />}
                        content='Looking for anyone'
                    />
                break;
            case 'similar':
                lookingForIcon =
                    <Popup
                        trigger={<Icon className="post-icon" color='red' inverted name='bar chart' />}
                        content='Looking for similar'
                    />
                break;
            case 'sherpa':
                lookingForIcon =
                    <Popup
                        trigger={<Icon className="post-icon" color='red' inverted name='child' />}
                        content='Looking to be carried'
                    />
                break;
            case 'sherpee':
                lookingForIcon =
                    <Popup
                        trigger={<Icon className="post-icon" color='red' inverted name='map outline' />}
                        content='Looking to carry someone'
                    />
                break;
            default:
                break;

        }



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

                    <Card.Content style={{ paddingTop: '0' }}>
                        <div style={{
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            letterSpacing: '4px',
                            fontSize: '0.8em'
                        }}>{GAME_TYPES[data.game_type]}</div>
                        <div style={{
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            letterSpacing: '3px',
                            fontSize: '0.6em'
                        }}>{ta.ago(data.created_at)}</div>

                        <div>
                            <Divider hidden />

                            <Grid columns={2}>
                                <Grid.Row stretched>
                                    <Grid.Column width={12}>
                                        <Message>
                                            <p>
                                                {data.message}
                                            </p>
                                        </Message>
                                    </Grid.Column>
                                <Grid.Column width={4} style={{ paddingRight: "0" }}>
                                    <Steps direction="vertical" style={{ marginLeft: 'auto' }}>
                                        <Step status="wait" icon={micIcon} />
                                        <Step icon={lookingForIcon} />
                                        <Step icon={
                                            <Popup
                                                trigger={<Icon className="post-icon" name='tag' color='green' />}
                                                content='These are my badges!'
                                            />}
                                        />
                                    </Steps>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        <Divider hidden />
                        <StatData mode={data.game_type} player_data={player_data}/>
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
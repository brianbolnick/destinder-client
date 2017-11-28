import React, { Component } from "react";
import {
    Card,
    Icon,
    Divider,
    Grid,
    Rating,
    Popup,
    Label,
} from "semantic-ui-react";
import { deleteLfgPost } from '../../actions/index';
import { connect } from 'react-redux'
import { jwt } from '../../tools/jwt';
import { GAME_TYPES, BADGES } from '../../data/common_constants'
import "../../css/steps.css";
import { Steps } from 'antd';
import { TrialsData, PveData, PvpData } from './LfgStatDisplay';
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



class LfgCard extends Component {
    deletePostClick() {
        this.props.deleteLfgPost(this.props.data.id);
    }

    isUser() {
        return (user_id === this.props.data.user_id && user_id != null);
    }



    render() {
        const { data } = this.props;
        const character_data = JSON.parse(data.character_data);
        const player_data = JSON.parse(data.player_data);

        const badges = player_data.player_badges.map((badge) => {
            return (
                <Popup
                    key={badge.id}
                    position='top center'
                    hoverable
                    trigger={BADGES[badge.id]}
                    content={badge.description}
                />
            )
        })

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

        let statData;
        switch (data.game_type) {
            case '2':
            case '3':
            case '4':
            case '6':
            case '7':
            case '16':
            case '17':
            case '18':
                statData = <PveData mode={data.game_type} player_data={player_data} />
                break;
            case '39':
                statData = <TrialsData mode={data.game_type} player_data={player_data} />
                break;
            default:
                statData = <PvpData mode={data.game_type} player_data={player_data} />
                break;
        }

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

                            <Grid columns={2} >
                                <Grid.Row stretched style={{padding: '0' }}>
                                    <Grid.Column width={12}>
                                        {/* <Grid.Row style={{height: '0' }}>
                                            <Popup
                                                trigger={<div style={{
                                                    fontSize: '1em',
                                                    fontWeight: '400',
                                                    marginBottom: '5%',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                }}><Image 
                                                    src={SUBCLASS_ICONS[character_data.subclass]} 
                                                    avatar 
                                                    size='mini' 
                                                    style={{marginRight: '10px', width: '2.5em', height: '2.5em'}}
                                                    />{character_data.subclass}</div>}
                                                content='Subclass stats!'
                                                position='bottom center'
                                            />
                                        </Grid.Row> */}
                                        <Divider fitted style={{fontSize: '0.8rem'}} horizontal>MESSAGE</Divider>
                                    <Grid.Row className='post-message' style={{marginTop: '-50px' }}>
                                        <p>
                                            {data.message}
                                        </p>
                                    </Grid.Row>
                                    </Grid.Column>
                                <Grid.Column width={4} style={{ paddingRight: "0" }}>
                                    <Steps direction="vertical" style={{ marginLeft: 'auto' }}>
                                        <Step status="wait" icon={micIcon} />
                                        <Step icon={lookingForIcon} />
                                        <Step icon={
                                            <Popup
                                                wide
                                                hoverable
                                                position='left center'
                                                trigger={<Icon className="post-icon" name='tag' color='green' />}
                                                content={
                                                    <div>
                                                        <Label.Group>
                                                            {badges}
                                                        </Label.Group>
                                                    </div>
                                                }
                                            />}
                                        />
                                    </Steps>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        <Divider hidden />
                        {statData}
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
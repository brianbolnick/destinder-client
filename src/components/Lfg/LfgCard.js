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
import { deleteLfgPost } from '../../actions/lfg_index';
import { connect } from 'react-redux'
import { jwt } from '../../tools/jwt';
import { GAME_TYPES, BADGES, CHECKPOINTS } from '../../data/common_constants'
import "../../css/steps.css";
import { Steps, Carousel } from 'antd';
import { TrialsData, PveData, PvpData } from './LfgStatDisplay';
import Filter from 'bad-words';
const Step = Steps.Step;
const filter = new Filter();

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
                    <Grid.Column width={6} style={{ padding: '0', paddingTop: '15px', fontSize: '1.2em', color: '#f5f5f5' }}>
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
    handleDelete = () => {
        this.props.onDeleteClick(this.props.data.id);
    }

    isUser() {
        return (user_id === this.props.data.user_id && user_id != null);
    }

    render() {
        const { data, character_data, playerData } = this.props;

        const player_data = JSON.parse(playerData);

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
            deleteButton = <Icon onClick={this.handleDelete.bind(this)} link name='trash outline' />;
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

        const repValue = Math.round(player_data.reputation * 5) / 100

        const repDisplay = (
            <Popup
                trigger={<Rating size='mini' defaultRating={repValue} maxRating={5} icon='star' disabled />}
                content={`Reputation: ${player_data.reputation}% (${player_data.total_votes} votes)`}
            />

        )

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
                        fontSize: '0.8em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{ data.checkpoint != null ? CHECKPOINTS[data.checkpoint] : GAME_TYPES[data.game_type]}</div>
                    <div style={{
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        letterSpacing: '3px',
                        fontSize: '0.6em'
                    }}>{ta.ago(data.created_at)}</div>

                    <div>
                        <Divider hidden />

                        <Grid columns={2} >
                            <Grid.Row stretched style={{ padding: '0' }}>
                                <Grid.Column width={12}>
                                    <Divider fitted style={{ fontSize: '0.8rem' }} horizontal>MESSAGE</Divider>
                                    <Grid.Row className='post-message' style={{ marginTop: '-50px' }}>
                                        <p>
                                            {filter.clean(data.message)}
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
                                {repDisplay}
                            </Grid.Column>
                            <Grid.Column style={{}}>
                                {mailButton}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </Card.Content>
            </Card>
        )
    }
}


class Container extends Component {

    handleDeleteButtonClick = (data) => {
        this.props.deleteLfgPost(data);
    }

    renderCards = (data) => {
        let character_data;
        return data.fireteam_data.map((player, index) => {
            character_data = JSON.parse(player).character_data
            return (
                <div>
                    <LfgCard
                        key={`${JSON.parse(player).user_id}${index}`}
                        data={data} playerData={JSON.parse(player).player_data}
                        character_data={JSON.parse(character_data)[1]}
                        onDeleteClick={this.handleDeleteButtonClick}
                    />
                </div>
            )
        })
    }


    render() {
        const { data } = this.props;

        return (
            data.is_fireteam_post
                ?
                <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={4}>
                    <Carousel
                        swipeToSlide={true}
                        draggable
                    >
                        <div>
                            <LfgCard
                                key={data.user_id}
                                data={data}
                                playerData={data.player_data}
                                character_data={JSON.parse(data.character_data)}
                                onDeleteClick={this.handleDeleteButtonClick.bind(this)}
                            />
                        </div>
                        {this.renderCards(data)}
                    </Carousel>
                </Grid.Column>

                :
                <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={4}>
                    <div>
                        <LfgCard
                            key={data.user_id}
                            data={data}
                            playerData={data.player_data}
                            character_data={JSON.parse(data.character_data)}
                            onDeleteClick={this.handleDeleteButtonClick.bind(this)}
                        />
                    </div>
                </Grid.Column>
        )
    }
}

export default connect(null, { deleteLfgPost })(Container)
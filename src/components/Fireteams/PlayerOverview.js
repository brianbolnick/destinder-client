import React, { Component } from 'react';
import { Container, Grid, Divider, Statistic, Image, Popup, Rating, Icon, Button, Label, Segment, Accordion, Menu, Header, List } from 'semantic-ui-react';
import WeaponChart from '../../charts/WeaponChart.js';
import { fetchPgcr } from '../../actions/fireteams_index';
import { WEAPONS, BADGES, TRIALS_BADGES } from '../../data/common_constants'
import { jwt } from '../../tools/jwt';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../../tools/api-config';
import Loader from '../../img/rope-loader.svg'
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }
var ta = require("time-ago")();

const modes = {
    41: 'Countdown',
    42: 'Survival'
}

class GameContent extends Component {
    render() {
        console.log(this.props.pgcr)
        let backgroundStyle = { background: '#f5f5f5' }
        let mapName = "";
        if (this.props.pgcr.map) {
            backgroundStyle = {
                background: `linear-gradient(to right, rgba(35, 37, 38, 0.4), rgba(65, 67, 69, 0.5)), url(${this.props.pgcr.map.image})`,
                backgroundSize: 'cover'
            }
            mapName = this.props.pgcr.map.name

        }
        let alpha = []
        let bravo = []
        if (this.props.pgcr.alpha) {
            alpha = this.props.pgcr.alpha.map((function (player, index) {
                return (
                    <Grid.Row>
                        <Grid.Column style={{ margin: '5px' }}>
                            <Segment raised style={{ padding: '0' }}>
                                <Header as='h5'>
                                    <Image src={player.emblem} style={{ width: '3em', marginRight: '5px' }} />
                                    <Header.Content style={{ padding: '0', width: '80%' }}>
                                        {player.player_name}
                                        <Header.Subheader>
                                            stats coming soon!
                                     </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                )
            }))
        }

        if (this.props.pgcr.alpha) {
            bravo = this.props.pgcr.bravo.map((function (player, index) {
                return (
                    <Grid.Row>
                        <Grid.Column style={{ margin: '5px' }}>
                            <Segment raised style={{ padding: '0' }}>
                                <Header as='h5'>
                                    <Image src={player.emblem} style={{ width: '3em', marginRight: '5px' }} />
                                    <Header.Content style={{ padding: '0', width: '80%' }}>
                                        {player.player_name}
                                        <Header.Subheader>
                                            stats coming soon!
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                )
            }))
        }

        return (
            this.props.fetchingPgcr ?
                <div style={{ textAlign: 'center', background: '#f5f5f5' }} >
                    <Image src={Loader} size='small' />
                </div>
                :
                <Segment raised className='pgcr-bg' style={{ border: 'none' }}>
                    <div className='pgcr-overlay' style={backgroundStyle}></div>
                    <Grid columns='equal' >
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h2' >
                                    {mapName}
                                    <Header.Subheader style={{ color: '#e6e6e6' }}>
                                        {this.props.mode ? modes[this.props.mode] : ""}
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {alpha}
                            </Grid.Column>
                            <Grid.Column>
                                {bravo}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

        )
    }
}
class GameHistory extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, data) => {
        this.props.fetchPgcr(this.props.games[data.index].instance_id)
    }

    render() {

        const { games, pgcr, pgcrError, fetchingPgcr } = this.props;
        const { activeIndex } = this.state
        let matches =
            {
                title: {
                    content: "There is no data to display",
                    key: `N/A`
                },
                content: "There is no data to display"
            }

        if (games.length) {
            const ordered = games.reverse()
            matches = ordered.reverse().map((function (match, index) {
                // const alpha = match.members.alpha.map((function (player, index) {
                //     return (
                //         <List.Item>
                //             <List.Content>{player.player_name}</List.Content>
                //         </List.Item>
                //     )
                // }))

                // const bravo = match.members.bravo.map((function (player, index) {
                //     return (
                //         <List.Item>
                //             <List.Content>{player.player_name}</List.Content>
                //         </List.Item>
                //     )
                // }))

                const title = match.standing === 0 ?
                    <Header
                        as='h3'
                        block
                        className="history-victory"
                    >
                        {/* <Icon name='check' style={{ fontSize: '1em' }} /> */}
                        <Header.Content style={{ padding: '0', paddingLeft: '15px' }}>
                            <span style={{ color: '#f5f5f5' }}>Victory</span>
                            <Header.Subheader>
                                <span style={{ fontWeight: '100' }}>{ta.ago(match.game_date)} ({match.activity_duration})</span>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                    :
                    <Header
                        as='h3'
                        block
                        className="history-defeat"
                    >
                        {/* <Icon name='close' style={{ fontSize: '1em' }} /> */}
                        <Header.Content style={{ padding: '0', paddingLeft: '15px' }}>
                            <span style={{ color: '#f5f5f5' }}>Defeat</span>
                            <Header.Subheader>
                                <span style={{ fontWeight: '100' }}>{ta.ago(match.game_date)} ({match.activity_duration})</span>
                            </Header.Subheader>
                        </Header.Content>


                    </Header>

                return (
                    {
                        title: {
                            content: title,
                            key: match.instance_id
                        },
                        content: {
                            content: <GameContent pgcr={pgcr} pgcrError={pgcrError} fetchingPgcr={fetchingPgcr} mode={match.mode} />,
                            key: `content - ${match.instance_id})`
                        }
                    }
                )
            }))
        }

        return (
            <Accordion defaultActiveIndex={-1} panels={matches} onTitleClick={this.handleClick.bind(this)} fluid styled style={{ textAlign: 'left', background: 'transparent' }} className="game-history" />
        )
    }
}
class StatsCard extends Component {
    state = { voted_for: false, loggedIn: false }
    componentWillMount() {
        if (this.isLoggedIn()) {
            this.setState({ loggedIn: true })
            if (this.props.account_info.user_id) {
                axios.get(`${API_URL}/v1/users/${this.props.account_info.user_id}/voted_for`, config).then(response => {
                    this.setState({ voted_for: response.data.voted_for })
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    isLoggedIn() {
        if (jwt != null) {
            if ((jwt.exp * 1000) >= Date.now()) {
                return true;
            } else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('auth_token');
            }
        }
        return false;
    }

    handleUpvoteClick() {
        axios.put(`${API_URL}/v1/users/${this.props.account_info.user_id}/upvote`,
            null,
            config
        )
            .then(response => {
                if (response.data.data === "Upvote") {
                    this.setState({ voted_for: true })
                } else {
                    console.log(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleDownvoteClick() {
        axios.put(`${API_URL}/v1/users/${this.props.account_info.user_id}/downvote`,
            null,
            config
        )
            .then(response => {
                if (response.data.data === "Downvote") {
                    this.setState({ voted_for: true })
                } else {
                    console.log(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleUnvoteClick() {
        axios.put(`${API_URL}/v1/users/${this.props.account_info.user_id}/unvote`,
            null,
            config
        )
            .then(response => {
                if (response.data.data === "Removed") {
                    this.setState({ voted_for: false })
                } else {
                    console.log(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {


        const { data, account_info } = this.props
        let upvote = null;
        let downvote = null;
        const repValue = account_info.reputation ? Math.round(account_info.reputation.reputation_score * 5) / 100 : 0

        let badges = "Nothing here... :("
        if (account_info.badges) {
            badges = account_info.badges.map(function (badge) {
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
        }

        let analysisBadges = "No trials badges for this player."
        if (data.analysis_badges) {
            analysisBadges = data.analysis_badges.map(function (badge) {
                return (
                    <Popup
                        key={badge.name}
                        position='top center'
                        hoverable
                        trigger={TRIALS_BADGES[badge.id]}
                        content={badge.description}
                    />
                )

            })
        }


        if (this.state.loggedIn) {
            upvote = this.state.voted_for
                ?
                <Button basic inverted size='mini' onClick={() => this.handleUnvoteClick()} >
                    Unvote
                </Button>
                :
                <Icon name="thumbs outline up" link size='big' onClick={() => this.handleUpvoteClick()} />

            downvote = this.state.voted_for ? null : <Icon name="thumbs outline down" link size='big' onClick={() => this.handleDownvoteClick()} />
        }

        const repDisplay = account_info.reputation ?
            <Popup
                trigger={<Rating className='player-overview-rating' size='large' defaultRating={repValue} maxRating={5} icon='star' disabled />}
                content={`Reputation: ${account_info.reputation.reputation_score}% (${account_info.reputation.total_votes} votes)`}
            />
            :
            <Popup
                trigger={<Rating size='large' defaultRating={0} maxRating={5} icon='star' disabled />}
                content={"This player does not have a Destinder account."}
            />


        return (
            <Container text style={{ padding: '2%', width: '100%' }}>
                <Grid centered stretched verticalAlign='middle' style={{ height: '77vh' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={2} centered stretched verticalAlign='middle' >
                                <Grid.Column>
                                    <Grid columns='equal' centered stretched verticalAlign='middle' >
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Statistic color='teal' inverted size='mini'>
                                                    <Statistic.Value>
                                                        <Popup
                                                            trigger={<Image src={WEAPONS[data.player_data.stats.kill_stats.best_weapon_type]} size='tiny' />}
                                                            content={data.player_data.stats.kill_stats.best_weapon_type}
                                                            position="bottom center"
                                                        />
                                                    </Statistic.Value>
                                                    <Statistic.Label>Best Weapon Type</Statistic.Label>
                                                </Statistic>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>

                                                <Statistic.Group size='mini' widths='two'>
                                                    <Statistic color='red' inverted>
                                                        <Statistic.Value>{data.player_data.stats.efficiency}</Statistic.Value>
                                                        <Statistic.Label>Efficiency</Statistic.Label>
                                                    </Statistic>
                                                    <Statistic color='yellow' inverted>
                                                        <Statistic.Value>{data.player_data.stats.games_played}</Statistic.Value>
                                                        <Statistic.Label>Games Played</Statistic.Label>
                                                    </Statistic>
                                                </Statistic.Group>
                                            </Grid.Column>

                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Statistic.Group size='mini' widths='two'>
                                                    <Statistic color='teal' inverted>
                                                        <Statistic.Value>{data.player_data.stats.kill_stats.precision_kills}</Statistic.Value>
                                                        <Statistic.Label>Precision Kills</Statistic.Label>
                                                    </Statistic>
                                                    <Statistic color='green' inverted>
                                                        <Statistic.Value>{data.player_data.stats.average_lifespan}</Statistic.Value>
                                                        <Statistic.Label>Avg. Lifespan</Statistic.Label>
                                                    </Statistic>
                                                </Statistic.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column>
                                    <WeaponChart data={data} />
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row >
                        <Grid.Column>
                            <Grid centered stretched verticalAlign='middle' columns={2} >
                                <Grid.Column>
                                    <h2 className="player-overview-header">Badges</h2>
                                    <Segment inverted padded style={{ background: 'transparent', margin: '0' }}>
                                        <Label.Group>
                                            {badges}
                                        </Label.Group>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column >
                                    <h2 className="player-overview-header">Reputation</h2>
                                    <Segment inverted textAlign='center' padded style={{ background: 'transparent', margin: '0' }}>
                                        <Grid centered stretched verticalAlign='middle'>
                                            <Grid.Column width={3} style={{ alignItems: 'center' }}>
                                                {/* <Icon name="thumbs outline up" link size='big' /> */}
                                                {upvote}
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                {repDisplay}
                                            </Grid.Column>
                                            <Grid.Column width={6} style={{ alignItems: 'center' }}>
                                                {/* <Icon name="thumbs outline down" link size='big' /> */}
                                                {downvote}
                                            </Grid.Column>
                                        </Grid>
                                    </Segment>

                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={1} centered stretched verticalAlign='middle' >
                                <Grid.Column>
                                    <Segment inverted padded style={{ background: 'transparent', margin: '0' }}>
                                        <h2 className="player-overview-header">Analysis</h2>
                                        <Label.Group>
                                            {TRIALS_BADGES['Scout']}
                                            {analysisBadges}
                                        </Label.Group>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={1} centered stretched verticalAlign='middle' >
                                <Grid.Column>
                                    <h2 className="player-overview-header">Game History</h2>
                                    <Segment inverted textAlign='center' style={{ background: 'transparent', margin: '0' }}>
                                        <GameHistory
                                            games={data.recent_games}
                                            fetchPgcr={this.props.fetchPgcr}
                                            pgcrError={this.props.pgcrError}
                                            pgcr={this.props.pgcr}
                                            fetchingPgcr={this.props.fetchingPgcr}
                                        />
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        pgcrError: state.fireteam.pgcrError,
        pgcr: state.fireteam.pgcr,
        fetchingPgcr: state.fireteam.fetchingPgcr
    }
}

export default connect(mapStateToProps, { fetchPgcr })(StatsCard)


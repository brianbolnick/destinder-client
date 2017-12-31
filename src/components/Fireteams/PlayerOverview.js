import React, { Component } from 'react';
import { Container, Card, Grid, Divider, Statistic, Image, Popup, Rating, Icon, Button, Label, Segment, Accordion } from 'semantic-ui-react';
import WeaponChart from '../../charts/WeaponChart.js';
import { WEAPONS, BADGES } from '../../data/common_constants'
import { jwt } from '../../tools/jwt';
import axios from 'axios';
import { API_URL } from '../../tools/api-config';
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

class AccordionExampleFluid extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion fluid inverted style={{textAlign: 'left'}}>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    Historical Game Data
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0} style={{ color: '#f5f5f5' }}>
                    <p>
                        Coming soon! See details about all games for this character.
                    </p>
                </Accordion.Content>

            </Accordion>
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
                    console.log(response.data)
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
                console.log(response.data)
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
                console.log(response.data)
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
                console.log(response.data)
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
                                    <Segment disabled inverted textAlign='center' padded='very'>
                                        Player Analysis Coming soon!
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
                                    <Segment inverted textAlign='center'>
                                        <AccordionExampleFluid />
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

export default StatsCard;
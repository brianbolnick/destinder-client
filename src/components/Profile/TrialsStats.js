import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchTrials } from '../../actions/profile_index';
import { Grid, Header, Segment, Reveal, Icon } from "semantic-ui-react";
import '../../css/Profile.css';
import Chart from '../../charts/WeaponBreakoutChart'
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

class Trials extends Component {
    constructor() {
        super();
        this.state = { active: false, disabled: true }
    }

    componentDidMount() {
        setTimeout(() => {
            // console.log(this.props)
            this.props.fetchTrials(this.props.user.id, this.props.character.id)
        }, 2500);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.character !== nextProps.character) {
            this.props.fetchTrials(nextProps.user.id, nextProps.character.id)
        }
    }

    handleOpenClick = () => {
        this.setState({ active: true, disabled: false })
    }
    handleCloseClick = () => {
        this.setState({ active: false, disabled: true })
    }

    render() {
        const { trials, trialsGames } = this.props                

        const bestKills = trials.kill_stats ? trials.kill_stats.best_single_game_kills : "-"
        const deathRate = (parseFloat(trials.deaths) / parseFloat(trials.games_played)).toFixed(2)
        return (
            <Reveal animated='move down' instant active={this.state.active} disabled={this.state.disabled}>
                <Reveal.Content visible style={{width: '100%'}}>
                    <Segment
                        inverted
                        raised
                        size='massive'
                        className="profile-segment"
                        loading={this.props.fetchingTrials}                        
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <div></div>
                            <div style={{ textAlign: 'center' }}><Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > TRIALS OF THE NINE </Header></div>
                            <div><Icon link name="ellipsis vertical" fitted onClick={this.handleOpenClick} /></div>
                        </div>
                        <Grid columns='equal'>
                            <Grid.Column>
                                <Grid columns='equal'>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Tooltip
                                                title="Kills / Deaths"
                                                position="top"
                                                size='big'
                                                theme='transparent'
                                                arrow
                                                followCursor
                                            >
                                                <div className="profile-stat-bubble" >
                                                    <div className="profile-stat-bubble-title">K/D</div>
                                                    <div className="profile-stat-bubble-value">{trials.kd_ratio} </div>
                                                </div>
                                            </Tooltip>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Tooltip
                                                title="(Kills + (Assists / 2)) / Deaths"
                                                position="top"
                                                size='big'
                                                theme='transparent'
                                                arrow
                                                followCursor
                                            >
                                                <div className="profile-stat-bubble" >
                                                    <div className="profile-stat-bubble-title-long" >Efficiency</div>
                                                    <div className="profile-stat-bubble-value">{trials.efficiency} </div>
                                                </div>
                                            </Tooltip>
                                        </Grid.Column>

                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Tooltip
                                                title="Wins / Games Played"
                                                position="top"
                                                size='big'
                                                theme='transparent'
                                                arrow
                                                followCursor
                                            >
                                                <div className="profile-stat-bubble" >
                                                    <div className="profile-stat-bubble-title">Win %</div>
                                                    <div className="profile-stat-bubble-value">{trials.win_rate}</div>
                                                </div>
                                            </Tooltip>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Tooltip
                                                title="Most kills in a single game"
                                                position="top"
                                                size='big'
                                                theme='transparent'
                                                arrow
                                                followCursor
                                            >
                                                <div className="profile-stat-bubble" >
                                                    <div className="profile-stat-bubble-title-long">Most Kills</div>
                                                    <div className="profile-stat-bubble-value">{bestKills}</div>
                                                </div>
                                            </Tooltip>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h5' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px', marginBottom: '-19px' }} > Weapon Breakdown </Header>
                                <div style={{width: 'auto', height: '170px'}}>
                                    <Chart data={trials.kill_stats} />
                                </div>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Segment
                        inverted
                        raised
                        size='massive'
                        className="profile-segment"
                        loading={this.props.fetchingTrials}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <div></div>
                            <div style={{ textAlign: 'center' }}><Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > PVP DATA </Header></div>
                            <div><Icon link name="close" fitted onClick={this.handleCloseClick} /></div>
                        </div>
                        <Grid columns='4'>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Kills"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Kills</div>
                                        <div className="profile-stat-bubble-value">{trials.kills} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Deaths"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Deaths</div>
                                        <div className="profile-stat-bubble-value">{trials.deaths} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Games Played"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Games</div>
                                        <div className="profile-stat-bubble-value">{trials.games_played} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Average Lifespan"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title-long" >Avg. Life</div>
                                        <div className="profile-stat-bubble-value-long" >{trials.average_lifespan} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Longest Spree"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Spree</div>
                                        <div className="profile-stat-bubble-value">{trials.kill_stats ? trials.kill_stats.longest_spree : "-"}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Precision Kills"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title-long">Precision</div>
                                        <div className="profile-stat-bubble-value">{trials.kill_stats ? trials.kill_stats.precision_kills : "-"}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Time Played"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Time</div>
                                        <div className="profile-stat-bubble-value-long" >{trials.kill_stats ? trials.kill_stats.total_activity_time : "-"}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Average deaths per game"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">DPG</div>
                                        <div className="profile-stat-bubble-value">{deathRate} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Reveal.Content>
            </Reveal>
        )
    }
}


function mapStateToProps(state) {
    return {
        fetchingTrials: state.profile.fetchingTrials,
        trials: state.profile.trials,
        trialsGames: state.profile.trialsGames,
        trialsError: state.profile.trialsError,
        character: state.profile.character
    }
}

export default connect(mapStateToProps, { fetchTrials })(Trials)
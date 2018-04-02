import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchNightfall } from '../../actions/profile_index';
import { Grid, Header, Segment, Reveal, Icon } from "semantic-ui-react";
import '../../css/Profile.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

class Nightfall extends Component {
    constructor() {
        super();
        this.state = { active: false, disabled: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchNightfall(this.props.user.id, this.props.character.id)
        }, 2500);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.character !== nextProps.character) {
            this.props.fetchNightfall(nextProps.user.id, nextProps.character.id)
        }
    }

    handleOpenClick = () => {
        this.setState({ active: true, disabled: false })
    }
    handleCloseClick = () => {
        this.setState({ active: false, disabled: true })
    }
    render() {
        const normal = this.props.nightfallNormal
        const heroic = this.props.nightfallHeroic
        const normalDeathRate = normal.deaths ? (parseFloat(normal.deaths) / parseFloat(normal.games_played)).toFixed(2) : '-'
        const heroicDeathRate = heroic.deaths ? (parseFloat(heroic.deaths) / parseFloat(heroic.games_played)).toFixed(2) : "-"

        return (
            <Reveal animated='move down' instant active={this.state.active} disabled={this.state.disabled}>
                <Reveal.Content visible>
                    <Segment
                        inverted
                        raised
                        size='massive'
                        className="profile-segment"
                        loading={this.props.fetchingNightfall}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <div></div>
                            <div style={{ textAlign: 'center' }}><Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > NIGHTFALL </Header></div>
                            <div><Icon link name="ellipsis vertical" fitted onClick={this.handleOpenClick} /></div>
                        </div>
                        <Grid columns='equal'>
                            <Grid.Row>
                                <Grid.Column>
                                    <Tooltip
                                        title="# times final boss defeated (Normal | Heroic)"
                                        position="top"
                                        size='big'
                                        theme='transparent'
                                        arrow
                                        followCursor
                                    >
                                        <div className="profile-stat-bubble" >
                                            <div className="profile-stat-bubble-title">Clears</div>
                                            <div className="profile-stat-bubble-value">{normal.completions} | {heroic.completions}</div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                                <Grid.Column >
                                    <Tooltip
                                        title="Completions out of total attempts (Normal | Heroic)"
                                        position="top"
                                        size='big'
                                        theme='transparent'
                                        arrow
                                        followCursor
                                    >
                                        <div className="profile-stat-bubble" >
                                            <div className="profile-stat-bubble-title">Win %</div>
                                            <div className="profile-stat-bubble-value">{normal.win_rate} | {heroic.win_rate}</div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                                <Grid.Column >
                                    <Tooltip
                                        title="Average deaths per game (Normal | Heroic)"
                                        position="top"
                                        size='big'
                                        theme='transparent'
                                        arrow
                                        followCursor
                                    >
                                        <div className="profile-stat-bubble" >
                                            <div className="profile-stat-bubble-title">Death Rate</div>
                                            <div className="profile-stat-bubble-value-long">{normalDeathRate} | {heroicDeathRate}</div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Tooltip
                                        title="Fastest Time Beaten (Normal | Heroic)"
                                        position="top"
                                        size='big'
                                        theme='transparent'
                                        arrow
                                        followCursor
                                    >
                                        <div className="profile-stat-bubble" >
                                            <div className="profile-stat-bubble-title">Fastest Clear</div>
                                            <div className="profile-stat-bubble-value" style={{ fontSize: '1.1rem' }}>{normal.fastest_completion} | {heroic.fastest_completion}</div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                                <Grid.Column >
                                    <Tooltip
                                        title="Average life span (Normal | Heroic)"
                                        position="top"
                                        size='big'
                                        theme='transparent'
                                        arrow
                                        followCursor
                                    >
                                        <div className="profile-stat-bubble" >
                                            <div className="profile-stat-bubble-title">Avg. Life</div>
                                            <div className="profile-stat-bubble-value" style={{ fontSize: '1.1rem' }}>{normal.average_lifespan} | {heroic.average_lifespan} </div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Segment
                        inverted
                        raised
                        size='massive'
                        className="profile-segment"
                        loading={this.props.fetchingNightfall}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <div></div>
                            <div style={{ textAlign: 'center' }}><Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > Other Stats </Header></div>
                            <div><Icon link name="close" fitted onClick={this.handleCloseClick} /></div>
                        </div>
                        <Grid columns='3'>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Kills (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Kills</div>
                                        <div className="profile-stat-bubble-value">{normal.kills} | {heroic.kills}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Deaths (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Deaths</div>
                                        <div className="profile-stat-bubble-value">{normal.deaths} | {heroic.deaths} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total strikes entered (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Attemps</div>
                                        <div className="profile-stat-bubble-value">{normal.games_played} | {heroic.games_played} </div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Efficiency (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title-long">Efficiency</div>
                                        <div className="profile-stat-bubble-value-long">{normal.efficiency} | {heroic.efficiency}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Orbs Made (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Orbs</div>
                                        <div className="profile-stat-bubble-value">{normal.kill_stats ? normal.kill_stats.orbs_dropped : "-"} | {heroic.kill_stats ? heroic.kill_stats.orbs_dropped : "-"}</div>
                                    </div>
                                </Tooltip>
                            </Grid.Column>
                            <Grid.Column>
                                <Tooltip
                                    title="Total Precision Kills (Normal | Heroic)"
                                    position="top"
                                    size='big'
                                    theme='transparent'
                                    arrow
                                    followCursor
                                >
                                    <div className="profile-stat-bubble" >
                                        <div className="profile-stat-bubble-title">Precision</div>
                                        <div className="profile-stat-bubble-value">{normal.kill_stats ? normal.kill_stats.precision_kills : "-"} | {heroic.kill_stats ? heroic.kill_stats.precision_kills : "-"}</div>
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
        fetchingNightfall: state.profile.fetchingNightfall,
        nightfallNormal: state.profile.nightfallNormal,
        nightfallHeroic: state.profile.nightfallHeroic,
        nightfallError: state.profile.nightfallError,
        character: state.profile.character
    }
}

export default connect(mapStateToProps, { fetchNightfall })(Nightfall)
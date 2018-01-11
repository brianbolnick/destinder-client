import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchNightfall } from '../../actions/profile_index';
import { Grid, Header, Segment } from "semantic-ui-react";
import '../../css/Profile.css';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

class Nightfall extends Component {
    componentWillMount() {
        setTimeout(() => {
            this.props.fetchNightfall(this.props.user.id, this.props.character.id)
        }, 2500);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.character !== nextProps.character) {
            this.props.fetchNightfall(nextProps.user.id, nextProps.character.id)
        }
    }
    render() {
        const normal = this.props.nightfallNormal
        const heroic = this.props.nightfallHeroic
        const normalDeathRate = normal.deaths ? parseFloat(normal.deaths) / parseFloat(normal.games_played) : null
        const heroicDeathRate = heroic.deaths ? parseFloat(heroic.deaths) / parseFloat(heroic.games_played) : "-"

        return (
            <Segment
                inverted
                raised
                size='massive'
                className="profile-segment"
                loading={this.props.fetchingNightfall}
            >
                <Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > NIGHTFALL </Header>
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
                                    <div className="profile-stat-bubble-value">{normalDeathRate} | {heroicDeathRate}</div>
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
import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchPvp } from '../../actions/profile_index';
import { Grid, Header, Segment} from "semantic-ui-react";
import '../../css/Profile.css';
import Chart from '../../charts/WeaponBreakoutChart'
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

class Pvp extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.fetchPvp(this.props.user.id, this.props.character.id)
        }, 2500);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.character !== nextProps.character) {
            this.props.fetchPvp(nextProps.user.id, nextProps.character.id)
        }
    }


    render() {
        const { pvp } = this.props

        const bestKills = pvp.kill_stats ? pvp.kill_stats.best_single_game_kills : "-"
        return (
            <Segment
                inverted
                raised
                size='massive'
                className="profile-segment"
                loading={this.props.fetchingPvp}
            >
                <Header as='h3' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px' }} > PVP OVERALL </Header>
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
                                            <div className="profile-stat-bubble-value">{pvp.kd_ratio} </div>
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
                                            <div className="profile-stat-bubble-title" style={{fontSize: '0.8rem'}}>Efficiency</div>
                                            <div className="profile-stat-bubble-value">{pvp.efficiency} </div>
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
                                            <div className="profile-stat-bubble-value">{pvp.win_rate}</div>
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
                                            <div className="profile-stat-bubble-title"  style={{fontSize: '0.8rem'}}>Most Kills</div>
                                            <div className="profile-stat-bubble-value">{bestKills}</div>
                                        </div>
                                    </Tooltip>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' style={{ color: '#212121', fontWeight: '100', letterSpacing: '2px', marginBottom: '-12px' }} > Weapon Breakdown </Header>
                        <Chart data={pvp.kill_stats} />
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}


function mapStateToProps(state) {
    return {
        fetchingPvp: state.profile.fetchingPvp,
        pvp: state.profile.pvp,
        pvpError: state.profile.pvpError,
        character: state.profile.character
    }
}

export default connect(mapStateToProps, { fetchPvp })(Pvp)
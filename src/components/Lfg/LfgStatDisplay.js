import React, { Component } from "react";
import {
    Grid,
    Statistic,
} from "semantic-ui-react";

export class TrialsData extends Component {
    render() {
        return (
            <Grid columns={4} divided style={{ width: '100%' }}>
                <Grid.Row >
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.kd_ratio}</Statistic.Value>
                            <Statistic.Label style={{ marginTop: '10px' }}>K/D</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value className='long-stat' style={{ fontSize: '1.1em' }}>{this.props.player_data.elo.elo}</Statistic.Value>
                            <Statistic.Label style={{ marginTop: '10px' }}>ELO</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.win_rate}<span style={{ fontSize: '0.8em' }}>%</span></Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>WIN RATE</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value >{this.props.player_data.flawless}<span style={{ fontSize: '0.8em' }}>x</span></Statistic.Value>
                            <Statistic.Label  style={{ fontSize: '0.8em', marginTop: '10px' }}>FLAWLESS</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        )
    }
}

export class PvpData extends Component {
    render() {
        return (
            <Grid columns={4} divided textAlign='center'>
                <Grid.Row >
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.kd_ratio}</Statistic.Value>
                            <Statistic.Label style={{ marginTop: '10px' }}>K/D</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.games_played}</Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>GAMES PLAYED</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value className='extra-long-stat' style={{ fontSize: '1.1em' }} >{this.props.player_data.average_lifespan}</Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>AVG LIFESPAN</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.kad_ratio}</Statistic.Value>
                            <Statistic.Label style={{ marginTop: '10px' }}>K/AD</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        )
    }
}

export class PveData extends Component {
    render() {
        return (
            <Grid columns={4} divided>
                <Grid.Row >
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value className='extra-long-stat' style={{ fontSize: '1.1em' }} >{this.props.player_data.fastest_completion}</Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>FASTEST RUN</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.completions}</Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>TIMES BEAT</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.games_played}</Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>TIMES PLAYED</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value>{this.props.player_data.win_rate}<span style={{ fontSize: '0.8em' }}>%</span> </Statistic.Value>
                            <Statistic.Label style={{ fontSize: '0.8em' }}>WIN RATE</Statistic.Label>
                        </Statistic>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        )
    }
}


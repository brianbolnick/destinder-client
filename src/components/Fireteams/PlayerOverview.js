import React, { Component } from 'react';
import { Container, Card, Grid, Divider, Statistic, Image, Popup } from 'semantic-ui-react';
import { WEAPONS } from '../../data/common_constants'


class StatsCard extends Component {
    render() {
        console.log(this.props)
        const { data } = this.props
        return (
            <Card style={{ width: '100%', color: '#f5f5f5', backgroundColor: 'transparent' }}>
                <Container text style={{ padding: '2%' }}>
                    <Grid centered stretched verticalAlign='middle' style={{ height: '77vh' }}>
                        <Grid.Row>
                            <Grid.Column>
                                <Grid columns={2} centered stretched verticalAlign='middle' >
                                    <Grid.Column>
                                        <Grid columns='equal' centered stretched verticalAlign='middle' >
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Statistic color='teal' inverted size='mini'>
                                                        {/* <Statistic.Value>{data.player_data.stats.kill_stats.best_weapon_type}</Statistic.Value> */}
                                                        <Statistic.Value>
                                                            <Popup
                                                                trigger={<Image src={WEAPONS[data.player_data.stats.kill_stats.best_weapon_type]} size='small' />}
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
                                        Weapon Kill Breakdown Chart
                                </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row >
                            <Grid.Column>
                                <Grid centered stretched verticalAlign='middle' columns={2} >
                                    <Grid.Column>
                                        Analysis
                                </Grid.Column>
                                    <Grid.Column>
                                        Reputation
                                </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Grid columns={2} centered stretched verticalAlign='middle' >
                                    <Grid.Column>
                                        Recent Games
                                </Grid.Column>
                                    <Grid.Column>
                                        Something else
                                </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Card>
        )
    }
}

export default StatsCard;
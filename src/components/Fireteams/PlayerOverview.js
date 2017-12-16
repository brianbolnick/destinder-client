import React, { Component } from 'react';
import { Container, Card, Grid, Divider, Statistic, Image, Popup, Rating, Icon } from 'semantic-ui-react';
import WeaponChart from '../../charts/WeaponChart.js';

import { WEAPONS } from '../../data/common_constants'


class StatsCard extends Component {
    render() {
        console.log(this.props)
        const { data, account_info } = this.props

        const repValue = account_info.reputation  ? Math.round(account_info.reputation.reputation_score * 5) / 100 : 0

        const repDisplay = account_info.reputation  ?
            <Popup
                trigger={<Rating size='mini' defaultRating={repValue} maxRating={5} icon='star' disabled />}
                content={`Reputation: ${account_info.reputation.reputation_score}% (${account_info.reputation.total_votes} votes)`}
            />
            :
            <Popup
                trigger={<Rating size='mini' defaultRating={0} maxRating={5} icon='star' disabled />}
                content={"This player does not have a Destinder account."}
            />
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
                                        Analysis
                                    </Grid.Column>
                                    <Grid.Column >
                                        <h4>Player Reputation</h4>
                                        <Grid centered stretched verticalAlign='middle'>
                                            <Grid.Column width={3} style={{ alignItems: 'center' }}>
                                                <Icon name="thumbs outline up" link size='big' />
                                            </Grid.Column>
                                            <Grid.Column width={5}>
                                                {repDisplay}
                                            </Grid.Column>
                                            <Grid.Column width={3} style={{ alignItems: 'center' }}>
                                                <Icon name="thumbs outline down" link size='big' />
                                            </Grid.Column>
                                        </Grid>
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
            </Card >
        )
    }
}

export default StatsCard;
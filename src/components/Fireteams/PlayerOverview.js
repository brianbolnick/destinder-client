import React from 'react';
import { Container,  Card,  Grid, Divider } from 'semantic-ui-react';

const StatsCard = (props) => {
    return (
        <Card style={{ width: '100%', color: '#212121'}}>
            <Container text>
                <Grid centered stretched verticalAlign='middle' style={{ height: '77vh' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={2} centered stretched verticalAlign='middle' >
                                <Grid.Column>
                                    <Grid columns='equal'  centered stretched verticalAlign='middle' >
                                        <Grid.Row>
                                            <Grid.Column>
                                                Best Weapon
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                Precision Kills
                                            </Grid.Column>
                                            <Grid.Column>
                                                Longest Spree
                                            </Grid.Column>
                                            <Grid.Column>
                                                Kill Distance
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

export default StatsCard;
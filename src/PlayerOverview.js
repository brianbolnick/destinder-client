import React, { Component } from 'react';
import { Container, Menu, Card, Tab, Image, Grid, Transition, Divider } from 'semantic-ui-react';
import Layout from './Layout.js';
import createReactClass from 'create-react-class';
import PlayerStatCard from './PlayerStatCard.js';
import playerData from './data/TempPlayerData.js';

const StatsCard = props => {
  return (
    <Card>
      <Grid
        centered
        stretched
        verticalAlign="middle"
        style={{ height: "77vh" }}
      >
        <Grid.Row>
          <Grid.Column>STUFF</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>STUFF</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>STUFF</Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};

const StatsCard = (props) => {
    return (
        <Card style={{ width: '100%'}}>
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

const PlayerOverview = (props) => {
    // console.log(props);
    return (
        // <div>
        //     {props.data.player_name}
        // </div>
        <Transition animation='fly right' duration={1500} transitionOnMount={true}>
            <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                <Grid centered stretched verticalAlign='middle' columns={2} style={{ height: '80vh' }}>
                    <Grid.Column width={4}>
                        <PlayerStatCard player_name={props.player_name} data={props.data} />
                    </Grid.Column>
                    <Grid.Column width={12} style={{ height: '77vh', width: '100%' }}>
                        <StatsCard data={props.data} />
                    </Grid.Column>
                </Grid>
            </div>
        </Transition>

    )
}

export default PlayerOverview;

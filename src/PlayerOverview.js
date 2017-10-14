import React, { Component } from 'react';
import { Container, Menu, Card, Tab, Image, Grid, Transition,  } from 'semantic-ui-react';
import Layout from './Layout.js';
import createReactClass from 'create-react-class';
import PlayerStatCard from './PlayerStatCard.js';
import playerData from './data/TempPlayerData.js';


const StatsCard = (props) => {
    return (
        <Card>
            <Grid centered stretched verticalAlign='middle' style={{height: '77vh' }}>
                <Grid.Row>
                    <Grid.Column>
                        STUFF
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        STUFF
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        STUFF
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
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
             <div style={{marginLeft: '2%', marginRight: '2%'  }}>             
                <Grid centered stretched verticalAlign='middle' columns={2} style={{height: '80vh' }}>
                    <Grid.Column width={4}>
                        <PlayerStatCard data={props.data} />
                    </Grid.Column>
                    <Grid.Column width={12} style={{height: '77vh',     width: '100%' }}>
                        <StatsCard data={props.data}/>
                    </Grid.Column>
                </Grid>
            </div>                        
        </Transition>  

    )
}

export default PlayerOverview;
import React from 'react';
import {  Header, Card, Segment,  Icon, Image, Grid, Label, Popup, Button, Rating, Divider } from 'semantic-ui-react';
import KillChart from '../charts/KillChart.js';



const PlayerStatCard = (props) => {
    var exotic = props.data.items[0].helmet;

    for (var key in props.data.items[0]) {
        if (props.data.items[0][key].item_tier === "Exotic") {
            exotic = props.data.items[0][key];
        }
    }

    const profileContent = (
        <div>
            <Grid centered divided columns={2}>
                <Grid.Column textAlign='center'>
                    <div>
                        <Header as='h6' style={{color: '#212121' }}>
                            ACCOUNT BADGES
                        </Header>
                        <Label.Group>
                            <Label  style={{backgroundColor: '#212121', color: '#f5f5f5' }}>
                                <Icon  name='wizard' /> ARCHITECT
                            </Label>
                            <Label  style={{backgroundColor: '#2ecc71',color: '#f5f5f5' }}>
                                <Icon  name='dollar' /> DONATOR
                            </Label>
                            <Label  style={{backgroundColor: '#1DA1F2', color: '#f5f5f5' }}>
                                <Icon name='users' /> FOLLOWER
                            </Label>
                            <Label  style={{backgroundColor: '#026670', color: '#f5f5f5' }}>
                                <Icon name='dollar' /> VETERAN
                            </Label>
                        </Label.Group>
                    </div> 
                </Grid.Column>
                <Grid.Column textAlign='center'>
                    <Header as='h6'>REPUTATION</Header>                      
                    <Rating icon='star' defaultRating={3.5} maxRating={5} />   
                    <Divider hidden style={{margin: '0'}}/>               
                    <Button>Go to Profile</Button>
                </Grid.Column>
            </Grid>
        </div>
    )

    return (
        <div>           
            <Card style={{boxShadow: 'none'}}>                
                <Card.Content style={{padding: '0' }}>
                    <Popup
                    trigger={<Label as='a' color='teal' corner='right'><Icon name="user circle" style={{margin: '0'}}/></Label>  }
                    content={profileContent}
                    position='bottom center'
                    hoverable
                    flowing
                    /> 
                
                    <Card.Header  style={{display: 'none' }}>                                          
                        <Segment className='stat-card-header' style={{backgroundImage: `url(${props.data.emblem_background})`}}>
                            {props.data.player_name}
                        </Segment>
                    </Card.Header>
                <Card.Meta style={{height: '150px', marginBottom: '-20px'}}>
                    <Segment style={{backgroundImage: `url(${props.data.emblem_background})`, backgroundSize: 'cover'}} className='stat-card-subheader'/>                        
                    
                    <div style={{textAlign: '-webkit-center', position: 'relative',  bottom: '43px'}}>
                        <Segment circular style={{ width: 50, height: 50 }} >
                            <Header as='h2' style={{color: '#212121' }}>
                                {props.data.stats[0].kd_ratio}
                                <Header.Subheader>
                                K/D
                                </Header.Subheader>
                            </Header>   
                        </Segment>
                    </div>

                    
                </Card.Meta>                
                <Card.Description style={{padding: '10px'}}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2%',
                        fontSize: '1.25em',
                        fontWeight: '700',
                    }}>{props.player_name}</div>
                    <Popup
                    trigger={<div style={{
                        textAlign: 'center',
                        fontSize: '1em',
                        fontWeight: '400',
                        marginBottom: '5%'
                    }}><Image src={props.data.subclass_icon} avatar size='mini'/>{props.data.subclass}</div>}
                    content='Subclass stats!'
                    position='bottom center'
                    /> 
                    
                    <div style={{padding: '15px'}}>
                        {<KillChart key={`${props.data.player_name}${props.data.character_type}`} data={props.data.recent_games}/>}
                        <div style={{
                            textAlign: 'center',
                            fontSize: '0.8em',
                            fontWeight: '400',
                        }}>Recent Games K/D Spread</div>
                    </div>
                    <Grid textAlign='center' columns='equal' divided style={{marginTop: '20px', marginBottom: '10px'}}>                        
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#212121' }}>
                                    {props.data.stats[0].kad_ratio}
                                    <Header.Subheader>
                                    KA/D
                                    </Header.Subheader>
                                </Header>   
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#7198B7' }}>
                                    {props.data.stats[0].elo.value}
                                    <Header.Subheader>
                                    ELO
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#212121' }}>
                                    {props.data.stats[0].win_rate}
                                    <Header.Subheader>
                                    WIN %
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                </Card.Description>
                </Card.Content>
                <Card.Content extra style={{backgroundColor: '#f7f7f7'}}>
                    
                    <Grid  columns='equal'>
                        <Grid.Row style={{padding: '0' }}>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>                                
                                <Popup
                                trigger={<Image style={{ borderRadius: '4px'}} bordered src={props.data.items[0].primary_weapon_1.item_icon} />}
                                content={props.data.items[0].primary_weapon_1.item_name}
                                header="Primary 1"
                                position='top center'
                                /> 
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                            <Popup
                                trigger={<Image style={{ borderRadius: '4px'}} bordered src={props.data.items[0].primary_weapon_2.item_icon} />}
                                content={props.data.items[0].primary_weapon_2.item_name}
                                header="Primary 2"
                                position='top center'
                                /> 
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                            <Popup
                                trigger={<Image style={{ borderRadius: '4px'}} bordered src={props.data.items[0].power_weapon.item_icon} />}
                                content={props.data.items[0].power_weapon.item_name}
                                header="Power"
                                position='top center'
                                /> 
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                            <Popup
                                trigger={<Image style={{ borderRadius: '4px'}} bordered src={exotic.item_icon} />}
                                content={exotic.item_name}
                                header={exotic.item_type}
                                position='top center'
                                /> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </div>
    )
}

export default PlayerStatCard;
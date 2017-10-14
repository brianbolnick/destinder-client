import React from 'react';
import {  Header, Card, Segment,  Icon, Image, Grid, Label, Popup } from 'semantic-ui-react';
import KillChart from './charts/KillChart.js';


const FireteamPlayerCard = (props) => {
    return (
        <div>           
            <Card style={{boxShadow: 'none'}}>                
                <Card.Content style={{padding: '0' }}>
                    <Popup
                    trigger={<Label as='a' color='teal' corner='right'><Icon name="user circle" style={{margin: '0'}}/></Label>  }
                    content='badges and stuff!'
                    position='top right'
                    /> 
                
                    <Card.Header  style={{display: 'none' }}>                                          
                        <Segment className='stat-card-header' style={{backgroundImage: `url(${props.data.characters[0].emblem_background})`}}>
                            {props.data.player_name}
                        </Segment>
                    </Card.Header>
                <Card.Meta style={{height: '150px', marginBottom: '-20px'}}>
                    <Segment style={{backgroundImage: `url(${props.data.characters[0].emblem_background})`, backgroundSize: 'cover'}} className='stat-card-subheader'/>                        
                    
                    <div style={{textAlign: '-webkit-center', position: 'relative',  bottom: '43px'}}>
                        <Segment circular style={{ width: 50, height: 50 }} >
                            <Header as='h2' style={{color: '#212121' }}>
                                1.67
                                <Header.Subheader>
                                K/D
                                </Header.Subheader>
                            </Header>   
                        </Segment>
                    </div>

                    
                </Card.Meta>
                {/* <Popup
                trigger={<Label as='a' circular color='teal' floating><Icon name="user circle" style={{margin: '0'}}/></Label>}
                content='badges and stuff!'
                position='top right'
                /> */}

                
                <Card.Description style={{padding: '10px'}}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '2%',
                        fontSize: '1.25em',
                        fontWeight: '700',
                    }}>{props.data.player_name}</div>
                    <Popup
                    trigger={<div style={{
                        textAlign: 'center',
                        fontSize: '1em',
                        fontWeight: '400',
                        marginBottom: '5%'
                    }}><Image src={props.data.characters[0].subclass_icon} avatar size='mini'/>{props.data.characters[0].subclass}</div>}
                    content='Subclass stats!'
                    position='bottom center'
                    /> 
                    
                    <div style={{padding: '15px'}}>
                        <KillChart key={`${props.data.player_name}${props.data.characters[0].character_type}`} data={props.data.characters[0].recent_games}/>
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
                                    2.05
                                    <Header.Subheader>
                                    KA/D
                                    </Header.Subheader>
                                </Header>   
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#7198B7' }}>
                                    2315
                                    <Header.Subheader>
                                    ELO
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#212121' }}>
                                    89.3%
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
                    {/* <div>
                    <Header as='h6' style={{color: '#212121' }}>
                        ACCOUNT BADGES
                    </Header>
                    <Label.Group>
                        <Label  style={{backgroundColor: '#212121', color: '#f5f5f5' }}>
                            <Icon style={{margin: '0'}} name='wizard' />
                        </Label>
                        <Label  style={{backgroundColor: '#2ecc71',color: '#f5f5f5' }}>
                            <Icon style={{margin: '0'}} name='dollar' />
                        </Label>
                        <Label  style={{backgroundColor: '#1DA1F2', color: '#f5f5f5' }}>
                            <Icon style={{margin: '0'}} name='users' />
                        </Label>
                        <Label  style={{backgroundColor: '#026670', color: '#f5f5f5' }}>
                            <Icon style={{margin: '0'}} name='dollar' />
                        </Label>
                    </Label.Group>
                    </div> */}
                    <Grid  columns='equal'>
                        <Grid.Row style={{padding: '0' }}>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                                <Image style={{ borderRadius: '4px'}} bordered src='https://www.bungie.net/common/destiny2_content/icons/f23023062214b6b778c220f3d841a4ce.jpg' />
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                                <Image style={{borderRadius: '4px'}} bordered src='https://www.bungie.net/common/destiny2_content/icons/701304da200d854161358a9ed522daa7.jpg' />
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                                <Image style={{borderRadius: '4px'}} bordered src='https://www.bungie.net/common/destiny2_content/icons/a517910fcae40a77ee3f432456bd81c4.jpg' />
                            </Grid.Column>
                            <Grid.Column style={{padding: '5px 4px 7px 4px' }}>
                                <Image style={{borderRadius: '4px'}} bordered src='https://bungie.net/common/destiny2_content/icons/5e995f3d538bbfdc83f887b11a1f747c.jpg' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </div>
    )
}

export default FireteamPlayerCard;
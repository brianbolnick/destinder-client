import React, { Component } from 'react';
import { Container, Header, Menu, Card, Tab, Segment, Sidebar, Icon, Image, Grid, Transition } from 'semantic-ui-react';
import Layout from './Layout.js';
import {
    Route,
    Link
} from 'react-router-dom';
import TrialsLogo from './img/trialsofthenine.png';

const playerData = [
    {
        player_name: "Luminusss",         
        characters: [
            {
                character_type: 'Titan',
                subclass: 'Sentinel',
                light_level: '302',
                emblem: "https://bungie.net//common/destiny2_content/icons/9a74b99143d97a7ccd01b958592b96cb.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/dacfa513281d101aa4dd276a0aacfc0f.jpg"
            },
            {
                character_type: 'Hunter',
                subclass: 'Arcstrider',
                light_level: '301',
                emblem: "https://bungie.net//common/destiny2_content/icons/9a74b99143d97a7ccd01b958592b96cb.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/dacfa513281d101aa4dd276a0aacfc0f.jpg"
            },
            {
                character_type: 'Warlock',
                subclass: 'Dawnblade',
                light_level: '299',
                emblem: "https://bungie.net//common/destiny2_content/icons/9a74b99143d97a7ccd01b958592b96cb.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/dacfa513281d101aa4dd276a0aacfc0f.jpg"
            },
        ]
    },
    {
        player_name: "ii WALZ ii",         
        characters: [
            {
                character_type: 'Titan',
                subclass: 'Sentinel',
                light_level: '302',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/1f5e4a3cfeaca5fd6465ffd15b81ffa6.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/d3c2e878297ea7e1152e2895ae20cf2c.jpg"
            },
            {
                character_type: 'Hunter',
                subclass: 'Arcstrider',
                light_level: '301',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/1f5e4a3cfeaca5fd6465ffd15b81ffa6.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/d3c2e878297ea7e1152e2895ae20cf2c.jpg"
            },
            {
                character_type: 'Warlock',
                subclass: 'Dawnblade',
                light_level: '299',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/1f5e4a3cfeaca5fd6465ffd15b81ffa6.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/d3c2e878297ea7e1152e2895ae20cf2c.jpg"
            },
        ]
    },
    {
        player_name: "KURTO13",         
        characters: [
            {
                character_type: 'Titan',
                subclass: 'Sentinel',
                light_level: '302',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/329b866699d4048e9a8ca8d8861b0277.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/798f5839febe4ad28b42e2c88c94db9d.jpg"
            },
            {
                character_type: 'Hunter',
                subclass: 'Arcstrider',
                light_level: '301',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/329b866699d4048e9a8ca8d8861b0277.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/798f5839febe4ad28b42e2c88c94db9d.jpg"
            },
            {
                character_type: 'Warlock',
                subclass: 'Dawnblade',
                light_level: '299',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/329b866699d4048e9a8ca8d8861b0277.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/798f5839febe4ad28b42e2c88c94db9d.jpg"
            },
        ]
    },
    {
        player_name: "Putin Pudding",         
        characters: [
            {
                character_type: 'Titan',
                subclass: 'Sentinel',
                light_level: '302',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/0a8dfa6d28e2c49068f445613e27a5d5.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/a0dd3e3444de2012b554ea4c8b655da9.jpg"
            },
            {
                character_type: 'Hunter',
                subclass: 'Arcstrider',
                light_level: '301',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/0a8dfa6d28e2c49068f445613e27a5d5.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/a0dd3e3444de2012b554ea4c8b655da9.jpg"
            },
            {
                character_type: 'Warlock',
                subclass: 'Dawnblade',
                light_level: '299',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/0a8dfa6d28e2c49068f445613e27a5d5.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/a0dd3e3444de2012b554ea4c8b655da9.jpg"
            },
        ]
    }
]

const FireteamPlayerCard = (props) => {
    return (
        <div>           
            <Card style={{boxShadow: 'none'}}>                
                <Card.Content style={{padding: '0' }}>
                    <Card.Header>                    
                        <Segment className='stat-card-header' style={{backgroundImage: `url(${props.data.characters[0].emblem_background})`}}>
                            {props.data.player_name}
                        </Segment>
                    </Card.Header>
                <Card.Meta>
                    <Segment style={{backgroundColor: '#f7f7f7' }} className='stat-card-subheader'/>                        
                    
                    <div style={{textAlign: '-webkit-center', position: 'relative',  bottom: '60px'}}>
                        <Segment circular style={{ width: 125, height: 125 }} >
                            <Header as='h2' style={{color: '#212121' }}>
                                1.67
                                <Header.Subheader>
                                K/D
                                </Header.Subheader>
                            </Header>   
                        </Segment>
                    </div>

                    
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Grid textAlign='center' columns='equal' divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h4' style={{color: '#212121' }}>
                                    1.67
                                    <Header.Subheader>
                                    K/D
                                    </Header.Subheader>
                                </Header>   
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h5' style={{color: '#212121' }}>
                                    1.67
                                    <Header.Subheader>
                                    K/D
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h5' style={{color: '#212121' }}>
                                    1.67
                                    <Header.Subheader>
                                    K/D
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </div>
    )
}

const FireteamOverview = (props) => {
    const columns = props.data.map(function(object, i) {
        return (
            <Transition animation='fly down' duration={1000 + (i * 1000)} transitionOnMount={true}>
                <Grid.Column>
                    <FireteamPlayerCard key={i} data={object} />
                </Grid.Column>
            </Transition>
            
        )
    });

    return (
        <div style={{marginLeft: '2%', marginRight: '2%'  }}>             
            <Grid centered stretched verticalAlign='middle' columns={4} style={{height: '80vh' }}>
                <Grid.Row>
                    {columns}
                </Grid.Row>
            </Grid>
        </div>
    )
}

const PlayerCharacterData = (props) => {
    // console.log(props);
    return (
        <div>
            {props.data.player_name}
        </div>
    )
}

class ProfilePage extends Component {
    
    state = { activeItem: 'home' }
    
    changePlayer = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        function getPlayerCharacters(props) {            
            var chars = [];
            props.characters.map(function(object, i) {
                chars.push({ menuItem: `${object.character_type}`, render: () => <Tab.Pane><PlayerCharacterData data={props}/></Tab.Pane> })
            });
            return chars;
        };
        
        const teamPanes = [
            { menuItem: 'Fireteam', render: () => <Tab.Pane><FireteamOverview data={playerData}/></Tab.Pane> }
        ]
        
        const sideTabs = [{ menuItem:  <Menu.Item style={{ textAlign: 'center', padding: '0', height: '16%', backgroundImage: `url(${TrialsLogo})`, backgroundSize: 'cover', backgroundPosition: 'center'}} key='overview'></Menu.Item>, render: () => <Tab.Pane><Tab className='overview-tabs' panes={teamPanes} /></Tab.Pane> }];
        
        playerData.map(function(object, i) {
            sideTabs.push({ menuItem:  <Menu.Item style={{ textAlign: 'center'}} key={`player${i + 1}`}><Image className='trials-player-icon' src={object.characters[0].emblem} /></Menu.Item>, render: () => <Tab.Pane><Tab panes={getPlayerCharacters(object)} /></Tab.Pane> })
        }); 

        return (
        <Layout>
            <div className="profile-page" style={{height: '100vh' }}>
                <Container>
                    <div style={{ height: '50px' }} />
                    <div> 
                        <Card className='hide-on-mobile' fluid style={{height: '85vh'}}>
                            <Card.Content style={{ padding: '0'}}>
                                <Tab grid={{ className: 'profile-panels', paneWidth: 14, tabWidth: 2}} menu={{ attached: 'left', borderless: true, vertical: true, tabular: 'left' }} panes={sideTabs} />
                            </Card.Content>
                        </Card>
                    </div>
                </Container>
            </div>
        </Layout>
        );
    }
}
  
export default ProfilePage;
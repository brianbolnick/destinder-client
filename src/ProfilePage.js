import React, { Component } from 'react';
import { Container, Header, Menu, Card, Tab, Segment, Sidebar, Icon, Image, Grid, Transition, Label, Popup } from 'semantic-ui-react';
import Layout from './Layout.js';
import {
    Route,
    Link
} from 'react-router-dom';
import {Line, Bar} from 'react-chartjs-2';
import TrialsLogo from './img/trialsofthenine.png';
import KillChart from './charts/KillChart.js';
import FireteamPlayerCard from './FireteamPlayerCard.js';
import playerData from './data/TempPlayerData.js';
import Carousel from 'nuka-carousel';


const SliderTest = (props) => {
    var Decorators = [{
        component: React.createClass({
          render() {
            return ( <div/>
            )
          }
        }),
        position: 'CenterLeft',
        style: {
          padding: 20
        }
      }];
      return (
        <Carousel wrapAround={true} decorators={Decorators}>
          {props.slides}
        </Carousel>
      )    
}

const FireteamOverview = (props) => {
    const columns = props.data.map(function(object, i) {
        return (
            <Transition key={i} animation='fly down' duration={1000 + (i * 1000)} transitionOnMount={true}>
                <Grid.Column style={{paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
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
        
        // const sideTabs = [{ menuItem:  <Menu.Item style={{ textAlign: 'center', padding: '0', height: '16%', backgroundImage: `url(${TrialsLogo})`, backgroundSize: 'cover', backgroundPosition: 'center'}} key='overview'></Menu.Item>, render: () => <Tab.Pane><Tab className='overview-tabs' panes={teamPanes} /></Tab.Pane> }];
        const sideTabs = [{ menuItem:  <Menu.Item style={{ textAlign: 'center', padding: '0', height: '16%', backgroundImage: 'url("https://www.bungie.net/img/theme/destiny/icons/game_modes/allmodes.png")', backgroundSize: 'cover', backgroundPosition: 'center'}} key='overview'></Menu.Item>, render: () => <Tab.Pane><Tab className='overview-tabs' panes={teamPanes} /></Tab.Pane> }];
        const slides = [];
        
        playerData.map(function(object, i) {
            sideTabs.push({ menuItem:  <Menu.Item style={{ textAlign: 'center'}} key={`player${i + 1}`}><Image className='trials-player-icon' src={object.characters[0].emblem} /></Menu.Item>, render: () => <Tab.Pane><Tab panes={getPlayerCharacters(object)} /></Tab.Pane> })
            slides.push(<FireteamPlayerCard key={i} data={object} />);
        }); 

        return (
        <Layout>
            <div className="profile-page" style={{height: '100vh' }}>
                <Container>
                    <div className='hide-on-mobile' style={{ height: '50px' }} />
                    <div> 
                        <Card className='hide-on-mobile' fluid style={{height: '85vh'}}>
                            <Card.Content style={{ padding: '0'}}>
                                <Tab grid={{ className: 'profile-panels', paneWidth: 14, tabWidth: 2}} menu={{ attached: 'left', borderless: true, vertical: true, tabular: 'left' }} panes={sideTabs} />
                            </Card.Content>
                        </Card>
                        <div style={{paddingLeft: '9%'}} className='hide-on-med-and-up' >
                        
                            <SliderTest slides={slides}/>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
        );
    }
}
  
export default ProfilePage;
import React, { Component } from 'react';
import { Container, Header, Menu, Card, Tab, Segment, Sidebar, Icon, Image, Grid, Transition, Label } from 'semantic-ui-react';
import Layout from './Layout.js';
import {
    Route,
    Link
} from 'react-router-dom';
import {Line, Bar} from 'react-chartjs-2';
import TimeAgo from 'timeago-react';
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
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/dacfa513281d101aa4dd276a0aacfc0f.jpg",
                recent_games:[{kills:3.0,deaths:4.0,kd_ratio:"0.75",kad_ratio:"0.88",standing:0.0,game_date:"2017-01-07T06:57:05Z"},{kills:9.0,deaths:6.0,kd_ratio:"1.50",kad_ratio:"1.58",standing:0.0,game_date:"2017-01-07T06:46:14Z"},{kills:5.0,deaths:8.0,kd_ratio:"0.63",kad_ratio:"0.75",standing:1.0,game_date:"2017-01-07T06:33:44Z"},{kills:13.0,deaths:2.0,kd_ratio:"6.50",kad_ratio:"8.00",standing:0.0,game_date:"2017-01-07T06:17:35Z"},{kills:2.0,deaths:6.0,kd_ratio:"0.33",kad_ratio:"0.67",standing:0.0,game_date:"2017-01-07T05:56:04Z"},{kills:6.0,deaths:3.0,kd_ratio:"2.00",kad_ratio:"2.67",standing:0.0,game_date:"2016-12-31T22:30:27Z"},{kills:5.0,deaths:7.0,kd_ratio:"0.71",kad_ratio:"1.00",standing:0.0,game_date:"2016-12-31T22:18:54Z"},{kills:10.0,deaths:5.0,kd_ratio:"2.00",kad_ratio:"2.40",standing:0.0,game_date:"2016-12-31T21:53:43Z"},{kills:9.0,deaths:1.0,kd_ratio:"9.00",kad_ratio:"10.50",standing:0.0,game_date:"2016-12-31T21:43:16Z"},{kills:9.0,deaths:3.0,kd_ratio:"3.00",kad_ratio:"3.50",standing:0.0,game_date:"2016-12-31T21:32:25Z"}]
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
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/d3c2e878297ea7e1152e2895ae20cf2c.jpg",
                recent_games:[{kills:3.0,deaths:4.0,kd_ratio:"0.75",kad_ratio:"0.88",standing:0.0,game_date:"2017-01-07T06:57:05Z"},{kills:9.0,deaths:6.0,kd_ratio:"1.50",kad_ratio:"1.58",standing:0.0,game_date:"2017-01-07T06:46:14Z"},{kills:5.0,deaths:8.0,kd_ratio:"0.63",kad_ratio:"0.75",standing:1.0,game_date:"2017-01-07T06:33:44Z"},{kills:13.0,deaths:2.0,kd_ratio:"6.50",kad_ratio:"8.00",standing:0.0,game_date:"2017-01-07T06:17:35Z"},{kills:2.0,deaths:6.0,kd_ratio:"0.33",kad_ratio:"0.67",standing:0.0,game_date:"2017-01-07T05:56:04Z"},{kills:6.0,deaths:3.0,kd_ratio:"2.00",kad_ratio:"2.67",standing:0.0,game_date:"2016-12-31T22:30:27Z"},{kills:5.0,deaths:7.0,kd_ratio:"0.71",kad_ratio:"1.00",standing:0.0,game_date:"2016-12-31T22:18:54Z"},{kills:10.0,deaths:5.0,kd_ratio:"2.00",kad_ratio:"2.40",standing:0.0,game_date:"2016-12-31T21:53:43Z"},{kills:9.0,deaths:1.0,kd_ratio:"9.00",kad_ratio:"10.50",standing:0.0,game_date:"2016-12-31T21:43:16Z"},{kills:9.0,deaths:3.0,kd_ratio:"3.00",kad_ratio:"3.50",standing:0.0,game_date:"2016-12-31T21:32:25Z"}]
            },
            {
                character_type: 'Hunter',
                subclass: 'Arcstrider',
                light_level: '301',
                emblem: "https://www.bungie.net/common/destiny2_content/icons/1f5e4a3cfeaca5fd6465ffd15b81ffa6.jpg",
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/d3c2e878297ea7e1152e2895ae20cf2c.jpg",
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
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/798f5839febe4ad28b42e2c88c94db9d.jpg",
                recent_games:[{kills:3.0,deaths:4.0,kd_ratio:"0.75",kad_ratio:"0.88",standing:0.0,game_date:"2017-01-07T06:57:05Z"},{kills:9.0,deaths:6.0,kd_ratio:"1.50",kad_ratio:"1.58",standing:0.0,game_date:"2017-01-07T06:46:14Z"},{kills:5.0,deaths:8.0,kd_ratio:"0.63",kad_ratio:"0.75",standing:1.0,game_date:"2017-01-07T06:33:44Z"},{kills:13.0,deaths:2.0,kd_ratio:"6.50",kad_ratio:"8.00",standing:0.0,game_date:"2017-01-07T06:17:35Z"},{kills:2.0,deaths:6.0,kd_ratio:"0.33",kad_ratio:"0.67",standing:0.0,game_date:"2017-01-07T05:56:04Z"},{kills:6.0,deaths:3.0,kd_ratio:"2.00",kad_ratio:"2.67",standing:0.0,game_date:"2016-12-31T22:30:27Z"},{kills:5.0,deaths:7.0,kd_ratio:"0.71",kad_ratio:"1.00",standing:0.0,game_date:"2016-12-31T22:18:54Z"},{kills:10.0,deaths:5.0,kd_ratio:"2.00",kad_ratio:"2.40",standing:0.0,game_date:"2016-12-31T21:53:43Z"},{kills:9.0,deaths:1.0,kd_ratio:"9.00",kad_ratio:"10.50",standing:0.0,game_date:"2016-12-31T21:43:16Z"},{kills:9.0,deaths:3.0,kd_ratio:"3.00",kad_ratio:"3.50",standing:0.0,game_date:"2016-12-31T21:32:25Z"}]
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
                emblem_background: "https://www.bungie.net/common/destiny2_content/icons/a0dd3e3444de2012b554ea4c8b655da9.jpg",
                recent_games:[{kills:3.0,deaths:4.0,kd_ratio:"0.75",kad_ratio:"0.88",standing:0.0,game_date:"2017-01-07T06:57:05Z"},{kills:9.0,deaths:6.0,kd_ratio:"1.50",kad_ratio:"1.58",standing:0.0,game_date:"2017-01-07T06:46:14Z"},{kills:5.0,deaths:8.0,kd_ratio:"0.63",kad_ratio:"0.75",standing:1.0,game_date:"2017-01-07T06:33:44Z"},{kills:13.0,deaths:2.0,kd_ratio:"6.50",kad_ratio:"8.00",standing:0.0,game_date:"2017-01-07T06:17:35Z"},{kills:2.0,deaths:6.0,kd_ratio:"0.33",kad_ratio:"0.67",standing:0.0,game_date:"2017-01-07T05:56:04Z"},{kills:6.0,deaths:3.0,kd_ratio:"2.00",kad_ratio:"2.67",standing:0.0,game_date:"2016-12-31T22:30:27Z"},{kills:5.0,deaths:7.0,kd_ratio:"0.71",kad_ratio:"1.00",standing:0.0,game_date:"2016-12-31T22:18:54Z"},{kills:10.0,deaths:5.0,kd_ratio:"2.00",kad_ratio:"2.40",standing:0.0,game_date:"2016-12-31T21:53:43Z"},{kills:9.0,deaths:1.0,kd_ratio:"9.00",kad_ratio:"10.50",standing:0.0,game_date:"2016-12-31T21:43:16Z"},{kills:9.0,deaths:3.0,kd_ratio:"3.00",kad_ratio:"3.50",standing:0.0,game_date:"2016-12-31T21:32:25Z"}]
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


const KillChart = (props) => {
    let temp_data = [];
    let temp_wins = [];
    let temp_dates = [];

    props.data.reverse().map( function(object, i) {
        temp_data.push(object.kd_ratio);
        temp_wins.push(object.standing);
        temp_dates.push(object.game_date);

    });

    var pointBackgroundColors = [];
    for (var i = 0; i < temp_wins.length; i++) {
        if (temp_wins[i] == 0) {
            pointBackgroundColors.push("#2ecc71");
        } else {
            pointBackgroundColors.push("#e74c3c");
        }
    }

    const barData = {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            label: 'Deaths',
            backgroundColor: '#e74c3c',
            borderColor: '#e74c3c',
            borderWidth: 1,
            hoverBackgroundColor: '#e74c3c',
            hoverBorderColor: '#e74c3c',
            data: [-3, -1, -5, -5, -4, -1, -0]
          },
          {
            label: 'Kills',
            backgroundColor: '#2ecc71',
            borderColor: '#2ecc71',
            borderWidth: 1,
            hoverBackgroundColor: '#2ecc71',
            hoverBorderColor: '#2ecc71',
            data: [4, 6, 3, 5, 0, 2, 4]
          }
        ]
      };
    
    const data = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
                type: 'line',
                fill: false,
                label: 'KD',
                data: temp_data,
                pointBackgroundColor: pointBackgroundColors,
                borderColor: "#A5A5AF",
                pointBorderColor: "white",
                pointRadius: 4,
                borderWidth: 1,
                showLine: true
            },
            {
                type: 'line',
                fill: false,
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: "#EEEEEE",
                label: "",
                borderColor: "black",
                pointRadius: 0,
                borderWidth: 1,
                pointHoverRadius: 0
            }
        ]
    };

    const options = {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    console.log(temp_dates[tooltipItem.index]);
                    // return "K/D: " + tooltipItem.yLabel + " (" + $.timeago(temp_dates[tooltipItem.index]) + ")";
                    return "K/D: " + tooltipItem.yLabel + " (1 day ago)";
                }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'Last 15 Games'
                },
                gridLines: {
                    display: false
                },
                display: false
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {                          
                    max: 10,
                    beginAtZero: false                            
                },
                display: false
            }]
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Recent Games',
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    };

    const barOptions = {
        responsive: true,
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    console.log(temp_dates[tooltipItem.index]);
                    // return "K/D: " + tooltipItem.yLabel + " (" + $.timeago(temp_dates[tooltipItem.index]) + ")";
                    return "K/D: " + tooltipItem.yLabel + " (1 day ago)";
                }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: false,
                    labelString: 'Last 15 Games'
                },
                stacked: true,
                gridLines: {
                    display: false
                },
                display: false
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                stacked: true,
                ticks: {                          
                    max: 10,
                    beginAtZero: false                            
                },
                display: false
            }]
        },
        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Recent Games',
            position: 'bottom'
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    };
        
    
    return (
        // <Line key={props.data.key} data={data} options={options}/>
        <Bar key={props.data.key} data={barData} options={barOptions}/>
    )
}

const FireteamPlayerCard = (props) => {
    return (
        <div>           
            <Card style={{boxShadow: 'none'}}>                
                <Card.Content style={{padding: '0' }}>
                    <Card.Header style={{display: 'none' }}>                    
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
                <Card.Description style={{padding: '10px'}}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '3%',
                        fontSize: '1.25em',
                        fontWeight: '700',
                    }}>{props.data.player_name}</div>
                    <div style={{
                        textAlign: 'center',
                        fontSize: '1em',
                        fontWeight: '400',
                    }}>Sentinel</div>
                    <div style={{padding: '15px'}}>
                        <KillChart key={`${props.data.player_name}${props.data.characters[0].character_type}`} data={props.data.characters[0].recent_games}/>
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
                                <Header as='h5' style={{color: '#7198B7' }}>
                                    2315
                                    <Header.Subheader>
                                    ELO
                                    </Header.Subheader>
                                </Header> 
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h5' style={{color: '#212121' }}>
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
import React, { Component } from 'react';
import { Container, Menu, Card, Tab, Image, Grid, Transition, Message, Button, Icon, Divider } from 'semantic-ui-react';
import Layout from '../Layout.js';
import createReactClass from 'create-react-class';
import PlayerStatCard from './PlayerStatCard.js';
import playerData from '../../data/TempPlayerData.js';
import Carousel from 'nuka-carousel';
import PlayerOverview from './PlayerOverview.js';
import CardBackground from '../../img/abstract-background.png';
import { PLATFORMS } from '../../data/common_constants';
import { Link } from "react-router-dom";
import { SyncLoader, ScaleLoader, PulseLoader, RingLoader, ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { resetErrors, validateUserDirectPath, fetchFireteamMembers } from '../../actions/fireteams_index';


class BetaMessage extends Component {
    state = { visible: true }

    handleDismiss = () => {
        this.setState({ visible: false })
    }

    render() {
        const content = (
            <div>
                This is just a demo of what we're working on. Soon you'll be able to look up any player and find their current fireteam, similar to below.
           <br />
                You searched for: {this.props.gamertag} on {PLATFORMS[this.props.platform]}.
         </div>
        )
        if (this.state.visible) {
            return (
                <Message
                    icon='smile'
                    info
                    header='Heads up!'
                    onDismiss={this.handleDismiss}
                    content={content}
                />

            )
        }
        return (
            <div />
        )
    }
}

const OverviewSlides = (props) => {
    var Decorators = [{
        component: createReactClass({
            render() {
                return (<div />
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
    // console.log(this.props)
    let columns;
    if (props.data[0] !== undefined) {
        columns = props.data[0].map(function (object, i) {
            // console.log(object);
            return (
                <PlayerStatCard key={i + 5} data={object} />
            )
        });
    }

    return (
        <div style={{ marginLeft: '2%', marginRight: '2%' }}>
            <Grid centered stretched verticalAlign='middle' columns={4} style={{ height: '80vh' }}>
                <Grid.Row>
                    {columns}
                </Grid.Row>
            </Grid>
        </div>
    )
}


class FireteamPage extends Component {

    state = { activeItem: 'home' }

    componentWillMount() {
        this.props.validateUserDirectPath(this.props.match.params)
        setTimeout(() => {
            if (!this.props.error) {
                this.props.fetchFireteamMembers(this.props.match.params)
            } else {
                console.log("There's something wrong here.... I'm done working for now..")
            }
        }, 1);
    }

    handleDismiss = () => {
        this.props.resetErrors();
    }

    changePlayer = (e, { name }) => this.setState({ activeItem: name })

    render() {
        // const { activeItem } = this.state
        function getPlayerCharacters(props) {
            var chars = [];
            // eslint-disable-next-line
            props.characters.map(function (object, i) {
                chars.push({ menuItem: `${object.character_type}`, render: () => <Tab.Pane><PlayerOverview player_name={props.player_name} data={object} /></Tab.Pane> })
            });
            return chars;
        };

                
        const teamPanes = [
            { menuItem: 'Fireteam', render: () => <Tab.Pane><FireteamOverview data={this.props.fireteam} /></Tab.Pane> },
            {
                menuItem: 'Stats', render: () =>
                    <Tab.Pane>
                        <pre>
                            <code>
                                average kd: {this.props.fireteam[1].average_kd}
                                deaths: {this.props.fireteam[1].deaths}
                                games_played: {this.props.fireteam[1].games_played}
                                kills: {this.props.fireteam[1].kills}
                                longest_stream: {this.props.fireteam[1].longest_streak}
                                losses: {this.props.fireteam[1].losses}
                                win rate: {this.props.fireteam[1].win_rate} %
                                wins: {this.props.fireteam[1].wins} 
                            </code>
                        </pre>
                    </Tab.Pane>
            }
        ]

        // const sideTabs = [{ menuItem:  <Menu.Item style={{ textAlign: 'center', padding: '0', height: '16%', backgroundImage: `url(${TrialsLogo})`, backgroundSize: 'cover', backgroundPosition: 'center'}} key='overview'></Menu.Item>, render: () => <Tab.Pane><Tab className='overview-tabs' panes={teamPanes} /></Tab.Pane> }];
        const sideTabs = [{
            menuItem:
                <Menu.Item
                    style={{
                        textAlign: 'center',
                        padding: '0',
                        height: '16%',
                        backgroundImage: 'url("https://www.bungie.net/img/theme/destiny/icons/game_modes/allmodes.png")',
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}
                    key='overview'>
                </Menu.Item>,
            render: () => <Tab.Pane><Tab className='overview-tabs' panes={teamPanes} /></Tab.Pane>
        }];

        const slides = [];
        // eslint-disable-next-line
        // console.log(this.props.fireteam[0])

        console.log(this.props.fireteam)
        let players = this.props.fireteam
        if (players[0] !== undefined) {
            players[0].map(function (object, i) {
                // sideTabs.push({ menuItem: <Menu.Item style={{ textAlign: 'center' }} key={`player${i + 1}`}><Image className='trials-player-icon' src={object.characters[0].emblem} /></Menu.Item>, render: () => <Tab.Pane><Tab className='player-tabs' panes={getPlayerCharacters(object)} /></Tab.Pane> })
                slides.push(
                    <div>
                        {<PlayerStatCard key={`slides${i}`} data={object} />}
                    </div>
                );
            });
        }



        // console.log(this.props.error)
        return (
            <Layout>
                <div className="profile-page" style={{ minHeight: '100vh' }}>
                    <Container>
                        {/* <BetaMessage gamertag={this.props.match.params.gamertag} platform={this.props.match.params.platform} /> */}
                        {this.props.error ?
                            <Message
                                negative
                                attached
                                onDismiss={this.handleDismiss}
                                header={`Sorry! ${this.props.error}`}
                            />
                            : null
                        }
                        <Button as={Link} to='/fireteams' basic inverted icon className='fireteam-back-btn'>
                            <Icon name='search' size='huge' />
                        </Button>
                        {/* <Divider fitted /> */}
                        {/* <div className='hide-on-mobile' style={{ height: '50px' }} /> */}
                        <div>
                            <Card className='hide-on-mobile' fluid style={{ marginTop: '20px', background: 'transparent', boxShadow: 'none' }}>
                                <Card.Content style={{ padding: '0', backgroundImage: `url(${CardBackground}`, backgroundSize: 'cover' }}>
                                    {!this.props.error ?
                                        <Tab
                                            grid={{ className: 'profile-panels', paneWidth: 14, tabWidth: 2 }}
                                            menu={{ attached: 'left', borderless: true, vertical: true, tabular: 'left' }}
                                            panes={sideTabs}
                                        />
                                        : null
                                    }
                                </Card.Content>
                            </Card>
                            <div style={{ paddingLeft: '4%', paddingTop: '2%', minHeight: '550px' }} className='hide-on-med-and-up' >
                                {this.props.error ?
                                    null
                                    : <OverviewSlides slides={slides} />
                                }

                            </div>
                        </div>
                    </Container>
                </div>
            </Layout>
        );
    }
}


function mapStateToProps(state) {
    return {
        error: state.fireteam.error,
        fireteam: state.fireteam.fireteam
    }
}

export default connect(mapStateToProps, { validateUserDirectPath, resetErrors, fetchFireteamMembers })(FireteamPage)

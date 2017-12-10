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
import {  resetErrors, validateUserDirectPath, fetchFireteamMembers } from '../../actions/fireteams_index';


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
    // console.log(props)
    const columns = props.data.map(function (object, i) {
        console.log(object);
        return (
            <PlayerStatCard key={i} data={object} /> 
        )
    });

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


class ProfilePage extends Component {

    state = { activeItem: 'home' }

    componentWillMount() {
        this.props.validateUserDirectPath(this.props.match.params)
        setTimeout(() => {  
            // console.log(this.props) 
            if (!this.props.error) {
                this.props.fetchFireteamMembers(this.props.match.params)
            }else {
                console.log("There's something wrong here.... I'm done working for now..")
            }
        },1);
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
            { menuItem: 'Fireteam', render: () => <Tab.Pane><FireteamOverview data={this.props.fireteam} /></Tab.Pane> }
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
        // playerData.map(function (object, i) {
        //     sideTabs.push({ menuItem: <Menu.Item style={{ textAlign: 'center' }} key={`player${i + 1}`}><Image className='trials-player-icon' src={object.characters[0].emblem} /></Menu.Item>, render: () => <Tab.Pane><Tab className='player-tabs' panes={getPlayerCharacters(object)} /></Tab.Pane> })
        //     slides.push(
        //         <Transition key={i} animation='fly down' duration={3000} transitionOnMount={true}>
        //             <div>
        //                 {<PlayerStatCard key={i} player_name={object.player_name} data={object.characters[0]} />}
        //             </div>
        //         </Transition>
        //     );
        // });

        return (
            <Layout>
                <div className="profile-page" style={{ height: '100vh' }}>
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
                            <Icon name='arrow left' size='huge' />
                        </Button>
                        <Divider fitted />
                        {/* <div className='hide-on-mobile' style={{ height: '50px' }} /> */}
                        <div>
                            <Card className='hide-on-mobile' fluid style={{ minHeight: '85vh', background: 'transparent', boxShadow: 'none' }}>
                                <Card.Content style={{ padding: '0', backgroundImage: `url(${CardBackground}`, backgroundSize: 'cover' }}>
                                    <Tab
                                        grid={{ className: 'profile-panels', paneWidth: 14, tabWidth: 2 }}
                                        menu={{ attached: 'left', borderless: true, vertical: true, tabular: 'left' }}
                                        panes={sideTabs}
                                    />
                                </Card.Content>
                            </Card>
                            <div style={{ paddingLeft: '9%' }} className='hide-on-med-and-up' >
                                <OverviewSlides slides={slides} />
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
        fetchingFireteam: state.fireteam.fetchingFireteam,
        fireteam: state.fireteam.fireteam
    }
}

export default connect(mapStateToProps, { validateUserDirectPath, resetErrors, fetchFireteamMembers })(ProfilePage)

import React, { Component } from 'react';
import { Container, Card, Image, Grid, Message, Button, Icon, Statistic, Menu } from 'semantic-ui-react';
import Layout from '../Layout.js';
import createReactClass from 'create-react-class';
import PlayerStatCard from './PlayerStatCard.js';
import SinglePlayerStatCard from './SinglePlayerStatCard.js';
import Carousel from 'nuka-carousel';
import StatsCard from './PlayerOverview.js';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { resetErrors, validateUserDirectPath, fetchFireteamMembers, addPlayerStats } from '../../actions/fireteams_index';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class HomeNav extends Component {
    render() {
        return (
            <Menu text className="fireteams-nav">
                <Menu.Menu position="right">
                    <Menu.Item >
                        <div>
                            <Button as={Link} to='/fireteams' basic inverted icon >
                                <Icon name='search' /> New Search
                            </Button>
                        </div>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
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
    let columns;
    if (props.data[0] !== undefined) {
        columns = props.data[0].map(function (object, i) {
            return (
                <PlayerStatCard key={i + 5} data={object} action={props.action} account_info={object.account_info}/>
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

const FireteamStatsView = (props) => {

    return (
        <div style={{ padding: '15px', color: '#f5f5f5', textAlign: 'center' }} >

            <Statistic.Group size='large' widths='four'>
                <Statistic color='red' inverted>
                    <Statistic.Value>{props.data[1].average_kd}</Statistic.Value>
                    <Statistic.Label>Avg. KD</Statistic.Label>
                </Statistic>
                <Statistic color='yellow' inverted>
                    <Statistic.Value>{props.data[1].games_played}</Statistic.Value>
                    <Statistic.Label>Games Played</Statistic.Label>
                </Statistic>
                <Statistic color='teal' inverted>
                    <Statistic.Value>{props.data[1].win_rate}%</Statistic.Value>
                    <Statistic.Label>Win Rate</Statistic.Label>
                </Statistic>
                <Statistic color='green' inverted>
                    <Statistic.Value>{props.data[1].longest_streak}</Statistic.Value>
                    <Statistic.Label>Longest Streak</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </div>

    )
}

class FireteamPage extends Component {

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

    addPlayerStats = (id, data) => {
        this.props.addPlayerStats(id, data);
    }

    render() {

        const slides = [];
        let players = this.props.fireteam
        let playerPanes = [];
        let characters = this.props.characters
        let tabs;

        if (players[0] !== undefined) {

            playerPanes = players[0].map(function (object, i) {
                slides.push(
                    <div>
                        {<PlayerStatCard key={`slides${i}`} data={object}/>}
                    </div>
                );

                if (characters[object.player_name]) {
                    tabs = characters[object.player_name].map(function (char, i) {
                        return (
                            <TabPane tab={char.character_data.character_type} key={`${char.character_data.character_id}`}>
                                <div style={{ marginLeft: '2%', marginRight: '2%' }}>
                                    <Grid centered stretched verticalAlign='middle' columns={2} style={{ height: '80vh' }}>
                                        <Grid.Column width={5}>
                                            <SinglePlayerStatCard stats={char} player_name={object.player_name} has_account={object.has_account} account_info={object.account_info}/>
                                        </Grid.Column>
                                        <Grid.Column width={11} style={{ minHeight: '77vh', width: '100%' }}>
                                            <StatsCard data={char} account_info={object.account_info} />
                                        </Grid.Column>
                                    </Grid>
                                </div>
                            </TabPane>
                        )
                    })
                }

                return (
                    <TabPane
                        tab={object.player_name}
                        key={`tabs${object.player_name}`}
                    >
                        <Tabs
                            defaultActiveKey={object.character_id}
                            tabPosition='top'
                            size='large'
                            type='card'
                            style={{ backgroundColor: '#212121', minHeight: '85vh' }}
                        >
                            {tabs}
                        </Tabs>

                    </TabPane >


                )
            });
        }

        return (
            <Layout>
                <div className="profile-page" style={{ minHeight: '100vh' }}>
                    <Container style={{ width: '90%' }}>
                        <HomeNav />
                        {this.props.error ?
                            <Message
                                negative
                                attached
                                onDismiss={this.handleDismiss}
                                header={`Sorry! ${this.props.error}`}
                            />
                            : null
                        }


                        <Card className='hide-on-mobile' fluid style={{ marginTop: '20px', backgroundColor: '#212121', boxShadow: 'none' }}>
                            <Card.Content style={{ padding: '0' }}>
                                {!this.props.error ?

                                    <Tabs
                                        defaultActiveKey="1"
                                        tabPosition='left'
                                        style={{ minHeight: '85vh' }}
                                    >
                                        <TabPane
                                            tab={<Image src="https://www.bungie.net/img/theme/destiny/icons/game_modes/allmodes.png"
                                                style={{ width: '85px' }}
                                                centered />
                                            }
                                            key="1"
                                        >
                                            <Tabs
                                                defaultActiveKey="1"
                                                tabPosition='top'
                                                size='large'
                                                type='card'
                                                style={{ backgroundColor: '#212121', minHeight: '85vh' }}
                                            >
                                                <TabPane tab='Fireteam' key="11"><FireteamOverview data={this.props.fireteam} action={this.props.addPlayerStats} /></TabPane>
                                                <TabPane tab="Team Stats" key="21"><FireteamStatsView data={this.props.fireteam} /></TabPane>
                                            </Tabs>
                                        </TabPane>
                                            {playerPanes}

                                    </Tabs>
                                    
                                    :
                                    null
                                }
                            </Card.Content>
                        </Card>
                        <div style={{ paddingLeft: '4%', paddingTop: '2%', minHeight: '550px' }} className='hide-on-med-and-up' >
                            {this.props.error ?
                                null
                                : <OverviewSlides slides={slides} />
                            }

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
        fireteam: state.fireteam.fireteam,
        characters: state.fireteam.characters
    }
}

export default connect(mapStateToProps, { validateUserDirectPath, resetErrors, fetchFireteamMembers, addPlayerStats })(FireteamPage)

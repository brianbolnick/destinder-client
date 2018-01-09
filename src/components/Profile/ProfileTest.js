import React, { Component } from "react";
import { Container, Icon, Image, Grid, Header, Segment,  Card } from "semantic-ui-react";
import Layout from "../Layout.js";
import '../../css/Profile.css';
import NoTextLogo from "../../img/logo-no-text-white.png";
import { jwt } from '../../tools/jwt';
import Parallax from "react-springy-parallax";
import HeaderNav from "../Header.js";
import { Tabs } from 'antd';
import { API_URL } from '../../tools/api-config';

const TabPane = Tabs.TabPane;

class Stats extends Component {
    render() {
        return (
            <Container style={{ padding: "2%", minHeight: '90vh', width: '90%' }} className='hide-on-mobile'>
                <Header as='h1'>
                    <Image verticalAlign='middle' src={NoTextLogo} />
                    <Header.Content style={{ color: '#f5f5f5' }}>
                        {jwt.display_name}
                        <Header.Subheader style={{ color: '#d8d8d8' }}>
                            Dashboard
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Segment
                                inverted
                                textAlign='center'
                                size='massive'
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem'
                                }}
                            >
                                Account-wide stats and progress tracking will be here soon!
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <Card style={{ width: '100%', height: '400px' }}>
                                <Image src="https://www.bungie.net/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg" />
                                <Card.Content style={{ textAlign: 'center' }}>
                                    <Tabs defaultActiveKey="1" className='profile-character-tabs'>
                                        <TabPane tab="Trials" key="1">Trials data coming soon!</TabPane>
                                        <TabPane tab="Raid" key="2">Raid data coming soon!</TabPane>
                                        <TabPane tab="PVP" key="3">PVP Data coming soon!</TabPane>
                                    </Tabs>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card style={{ width: '100%', height: '400px'  }}>
                                <Image src="https://www.bungie.net/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg" />
                                <Card.Content style={{ textAlign: 'center' }}>
                                    <Tabs defaultActiveKey="1" className='profile-character-tabs'>
                                        <TabPane tab="Trials" key="1">Trials data coming soon!</TabPane>
                                        <TabPane tab="Raid" key="2">Raid data coming soon!</TabPane>
                                        <TabPane tab="PVP" key="3">PVP Data coming soon!</TabPane>
                                    </Tabs>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column >
                            <Card style={{ width: '100%', height: '400px'  }}>
                                <Image src="https://www.bungie.net/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg" />
                                <Card.Content style={{ textAlign: 'center' }}>
                                    <Tabs defaultActiveKey="1" className='profile-character-tabs'>
                                        <TabPane tab="Trials" key="1">Trials data coming soon!</TabPane>
                                        <TabPane tab="Raid" key="2">Raid data coming soon!</TabPane>
                                        <TabPane tab="PVP" key="3">PVP Data coming soon!</TabPane>
                                    </Tabs>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div style={{ textAlign: "right" }}>
                                <Icon
                                    name="angle down"
                                    size="huge"
                                    className="scroll-icon fa-pulse"
                                    onClick={this.props.scrollClick}
                                />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}


export default Stats
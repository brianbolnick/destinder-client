import React, { Component } from "react";
import { Container, Icon, Image, Grid, Header, Segment, Message } from "semantic-ui-react";
import Layout from "../Layout.js";
import NoTextLogo from "../../img/logo-no-text-white.png";
import { jwt } from '../../tools/jwt';
import Parallax from "react-springy-parallax";
import HeaderNav from "../Header.js";

class Stats extends Component {
    render() {
        return (
            <HeaderNav>
                <Container style={{ padding: "2%", minHeight: '90vh' }}>
                    <div>
                        <Header as='h1'>
                            <Image verticalAlign='middle' src={NoTextLogo} />
                            <Header.Content style={{ color: '#f5f5f5' }}>
                                {jwt.display_name}
                                <Header.Subheader style={{ color: '#d8d8d8' }}>
                                    Dashboard
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </div>
                    <br />
                    <br />

                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <div style={{ textAlign: "center", height: '60vh' }} className='hide-on-mobile'>
                                    <Segment inverted padded='very' textAlign='center' size='massive' style={{ lineHeight: '2.5rem' }} >
                                        We're working on adding some cool things here! Soon you'll find things like stat dashboards for multiple game types, weekly progress trackers, and more!
                                        Be sure to follow us on Twitter, Reddit, or join our Discord server for updates!
                                    </Segment>
                                </div>
                                <div style={{ textAlign: "center", height: '60vh' }} className='hide-on-med-and-up'>
                                    <Segment inverted padded='very' textAlign='center' size='massive' style={{ lineHeight: '2.5rem', fontSize: '1rem' }}>
                                        We're working on adding some cool things here! Soon you'll find things like stat dashboards for multiple game types, weekly progress trackers, and more!
                                        Be sure to follow us on Twitter, Reddit, or join our Discord server for updates!
                                    </Segment>
                                </div>                                
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
            </HeaderNav>
        );
    }
}

class Items extends Component {
    render() {
        return (
            <Container style={{ padding: "2%", minHeight: '90vh' }}>
                <div>
                    <Header as='h1'>
                        <Image verticalAlign='middle' src={NoTextLogo} />
                        <Header.Content style={{ color: '#f5f5f5' }}>
                            Item Manager
                        </Header.Content>
                    </Header>
                </div>
                <br />
                <br />

                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div style={{ textAlign: "center", height: '60vh' }} >
                                <Segment inverted padded='very' textAlign='center' size='massive' style={{ lineHeight: '2.5rem' }}>
                                    Coming soon! Track and transfer your vault and inventory items!
                                </Segment>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div style={{ textAlign: "right" }}>
                                <Icon
                                    name="angle up"
                                    size="huge"
                                    className="scroll-icon fa-pulse"
                                    onClick={this.props.scrollClick}
                                />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}


class Profile extends Component {

    render() {

        const secondStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        };


        return (
            <Parallax ref="parallax" pages={2} >
                <Parallax.Layer offset={0} speed={0} factor={2} style={{ backgroundImage: 'linear-gradient(rgb(252, 92, 125), rgb(106, 130, 251))', backgroundSize: 'cover', backgroundPositionY: 'center' }} />
                <Parallax.Layer offset={0} speed={0.5}>
                    <Stats scrollClick={() => this.refs.parallax.scrollTo(1)} />
                </Parallax.Layer>

                <Parallax.Layer offset={1} speed={2} style={secondStyle}>
                    <Items scrollClick={() => this.refs.parallax.scrollTo(0)} />
                </Parallax.Layer>
            </Parallax>
        )
    }
}

class NoAuth extends Component {
    render() {
        return (
            <div>
                <Message icon info>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                        <Message.Header>Sorry!</Message.Header>
                        You need to be logged in to access this page.
                    </Message.Content>
                </Message>
                <Image size='big' centered fluid src='http://i.imgur.com/7rlgPZQ.gif' />
            </div>
        )
    }
}

class ProfilePage extends Component {


    isLoggedIn() {
        if (jwt != null) {
            if ((jwt.exp * 1000) >= Date.now()) {
                return true;
            } else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('auth_token');
            }
        }
        return false;
    }
    render() {

        return (
            this.isLoggedIn() ?
                <div className="profile-page" style={{ height: '100%' }}>
                    <Profile />
                </div>
                :
                <Layout>
                    <div className="profile-page" style={{ height: '100%' }}>
                        <Container style={{ textAlign: 'center' }}>
                            <NoAuth />
                        </Container>
                    </div>
                </Layout>
        );
    }
}

export default ProfilePage;

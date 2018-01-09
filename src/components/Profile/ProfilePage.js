import React, { Component } from "react";
import { Container, Icon, Image, Grid, Header, Segment, Message, Button, Divider } from "semantic-ui-react";
import Layout from "../Layout.js";
import ProfileStats from './ProfileStats';
import ProfileStatsMobile from './ProfileStatsMobile';
import NoTextLogo from "../../img/logo-no-text-white.png";
import { jwt } from '../../tools/jwt';
import Parallax from "react-springy-parallax";
import HeaderNav from "../Header.js";
import { API_URL } from '../../tools/api-config';

class Stats extends Component {
    render() {
        return (
            <HeaderNav>                
                <ProfileStats scrollClick={this.props.scrollClick} />
                <ProfileStatsMobile scrollClick={this.props.scrollClick} />
            </HeaderNav>
        );
    }
}

class Items extends Component {
    render() {
        return (
            <Container style={{ padding: "2%", minHeight: '90vh', width: '90%' }}>
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
                        <Message.Header>Sorry! You need to be logged in to access this page.</Message.Header>
                        We can't pull any of your info if we don't know who you are... It'll be worth it :)
                    </Message.Content>
                </Message>
                <Button color='green' basic fluid as='a' href={`${API_URL}/login`}>
                    Sign up or Login with Bungie
                </Button>
                <Divider />
                <Image size='big' centered fluid src='https://media.giphy.com/media/l378k9LrbIFNby9gY/source.gif' />
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

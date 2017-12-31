import React, { Component } from "react";
import { Container, Image, Message, Icon } from "semantic-ui-react";
import Layout from "./Layout.js";

class ProfilePage extends Component {
    render() {
        return (
            <Layout>
                <div className="profile-page" style={{ height: '100%' }}>
                    <Container style={{ textAlign: 'center' }}>
                        <Message icon info>
                            <Icon name='circle notched' loading />
                            <Message.Content>
                                <Message.Header>Nothing here yet!</Message.Header>
                                Don't worry. We're working on it. Soon you'll be able to see a full breakdown of your character stats across multiple game types including Raids, Trials, and more!
                            </Message.Content>
                        </Message>
                        <Image size='big' centered fluid src='http://i.imgur.com/7rlgPZQ.gif' />
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ProfilePage;

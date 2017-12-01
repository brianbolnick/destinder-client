import React, { Component } from "react";
import { Container, Image, Message, Icon } from "semantic-ui-react";
import Layout from "./Layout.js";

class PlayersPage extends Component {
    render() {
        return (
            <Layout>
                <div className="profile-page" style={{ height: '100vh' }}>
                    <Container style={{ textAlign: 'center' }}>
                        <Message icon info>
                            <Icon name='circle notched' loading />
                            <Message.Content>
                                <Message.Header>Nothing here yet!</Message.Header>
                                Don't worry. We're working on it. Soon you'll be able to view other players specific stats for various game modes. Stay Tuned!!
                            </Message.Content>
                        </Message>
                        <Image size='big' centered fluid src='http://i.imgur.com/7rlgPZQ.gif' />
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default PlayersPage;

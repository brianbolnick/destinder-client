import React, { Component } from "react";
import { Container, Image, Message, Icon } from "semantic-ui-react";
import Layout from "./Layout.js";

class ClansPage extends Component {
    render() {
        return (
            <Layout>
                <div className="clans-page" style={{ height: '100%' }}>
                    <Container style={{ textAlign: 'center' }}>
                        <Message icon info>
                            <Icon name='circle notched' loading />
                            <Message.Content>
                                <Message.Header>Nothing here yet!</Message.Header>
                                Don't worry. We're working on it. Soon you'll be able to view clan stats, recruit for your clan, and more!
                            </Message.Content>
                        </Message>
                        <Image size='big' centered fluid src='https://i.imgur.com/7rlgPZQ.gif' />
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ClansPage;

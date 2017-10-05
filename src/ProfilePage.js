import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import Layout from './Layout.js';
import {
    Route,
    Link
} from 'react-router-dom'


class ProfilePage extends Component {
    render() {
        return (
        <Layout>
            <div className="profile-page">
                <Container>
                    <Header as='h2'>Profile Page</Header>
                    <p>This is your profile page.</p>
                </Container>
            </div>
        </Layout>
        );
    }
}
  
export default ProfilePage;
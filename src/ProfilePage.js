import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import {
    Route,
    Link
} from 'react-router-dom'


class ProfilePage extends Component {
    render() {
        return (
        <div className="profile-page">
            <Container>
                <Header as='h2'>Profile Page</Header>
                <p>This is your profile page.</p>
            </Container>
        </div>
        );
    }
}
  
export default ProfilePage;
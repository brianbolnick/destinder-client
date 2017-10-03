import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import {
    Route,
    Link
} from 'react-router-dom'


class NotFound extends Component {
    render() {
        return (
        <div className="profile-page">
            <Container>
                <Header as='h2'>Sorry!</Header>
                <p>The page you're looking for doesn't exist.</p>
            </Container>
        </div>
        );
    }
}
  
export default NotFound;
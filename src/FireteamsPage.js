import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import {
    Route,
    Link
} from 'react-router-dom'



class FireteamsPage extends Component {
    render() {
        return (
        <div className="fireteams-page">
            <Container>
                <Header as='h2'>LFG</Header>
                <p>Lots of posts!</p>
            </Container>
        </div>
        );
    }
}
  
export default FireteamsPage;







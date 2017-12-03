import React, { Component } from 'react';
import { Container, Menu, Card, Tab, Image, Grid, Transition, Message } from 'semantic-ui-react';
import Layout from '../Layout.js';
import FireteamsForm from './FireteamsForm';

class FireteamsFormPage extends Component {
    handleFormSubmit = values => {
        console.log(values);
        //merge user id with form props
        // values = { ...values, user_id: JSON.parse(localStorage.getItem('jwt')).user_id }
        // this.props.createLfgPost(values);
    }
    render() {

        return (
            <Layout>
                <div className="fireteam-form" style={{ minHeight: '100vh' }}>
                    <Container style={{ width: '80%' }}>
                        <FireteamsForm onSubmit={this.handleFormSubmit} />
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default FireteamsFormPage
import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Layout from '../Layout.js';
import FireteamsForm from './FireteamsForm';
import TrialsBackground from '../../img/trials-bg4.jpg';
import PropTypes from 'prop-types'

class FireteamsFormPage extends Component {
    static contextTypes = {
        router: PropTypes.object
      }

    handleFormSubmit = values => {
        this.context.router.history.push(`/fireteams/${values.console}/${values.gamertag}`);
        //merge user id with form props
        // values = { ...values, user_id: JSON.parse(localStorage.getItem('jwt')).user_id }
        // this.props.createLfgPost(values);
    }
    render() {

        return (
            <Layout>
                <div className="fireteam-form" style={{ minHeight: '100vh' }}>
                    <div className='spacer'></div>
                    <Container style={{ width: '80%' }}>
                        <Segment
                            padded='very'
                            color='teal'
                            textAlign='center'
                            className="fireteam-form-container"
                        >
                            <div className='fireteam-form'>
                                <FireteamsForm onSubmit={this.handleFormSubmit} />
                                <Segment className='fireteam-form-description' basic>
                                    TRIALS OF THE NINE - FIRETEAM SEARCH
                                </Segment>
                            </div>
                        </Segment>

                    </Container>
                </div>
            </Layout >
        );
    }
}

export default FireteamsFormPage
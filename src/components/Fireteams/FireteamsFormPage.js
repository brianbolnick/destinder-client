import React, { Component } from 'react';
import { Container, Segment, Message } from 'semantic-ui-react';
import Layout from '../Layout.js';
import FireteamsForm from './FireteamsForm';
import { connect } from 'react-redux';
import { validateUser, resetErrors } from '../../actions/fireteams_index';
import '../../css/fireteams.css';



class FireteamsFormPage extends Component {

    handleFormSubmit = values => {
        this.props.validateUser(values)
    }

    handleDismiss = () => {
        this.props.resetErrors();
    }

    render() {
        return (
            <Layout>
                <div className="fireteam-form" style={{ minHeight: '100vh' }}>
                    <Container style={{ width: '80%' }}>

                        <Segment
                            padded='very'
                            color='teal'
                            textAlign='center'
                            className="fireteam-form-container"
                        >
                            {this.props.error ?
                                <Message
                                    negative
                                    attached
                                    onDismiss={this.handleDismiss}
                                    header={`Sorry! ${this.props.error}`}
                                />
                                : null
                            }
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

function mapStateToProps(state) {
    return {
        error: state.fireteam.error
    }
}

export default connect(mapStateToProps, { validateUser, resetErrors })(FireteamsFormPage)


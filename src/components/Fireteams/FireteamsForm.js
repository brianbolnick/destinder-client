import React, { Component } from "react";
import {
    Form,
    Button,
} from "semantic-ui-react";
import { Toggle, CheckboxField, LabelInputField, SelectField, TextAreaField, InputField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';
import { consoleOptions } from '../../data/DropdownOptions';

const validate = values => {
    const errors = {}
    if (!values.gamertag) {
        errors.gamertag = 'Please enter a gamerteag.'
    } 
    if (!values.console) {
        errors.console = 'Please select a console.'
    }
    return errors
}


class NewFireteamSearch extends Component {
    
    render() {

        const { handleSubmit} = this.props;

        
        return (
            <Form onSubmit={handleSubmit} inverted>
                <Form.Group>
                    <Form.Field width={6}>
                        <Field 
                            component={SelectField} 
                            name='console' 
                            label="Console" 
                            options={consoleOptions} 
                            placeholder="Xbox"
                         />
                    </Form.Field>
                </Form.Group>

                <Field
                    component={InputField}
                    name='gamertag'
                    label="Gamertag"
                />

                <Form.Field
                    control={Button}
                    color='yellow'
                    inverted
                    className='submit-btn'
                    type='submit'>
                    Create Post
                </Form.Field>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'fireteamsForm',
    validate
})(NewFireteamSearch)
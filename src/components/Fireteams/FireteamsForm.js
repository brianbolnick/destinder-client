import React, { Component } from "react";
import {
    Form,
    Button,
} from "semantic-ui-react";
import { SelectField,  InputField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';
import { consoleOptions } from '../../data/DropdownOptions';
import '../../css/fireteams.css';

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

        const { handleSubmit } = this.props;


        return (
            <Form
                onSubmit={handleSubmit}
                inverted                
            >

                <Field
                    component={InputField}
                    name='gamertag'
                    action={<Field
                        component={SelectField}
                        name='console'
                        options={consoleOptions}
                        placeholder="Console"
                    />}
                    icon='search'
                    iconPosition='left'
                    placeholder='Gamertag...'
                    style={{background: '#050B17', border: 'solid 3px #47D5CF', borderRadius: '5px'}}
                />

                <Form.Field
                    control={Button}
                    basic
                    inverted
                    className='submit-btn'
                    type='submit'>
                    Search
                </Form.Field>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'fireteamsForm',
    validate
})(NewFireteamSearch)
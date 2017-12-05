import React, { Component } from "react";
import {
    Form,
    Button,
    Divider
} from "semantic-ui-react";
import { SelectField, InputField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';
import { consoleOptions } from '../../data/DropdownOptions';
import '../../css/fireteams.css';

const validate = values => {
    const errors = {}
    if (!values.gamertag) {
        errors.gamertag = 'Please enter a gamertag.'
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
                    className='hide-on-mobile'
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
                    style={{ background: '#050B17', border: 'solid 3px #47D5CF', borderRadius: '5px' }}
                />

                <Field
                    className='hide-on-med-and-up'
                    component={InputField}
                    name='gamertag'
                    icon='search'
                    iconPosition='left'
                    placeholder='Gamertag...'
                    style={{ background: '#050B17', border: 'solid 3px #47D5CF', borderRadius: '5px' }}
                />
                <Divider 
                    className='hide-on-med-and-up' 
                    horizontal
                    style={{ color: '#f5f5f5', fontSize: ''}}
                >
                    SELECT PLATFORM
                </Divider>
                <Field
                    className='hide-on-med-and-up'
                    component={SelectField}
                    name='console'
                    options={consoleOptions}
                    placeholder="Console"                    
                    style={{ background: '#050B17', border: 'solid 3px #47D5CF', borderRadius: '5px' }}
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
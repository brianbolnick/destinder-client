import React, { Component } from "react";
import { createLfgPost } from '../actions/index';
import {
    Form,
    Dropdown,
    Button,
    Icon
} from "semantic-ui-react";
import { Toggle, CheckboxField, Checkbox, LabelInputField, SelectField, TextAreaField } from 'react-semantic-redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const gameTypeOptions = [{ key: "s", text: "Story", value: "story" }];
const teamOptions = [
    { key: "any", text: "Any", value: "any" },
    { key: "similar", text: "Similar", value: "similar" },
    { key: "sherpa", text: "Sherpa (Help Needed)", value: "sherpa" },
    { key: "sherpee", text: "Sherpee (Someone to Carry)", value: "sherpee" }
];
const characterOptions = [
    { key: "t", text: "Titan", value: "titan" },
    { key: "h", text: "Hunter", value: "hunter" },
    { key: "w", text: "Warlock", value: "warlock" }
];

class TagSearch extends Component {
    render() {
        const tagOptions = [
            {
                text: "ii WALZ ii",
                value: 2,
                image: {
                    avatar: true,
                    src:
                        "https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg"
                }
            },
            {
                text: "Putin Pudding",
                value: 3,
                image: {
                    avatar: true,
                    src:
                        "https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg"
                }
            },
            {
                text: "KURTO13",
                value: 4,
                image: {
                    avatar: true,
                    src:
                        "https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg"
                }
            }
        ];
        return (
            <Dropdown
                placeholder="Fireteam"
                fluid
                multiple
                search
                selection
                options={tagOptions}
                onChange={this.props.handleChange}
            />
        );
    }
}


class NewLfgPost extends Component {


    handleChange = (e, { value }) => {
        this.props.change('fireteam', value)
    }

    handleFormSubmit(props) {
        createLfgPost(props);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Form.Group>
                    <Form.Field width={3}>
                        <label className="form-label">Mode</label>
                        <div style={{ display: "inline-flex", marginTop: "3%" }}>
                            <span style={{ color: "#212121", marginRight: "10%" }}>
                                PVE
                            </span>{" "}
                            <Field
                                component={Toggle}
                                label='PVP'
                                width={8}
                                name='game_mode_toggle'
                            />
                        </div>
                    </Form.Field>

                    <Form.Field width={13}>
                        <Field
                            component={SelectField}
                            name='mode'
                            label="Game Mode"
                            options={gameTypeOptions}
                            placeholder="Story"
                        />
                    </Form.Field>
                </Form.Group>

                <Form.Group>
                    <Field
                        component={SelectField}
                        name='character_id'
                        label="Character"
                        options={characterOptions}
                        width={4}
                    />
                    <Field
                        component={SelectField}
                        name='looking_for'
                        label="Looking For..."
                        options={teamOptions}
                        width={4}
                    />
                    <Form.Field width={8}>
                        <label>Tag Your Fireteam</label>
                        <TagSearch handleChange={this.handleChange} />
                    </Form.Field>
                </Form.Group>
                <Field
                    component={TextAreaField}
                    name='message'
                    label="Message"
                    placeholder='Looking for one more...'
                />

                <Field name='has_mic' component={CheckboxField}
                    label='I have a mic!' />
                <Field name='fireteam' component={LabelInputField}
                    style={{ display: 'none' }}
                />
                <Form.Field control={Button} primary className='submit-btn'
                    type='submit'>
                    Login
                </Form.Field>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'lfgForm'
})(NewLfgPost)


import React, { Component } from "react";
import { createLfgPost, getMatchingUsers } from '../actions/index';
import {
    Form,
    Button
} from "semantic-ui-react";
import { Toggle, CheckboxField, LabelInputField, SelectField, TextAreaField } from 'react-semantic-redux-form';
import { Field, reduxForm } from 'redux-form';
import UserSearch from './LfgUserSearch';


//TODO: Update this to include api id of mode 
// Story: 2
// Strike: 3
// Raid: 4
// AllPvP: 5
// Patrol: 6
// AllPvE: 7
// Control: 10
// Clash: 12
// Nightfall: 16
// HeroicNightfall: 17
// AllStrikes: 18
// IronBanner: 19
// Supremacy: 31
// Survival: 37
// Countdown: 38
// TrialsOfTheNine: 39
// TrialsCountdown: 41
// TrialsSurvival: 42
// IronBannerControl: 43
// IronBannerClash: 44
// IronBannerSupremacy: 45
const gameTypeOptions = [
    { key: "2", text: "Story", value: 2 },
    { key: "3", text: "Strike", value: 3 },
    { key: "4", text: "Raid", value: 4 },
    { key: "5", text: "PVP - Any", value: 5 },
    { key: "6", text: "Patrol", value: 6 },
    { key: "7", text: "PVE - Any", value: 7 },
    { key: "10", text: "Control", value: 10 },
    { key: "12", text: "Clash", value: 12 },
    { key: "16", text: "Nightfall", value: 16 },
    { key: "17", text: "Nightfall - Heroic", value: 17 },
    { key: "18", text: "Strikes", value: 18 },
    { key: "19", text: "Iron Banner", value: 19 },
    { key: "31", text: "Supremacy", value: 31 },
    { key: "37", text: "Survival", value: 37 },
    { key: "38", text: "Countdown", value: 38 },
    { key: "39", text: "Trials of the Nine", value: 39 }
];

const teamOptions = [
    { key: "any", text: "Any", value: "any" },
    { key: "similar", text: "Similar", value: "similar" },
    { key: "sherpa", text: "Sherpa (Help Needed)", value: "sherpa" },
    { key: "sherpee", text: "Sherpee (Someone to Carry)", value: "sherpee" }
];

class NewLfgPost extends Component {
    handleChange = (e, { value }) => {       
        this.props.change('fireteam', value)
    }

    handleSearchChange = ( e, data) => {
        // console.log(data.searchQuery);
        getMatchingUsers(data.searchQuery);
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
                        options={this.props.characters}
                        width={4}
                    />
                    <Field
                        component={SelectField}
                        name='looking_for'
                        label="Looking For..."
                        options={teamOptions}
                        width={4}
                    />
                    {/* <Form.Field width={8}>
                        <label>Tag Your Fireteam (Must have a Destinder Account)</label>
                        <TagSearch 
                        handleChange={this.handleChange} 
                        handleSearchChange={this.handleSearchChange}
                        />
                    </Form.Field> */}
                    <UserSearch formProps={this.props}/>
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
                    Create Post
                </Form.Field>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'lfgForm'
})(NewLfgPost)


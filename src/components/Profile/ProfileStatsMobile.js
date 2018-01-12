import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchPlayerCharacters, fetchUserDetails, fetchCharacter, changeCharacter } from '../../actions/profile_index';
import { Container, Image, Grid, Header, Segment, Rating, Popup, Dropdown, Label, Divider } from "semantic-ui-react";
import '../../css/Profile.css';
import NoTextLogo from "../../img/logo-no-text.png";
import Nightfall from './Nightfall'
import Pvp from './Pvp'
import 'react-tippy/dist/tippy.css';
import { jwt } from '../../tools/jwt';
import { BADGES } from '../../data/common_constants'


class UserOverview extends Component {
    render() {
        const { reputation, user, characters, character, fetchingCharacters } = this.props;
        const characterOptions = Object.entries(characters).map((character, index) => {
            return {
                key: index,
                value: character[0],
                text: character[1].character_type,
                image: character[1].emblem
            }
        })

        const repValue = Math.round(reputation.reputation_score * 5) / 100

        const repDisplay = (
            <Popup
                trigger={<Rating size='small' defaultRating={repValue} maxRating={5} icon='star' disabled className="profile-rating" />}
                content={`Reputation: ${reputation.reputation_score}% (${reputation.total_votes} votes)`}
            />

        )

        let badges = "No badges to display."
        let extra = []
        if (user.badges) {
            // eslint-disable-next-line
            badges = user.badges.map((badge, index) => {
                if (index <= 2) {
                    return (
                        <Popup
                            key={`badge-${badge.id}`}
                            position='top center'
                            hoverable
                            trigger={BADGES[badge.id]}
                            content={badge.description}
                        />
                    )
                } else {
                    extra.push(badge)
                }
            })

            if (extra.length) {
                extra = extra.map((badge, index) => {
                    return (
                        <Popup
                            key={`badge-${badge.id}`}
                            position='top center'
                            hoverable
                            trigger={BADGES[badge.id]}
                            content={badge.description}
                        />
                    )

                })
            }
        }

        return (
            <Segment
                inverted
                size='massive'
                className="profile-segment-header"
                loading={this.props.fetchingUser}
            >
                <Header as='h1'>
                    <Image verticalAlign='middle' src={NoTextLogo} />
                    <Header.Content style={{ color: '#212121', fontWeight: '100', }}>
                        {jwt.display_name}
                        <Header.Subheader style={{ color: '#212121' }}>
                            {repDisplay}
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <Label.Group size='tiny'>
                    {badges}
                    <Popup
                        key={'extra-badges'}
                        position='top center'
                        fluid
                        hoverable
                        trigger={extra.length ? <Label> +{extra.length}</Label> : null}
                        content={<Label.Group size='tiny'>{extra}</Label.Group>}
                    />
                </Label.Group>
                <Divider />
                <Dropdown
                    fluid
                    selection
                    options={characterOptions}
                    placeholder={character !== null ? character.type : null}
                    defaultValue={character !== null ? character.id : null}
                    loading={fetchingCharacters}
                    onChange={this.props.handleChange}
                />
            </Segment>
        )
    }
}


class Stats extends Component {
    componentWillMount() {
        this.props.fetchUserDetails(jwt.user_id);
        this.props.fetchPlayerCharacters(jwt.user_id);
    }

    handleChange = (e, data) => {
        const id = data.value
        const type  = data.options.filter(char => char.value === id)[0].text
        this.props.changeCharacter(id, type) 
    }

    render() {
        const { reputation, user, characters, character } = this.props;

        return (
            <Container style={{ padding: "2%", minHeight: '90vh', width: '90%' }} className='hide-on-med-and-up'>
                <Grid columns={3} stackable>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <UserOverview reputation={reputation} user={user} characters={characters} character={character} handleChange={this.handleChange}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Nightfall user={user} character={character} />
                        </Grid.Column>
                        <Grid.Column>
                            <Pvp user={user} character={character} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column style={{ width: '33.3333%' }}>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                className="profile-segment"
                            >
                                Character and Weekly progress info coming soon!
                            </Segment>
                        </Grid.Column>
                        <Grid.Column style={{ width: '66.6667%' }}>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                className="profile-segment"
                            >
                                Trials info coming soon!
                            </Segment>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                className="profile-segment"
                            >
                                Raid info coming soon!
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>                
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return {
        fetchingCharacters: state.profile.fetchingCharacters,
        fetchingUser: state.profile.fetchingUser,
        fetchingCharacter: state.profile.fetchingCharacter,
        characters: state.profile.characters,
        character: state.profile.character,
        user: state.profile.user,
        reputation: state.profile.reputation,
        characterError: state.profile.characterError,
        userError: state.profile.userError
    }
}

export default connect(mapStateToProps, { fetchPlayerCharacters, fetchUserDetails, fetchCharacter, changeCharacter })(Stats)


import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchPlayerCharacters, fetchUserDetails, fetchCharacter } from '../../actions/profile_index';
import { Container, Icon, Image, Grid, Header, Segment, Rating, Popup, Dropdown, Label, Divider } from "semantic-ui-react";
import '../../css/Profile.css';
import NoTextLogo from "../../img/logo-no-text.png";
import { BADGES } from '../../data/common_constants'


class UserOverview extends Component {
    render() {
        const { reputation, user, characters } = this.props;
        const characterOptions = Object.values(characters).map((character, index) => {
            return {
                key: index,
                value: character.id,
                text: character.character_type,
                image: character.emblem
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

        console.log(this.props.user)
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
                        {this.props.user.display_name}
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
                <Dropdown placeholder='Select Character' fluid selection options={characterOptions} loading={this.props.fetchingCharacters} />
            </Segment>
        )
    }
}

class Stats extends Component {
    componentWillMount() {
        this.props.fetchUserDetails(this.props.user_id);
        this.props.fetchPlayerCharacters(this.props.user_id);
    }

    render() {
        const { reputation, user, characters } = this.props;

        return (
            <Container style={{ padding: "2%", minHeight: '90vh', width: '90%' }} className='hide-on-mobile'>
                <Grid columns={3}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <UserOverview reputation={reputation} user={user} characters={characters} />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                className="profile-segment"
                            >
                                Nightfall stats coming soon!
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                className="profile-segment"
                            >
                                Overall PVP stats coming soon!
                            </Segment>
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

                <Grid columns={1} style ={{ width: '110%', marginTop: '0' }}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div style={{ textAlign: "right" }}>
                                <Icon
                                    name="angle down"
                                    size="huge"
                                    className="scroll-icon fa-pulse"
                                    onClick={this.props.scrollClick}
                                />
                            </div>
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

export default connect(mapStateToProps, { fetchPlayerCharacters, fetchUserDetails, fetchCharacter })(Stats)


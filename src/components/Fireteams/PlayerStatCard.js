import React, { Component } from 'react';
import { Header, Card, Segment, Icon, Image, Grid, Label, Popup, Button, Rating, Transition } from 'semantic-ui-react';
import KillChart from '../../charts/KillChart.js';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { API_URL } from '../../tools/api-config';
import { SUBCLASS_ICONS, BADGES } from '../../data/common_constants'
import NoItem from '../../img/no-item-found.jpg';

class CardContainer extends Component {

    state = { fetching: true, error: null }
    componentWillMount() {
        let data = {}
        data.platform = this.props.data.membership_type
        data.membership_id = this.props.data.membership_id
        this.fetchPlayerStats(data)
    }

    fetchPlayerStats = (data) => {
        axios.get(`${API_URL}/v1/fireteams/stats/${data.platform}/${data.membership_id}`).then(response => {
            this.setState({ fetching: false, stats: response.data })
            if (this.props.action) {
                this.props.action(this.props.data.player_name, response.data);
            }
        }).catch(error => {
            console.log(error)
            this.setState({ error: error, fetching: false })
        })
    }

    render() {
        const stats = this.state.stats;

        return (
            this.state.fetching || this.state.error ?
                <Grid.Column style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                    <div style={{ textAlign: '-webkit-center', height: ' 100%' }}>
                        <ClipLoader color="#47D5CF" size={70} />
                    </div>
                </Grid.Column>
                :
                <Transition key={this.props.data.membership_id} animation='fly down' duration={1000} transitionOnMount={true}>
                    <Grid.Column style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                        <div style={{ textAlign: '-webkit-center', height: ' 100%' }}>
                            <PlayerStatCard
                                stats={stats}
                                player_name={this.props.data.player_name}
                                has_account={this.props.data.has_account}
                                account_info={this.props.data.account_info}
                            />
                        </div>
                    </Grid.Column>
                </Transition>
        )

    }
}

class PlayerStatCard extends Component {
    render() {

        const { stats, player_name, has_account, account_info } = this.props
        const items = stats[0].items === null ? null : stats[0].items

        console.log(items)
        var exotic = (items === null || items.helmet === undefined) ? null : items.helmet
        for (var key in items) {
            if (items[key].item_tier === "Exotic" && items[key].item_type.match(/^(Helmet|Gauntlets|Leg Armor|Chest Armor)$/)) {
                exotic = items[key];
            }
        }

        // exotic = items.filter(item => item)

        // console.log(account_info)
        let badges = null;
        if (account_info.badges) {
            badges = account_info.badges.map(function (badge) {
                return (
                    <Popup
                        key={badge.id}
                        position='top center'
                        hoverable
                        trigger={BADGES[badge.id]}
                        content={badge.description}
                    />
                )

            })
        }


        const profileContent = (
            <div>
                <Grid centered divided columns={2}>
                    <Grid.Column textAlign='center'>
                        <div>
                            <Header as='h6' style={{ color: '#212121' }}>
                                ACCOUNT BADGES
                            </Header>
                            <Label.Group>
                                {badges}
                            </Label.Group>
                        </div>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Button disabled>Go to Profile</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )

        const repValue = account_info !== null && has_account ? Math.round(account_info.reputation.reputation_score * 5) / 100 : 0

        const repDisplay = account_info !== null && has_account ?
            <Popup
                trigger={<Rating size='large' defaultRating={repValue} maxRating={5} icon='star' disabled />}
                content={`Reputation: ${account_info.reputation.reputation_score}% (${account_info.reputation.total_votes} votes)`}
            />
            :
            <Popup
                trigger={<Rating size='large' defaultRating={0} maxRating={5} icon='star' disabled />}
                content={"This player does not have a Destinder account."}
            />

        const elo = stats[0].player_data.stats.elo.elo;
        let eloColor;
        if (elo < 1100) {

        } else if (elo >= 1100 && elo < 1299) {
            eloColor = {color: '#5d5d5d'}
        } else if (elo >= 1300 && elo < 1499) {
            eloColor = {color: '#ab7000'}
        } else if (elo >= 1500 && elo < 1699) {
            eloColor = {color: '#006b31'}
        } else {
            eloColor = { color: '#00567d' }
        }

        return (
            <div>
                <Card style={{ boxShadow: 'none' }}>
                    <Card.Content style={{ padding: '0' }}>
                        {has_account ?
                            <Popup
                                trigger={<Label as='a' color='teal' corner='right'><Icon name="user circle" style={{ margin: '0' }} /></Label>}
                                content={profileContent}
                                position='bottom center'
                                hoverable
                                flowing
                            />
                            :
                            null
                        }
                        <Card.Header style={{ display: 'none' }}>
                            <Segment className='stat-card-header' style={{ backgroundImage: `url(${stats[0].character_data.emblem_background})` }}>
                                {player_name}
                            </Segment>
                        </Card.Header>
                        <Card.Meta style={{ height: '150px', marginBottom: '-20px' }}>
                            <Segment style={{ backgroundImage: `url(${stats[0].character_data.emblem_background})`, backgroundSize: 'cover' }} className='stat-card-subheader' />

                            <div style={{ textAlign: '-webkit-center', position: 'relative', bottom: '43px' }}>
                                <Segment circular style={{ width: 50, height: 50 }} >
                                    <Header as='h2' style={{ color: '#212121' }}>
                                        {stats[0].player_data.stats.kd_ratio}
                                        <Header.Subheader>
                                            K/D
                                    </Header.Subheader>
                                    </Header>
                                </Segment>
                            </div>


                        </Card.Meta>
                        <Card.Description style={{ padding: '10px' }}>
                            <div style={{
                                textAlign: 'center',
                                marginBottom: '2%',
                                fontSize: '1.25em',
                                fontWeight: '700',
                            }}>
                                {player_name}

                            </div>
                            <Popup
                                trigger={<div style={{
                                    textAlign: 'center',
                                    fontSize: '0.8rem',
                                    fontWeight: '400',
                                    marginBottom: '5%',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {/* <Image src={SUBCLASS_ICONS[stats[0].character_data.subclass]} avatar size='mini' /> */}
                                    <span>{stats[0].character_data.subclass}</span> <Image src={SUBCLASS_ICONS[stats[0].character_data.subclass]} avatar size='mini' />
                                    <span style={{ marginLeft: '4px', fontWeight: '600', fontSize: '0.9rem', textTransform: 'lowercase' }} > {stats[0].player_data.stats.flawless}x </span> Flawless
                                </div>}
                                content='Subclass Stats Coming Soon...'
                                position='bottom center'
                            />

                            <div style={{ padding: '15px' }}>
                                {stats[0].recent_games === null ?
                                    null
                                    :
                                    <KillChart key={`${player_name}${stats[0].character_data.subclass}`} data={stats[0].recent_games} />}
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '0.8em',
                                    fontWeight: '400',
                                }}>Recent Games K/D Spread</div>
                            </div>
                            {repDisplay}
                            <Grid textAlign='center' columns='equal' divided style={{ marginTop: '20px', marginBottom: '10px' }}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {stats[0].player_data.stats.kad_ratio}
                                            <Header.Subheader>
                                                KA/D
                                            </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={eloColor}>
                                            {stats[0].player_data.stats.elo.elo}
                                            <Header.Subheader>
                                                ELO
                                            </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {stats[0].player_data.stats.win_rate}
                                            <Header.Subheader>
                                                WIN %
                                            </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ backgroundColor: '#f7f7f7' }}>

                        <Grid columns='equal'>
                            <Grid.Row style={{ padding: '0' }}>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    <Popup
                                        trigger={<Image style={{ borderRadius: '4px' }} bordered src={
                                            (items === null || items.kinetic_weapon === undefined) ? NoItem : items.kinetic_weapon.item_icon
                                        } />}
                                        content={(items === null || items.kinetic_weapon === undefined) ? "No Data" : items.kinetic_weapon.item_name}
                                        header="Kinetic Weapon"
                                        position='top center'
                                    />
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    <Popup
                                        trigger={<Image style={{ borderRadius: '4px' }} bordered src={
                                            (items === null || items.energy_weapon === undefined) ? NoItem : items.energy_weapon.item_icon
                                        } />}
                                        content={(items === null || items.energy_weapon === undefined) ? "No Data" : items.energy_weapon.item_name}
                                        header="Energy Weapon"
                                        position='top center'
                                    />
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    <Popup
                                        trigger={<Image style={{ borderRadius: '4px' }} bordered src={
                                            (items === null || items.power_weapon === undefined) ? NoItem : items.power_weapon.item_icon
                                        } />}
                                        content={(items === null || items.power_weapon === undefined) ? "No Data" : items.power_weapon.item_name}
                                        header="Power"
                                        position='top center'
                                    />
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    <Popup
                                        trigger={<Image style={{ borderRadius: '4px' }} bordered src={
                                            exotic === undefined ? NoItem : exotic.item_icon
                                        } />}
                                        content={exotic === undefined ? "No Data" : exotic.item_name}
                                        header={exotic === undefined ? "No Data" : exotic.item_type}
                                        position='top center'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </div>
        )

    }
}

// function mapStateToProps(state) {
//     return {
//         error: state.fireteamPlayer.error,
//         fetching: state.fireteamPlayer.fetching,
//         stats: state.fireteamPlayer.stats
//     }
// }

// export default connect(mapStateToProps,
//     { fetchPlayerStats }
// )(CardContainer)


export default CardContainer
import React, { Component } from 'react';
import { Header, Card, Segment,  Image, Grid,  Popup } from 'semantic-ui-react';
import KillChart from '../../charts/KillChart.js';
import { SUBCLASS_ICONS } from '../../data/common_constants'
import NoItem from '../../img/no-item-found.jpg';

class CardContainer extends Component {

    render() {
        const {stats, player_name, has_account}  = this.props;
        return (
            <Grid.Column >
                <div style={{ textAlign: '-webkit-center' }}>
                    <PlayerStatCard
                        stats={stats}
                        player_name={player_name}
                        has_account={has_account}
                    />
                </div>
            </Grid.Column>
        )
    }
}

class PlayerStatCard extends Component {
    render() {

        const { stats, player_name } = this.props
        const items = stats.items === null ? null : stats.items

        var exotic = (items === null || items.helmet === undefined) ? null : items.helmet
        for (var key in items) {
            if (items[key].item_tier === "Exotic" && items[key].item_type.match(/^(Helmet|Gauntlets|Leg Armor|Chest Armor)$/)) {
                exotic = items[key];
            }
        }

        const elo = stats.player_data.stats.elo.elo;
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
            <div style={{padding: '5%' }}>
                <Card style={{ boxShadow: 'none' }}>
                    <Card.Content style={{ padding: '0' }}>
                        <Card.Header style={{ display: 'none' }}>
                            <Segment className='stat-card-header' style={{ backgroundImage: `url(${stats.character_data.emblem_background})` }}>
                                {player_name}
                            </Segment>
                        </Card.Header>
                        <Card.Meta style={{ height: '150px', marginBottom: '-20px' }}>
                            <Segment style={{ backgroundImage: `url(${stats.character_data.emblem_background})`, backgroundSize: 'cover' }} className='stat-card-subheader' />

                            <div style={{ textAlign: '-webkit-center', position: 'relative', bottom: '43px' }}>
                                <Segment circular style={{ width: 50, height: 50 }} >
                                    <Header as='h2' style={{ color: '#212121' }}>
                                        {stats.player_data.stats.kd_ratio}
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
                                <span>{stats.character_data.subclass}</span> <Image src={SUBCLASS_ICONS[stats.character_data.subclass]} avatar size='mini' /> 
                                <span style={{marginLeft: '4px', fontWeight: '600', fontSize: '0.9rem', textTransform: 'lowercase'}} > {stats.player_data.stats.flawless}x </span> Flawless
                            </div>}
                            content='Subclass Stats Coming Soon...'
                            position='bottom center'
                        />

                            <div style={{ padding: '15px' }}>
                                {stats.recent_games === null ?
                                    null
                                    :
                                    <KillChart key={`${player_name}${stats.character_data.subclass}`} data={stats.recent_games} />}
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '0.8em',
                                    fontWeight: '400',
                                }}>Recent Games K/D Spread</div>
                            </div>
                            <Grid textAlign='center' columns='equal' divided style={{ marginTop: '20px', marginBottom: '10px' }}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {stats.player_data.stats.kad_ratio}
                                            <Header.Subheader>
                                                KA/D
                                        </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={eloColor}>
                                            {stats.player_data.stats.elo.elo}
                                            <Header.Subheader>
                                                ELO
                                        </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {stats.player_data.stats.win_rate}
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
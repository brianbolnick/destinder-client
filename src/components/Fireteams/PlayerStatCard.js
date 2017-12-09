import React, { Component } from 'react';
import { Header, Card, Segment, Icon, Image, Grid, Label, Popup, Button, Rating, Divider, Transition } from 'semantic-ui-react';
import KillChart from '../../charts/KillChart.js';
import { connect } from 'react-redux';
import { fetchPlayerStats } from '../../actions/fireteam_player_index';
import { SyncLoader, ScaleLoader, PulseLoader, RingLoader, ClipLoader } from 'react-spinners';
import axios from 'axios';
import { API_URL } from '../../tools/api-config';
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }



class CardContainer extends Component {
    componentWillMount() {
        let data = {}
        data.platform = this.props.data.membership_type
        data.membership_id = this.props.data.membership_id
        this.setState({fetching: true})
        // this.fetchPlayerStats(data)
        setTimeout(() => { 
            console.log("fetching data for", data.membership_id)
            axios.get(`${API_URL}/v1/fireteams/stats/${data.platform}/${data.membership_id}`).then(response => {
                console.log(response.data)
                this.setState({ fetching: false, stats: response.data })
            }).catch(error => {
                console.log(error)
                this.setState({ error: error, fetching: false })
            })
         }, 1);

        // console.log("fetching stats for ", this.props.data.player_name)

    }

    fetchPlayerStats = (data) => {
        console.log("fetching data for", data.membership_id)
        axios.get(`${API_URL}/v1/fireteams/stats/${data.platform}/${data.membership_id}`).then(response => {
            console.log(response.data)
            this.setState({ fetching: false, stats: response.data })
        }).catch(error => {
            console.log(error)
            this.setState({ error: error, fetching: false })
        })
    }

    render() {
        // console.log(`data for: ${this.props.data.player_name}`)
        // console.log(this.state.stats)

        const stats = this.props.stats;

        return (
            this.state.fetching ?
                <ClipLoader color="#47D5CF" />
                :
                <Transition key={this.props.data.membership_id} animation='fly down' duration={1000} transitionOnMount={true}>
                    <Grid.Column style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                        <div style={{ textAlign: '-webkit-center', height: ' 100%', paddingTop: '50%' }}>
                            {/* <PlayerStatCard stats={stats} /> */}
                            card
                        </div>
                    </Grid.Column>
                </Transition>
        )

    }
}

class PlayerStatCard extends Component {
    render() {
        const stats = this.props.stats;
        return (
            <div>
                <Card style={{ boxShadow: 'none' }}>
                    <Card.Content style={{ padding: '0' }}>
                        <Popup
                            trigger={<Label as='a' color='teal' corner='right'><Icon name="user circle" style={{ margin: '0' }} /></Label>}

                            content="Hey!"
                            position='bottom center'
                            hoverable
                            flowing
                        />

                        <Card.Header style={{ display: 'none' }}>
                            <Segment className='stat-card-header' style={{ backgroundImage: `url(${stats[0].character_data.emblem_background})` }}>
                                player_name
                            </Segment>
                        </Card.Header>
                        <Card.Meta style={{ height: '150px', marginBottom: '-20px' }}>
                            <Segment style={{ backgroundImage: `url(${stats[0].character_data.emblem_background})`, backgroundSize: 'cover' }} className='stat-card-subheader' />

                            <div style={{ textAlign: '-webkit-center', position: 'relative', bottom: '43px' }}>
                                <Segment circular style={{ width: 50, height: 50 }} >
                                    <Header as='h2' style={{ color: '#212121' }}>
                                        {/* {props.data.stats[0].kd_ratio} */}
                                        1.23
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
                                {/* {props.player_name} */}
                                player name
                            </div>
                            <Popup
                                trigger={<div style={{
                                    textAlign: 'center',
                                    fontSize: '1em',
                                    fontWeight: '400',
                                    marginBottom: '5%'
                                }}>
                                    subclass
                                    {/* <Image src={props.data.subclass_icon} avatar size='mini' />{props.data.subclass} */}
                                </div>}
                                content='Subclass stats!'
                                position='bottom center'
                            />

                            <div style={{ padding: '15px' }}>
                                {/* {<KillChart key={`${props.data.player_name}${props.data.character_type}`} data={props.data.recent_games} />}
                                    <div style={{
                                        textAlign: 'center',
                                        fontSize: '0.8em',
                                        fontWeight: '400',
                                    }}>Recent Games K/D Spread</div> */}
                                chart
                                </div>
                            <Grid textAlign='center' columns='equal' divided style={{ marginTop: '20px', marginBottom: '10px' }}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {/* {props.data.stats[0].kad_ratio} */}
                                            123
                                                <Header.Subheader>
                                                KA/D
                                        </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#7198B7' }}>
                                            {/* {props.data.stats[0].elo.value} */}
                                            1234
                                                <Header.Subheader>
                                                ELO
                                        </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header as='h4' style={{ color: '#212121' }}>
                                            {/* {props.data.stats[0].win_rate} */}
                                            12
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
                                    item
                                        {/* <Popup
                                            trigger={<Image style={{ borderRadius: '4px' }} bordered src={props.data.items[0].primary_weapon_1.item_icon} />}
                                            content={props.data.items[0].primary_weapon_1.item_name}
                                            header="Primary 1"
                                            position='top center'
                                        /> */}
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    item
                                        {/* <Popup
                                            trigger={<Image style={{ borderRadius: '4px' }} bordered src={props.data.items[0].primary_weapon_2.item_icon} />}
                                            content={props.data.items[0].primary_weapon_2.item_name}
                                            header="Primary 2"
                                            position='top center'
                                        /> */}
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    item
                                        {/* <Popup
                                            trigger={<Image style={{ borderRadius: '4px' }} bordered src={props.data.items[0].power_weapon.item_icon} />}
                                            content={props.data.items[0].power_weapon.item_name}
                                            header="Power"
                                            position='top center'
                                        /> */}
                                </Grid.Column>
                                <Grid.Column style={{ padding: '5px 4px 7px 4px' }}>
                                    item
                                        {/* <Popup
                                            trigger={<Image style={{ borderRadius: '4px' }} bordered src={exotic.item_icon} />}
                                            content={exotic.item_name}
                                            header={exotic.item_type}
                                            position='top center'
                                        /> */}
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
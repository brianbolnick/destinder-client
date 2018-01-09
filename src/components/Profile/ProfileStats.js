import React, { Component } from "react";
import { Container, Icon, Image, Grid, Header, Segment } from "semantic-ui-react";
import '../../css/Profile.css';
import NoTextLogo from "../../img/logo-no-text.png";
import { jwt } from '../../tools/jwt';
// eslint-disable-next-line
import { API_URL } from '../../tools/api-config';


class Stats extends Component {
    render() {
        return (
            <Container style={{ padding: "2%", minHeight: '90vh', width: '90%' }} className='hide-on-mobile'>
                <Grid columns={3}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment
                                inverted
                                size='massive'
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
                            >
                                <Header as='h1'>
                                    <Image verticalAlign='middle' src={NoTextLogo} />
                                    <Header.Content style={{ color: '#212121', fontWeight: '400', }}>
                                        {jwt.display_name}
                                        <Header.Subheader style={{ color: '#212121' }}>
                                            Profile
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
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
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
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
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
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
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
                            >
                                Trials info coming soon!
                            </Segment>
                            <Segment
                                inverted
                                raised
                                padded='very'
                                size='massive'
                                style={{
                                    lineHeight: '2.5rem',
                                    backgroundColor: '#FFFFFF',
                                    color: '#212121',
                                    fontWeight: '100',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    boxShadow: '0px 3px 1px 0px rgba(34,36,38,.12), 0px 2px 4px 0px rgba(34,36,38,.15)'
                                }}
                            >
                                Raid info coming soon!
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid columns={1}>
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


export default Stats
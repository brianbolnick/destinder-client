import React, { Component } from "react";
import { Container, Icon, Image, Grid, Header, Segment, } from "semantic-ui-react";
import NoTextLogo from "../../img/logo-no-text-white.png";
import { jwt } from '../../tools/jwt';
// eslint-disable-next-line
import { API_URL } from '../../tools/api-config';

class Stats extends Component {
    render() {
        return (
            <Container style={{ padding: "2%", minHeight: '90vh' }} className='hide-on-med-and-up'>
                <div>
                    <Header as='h1'>
                        <Image verticalAlign='middle' src={NoTextLogo} />
                        <Header.Content style={{ color: '#f5f5f5' }}>
                            {jwt.display_name}
                            <Header.Subheader style={{ color: '#d8d8d8' }}>
                                Dashboard
                            </Header.Subheader>
                        </Header.Content>
                    </Header>
                </div>
                <br />
                <br />

                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div style={{ textAlign: "center", height: '60vh' }} >
                                <Segment inverted padded='very' textAlign='center' size='massive' style={{ lineHeight: '2.5rem', fontSize: '1rem' }}>
                                    We're working on adding some cool things here! Soon you'll find things like stat dashboards for multiple game types, weekly progress trackers, and more!
                                        Be sure to follow us on Twitter, Reddit, or join our Discord server for updates!
                                    </Segment>
                            </div>
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
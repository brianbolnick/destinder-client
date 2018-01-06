import React, { Component } from "react";
import { Container, Header, Table, Label, Accordion, Icon } from "semantic-ui-react";
import Layout from "./Layout.js";
import axios from 'axios';
import { BADGES } from '../data/common_constants'
import { API_URL } from '../tools/api-config';

class Admin extends Component {

    state = { users: [] }

    getAllUsers() {
        axios.get(`${API_URL}/v1/users`).then(response => {

            const users = response.data.map((user) => {
                return (
                    <Table.Row key={user.id}>
                        <Table.Cell>{user.id}</Table.Cell>
                        <Table.Cell>{user.display_name}</Table.Cell>
                        <Table.Cell>{user.api_membership_type}</Table.Cell>
                        <Table.Cell>{user.locale}</Table.Cell>
                        <Table.Cell>
                            <Label.Group>
                                {user.badges.map((badge) => {
                                    return BADGES[badge.id]
                                })}
                            </Label.Group>
                        </Table.Cell>
                    </Table.Row>
                )
            })
            this.setState({ users: users })
        }).catch(error => console.log(error))
    }

    componentWillMount() {
        axios.get(`${API_URL}/v1/users/total_count`).then(response => {
            this.setState({ count: response.data.count })
        }).catch(error => console.log(error))
    }


    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        axios.get(`${API_URL}/v1/users`).then(response => {

            const users = response.data.map((user) => {
                return (
                    <Table.Row key={user.id}>
                        <Table.Cell>{user.id}</Table.Cell>
                        <Table.Cell>{user.display_name}</Table.Cell>
                        <Table.Cell>{user.api_membership_type}</Table.Cell>
                        <Table.Cell>{user.locale}</Table.Cell>
                        <Table.Cell>
                            <Label.Group>
                                {user.badges.map((badge) => {
                                    return BADGES[badge.id]
                                })}
                            </Label.Group>
                        </Table.Cell>
                    </Table.Row>
                )
            })
            this.setState({ users: users })
        }).catch(error => console.log(error))

        this.setState({ activeIndex: newIndex })
    }
    
    render() {
        const { activeIndex } = this.state
        return (
            <Layout>
                <div className="profile-page" style={{ minHeight: '100%' }}>
                    <Container>
                        <Header as="h2">Site Users (Total: {this.state.count})</Header>
                        <Accordion>
                            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                User List
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>ID</Table.HeaderCell>
                                            <Table.HeaderCell>User Name</Table.HeaderCell>
                                            <Table.HeaderCell>Platform</Table.HeaderCell>
                                            <Table.HeaderCell>Locale</Table.HeaderCell>
                                            <Table.HeaderCell>Badges</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {this.state.users}
                                    </Table.Body>
                                </Table>
                            </Accordion.Content>

                        </Accordion>


                    </Container>
                </div>
            </Layout>
        );
    }
}

export default Admin;
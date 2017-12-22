import React, { Component } from "react";
import { Container, Header, Table, Label } from "semantic-ui-react";
import Layout from "./Layout.js";
import axios from 'axios';
import { BADGES } from '../data/common_constants'
import { API_URL } from '../tools/api-config';

class Admin extends Component {

    state = { users: [] }

    componentWillMount() {
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

    render() {
        return (
            <Layout>
                <div className="profile-page" style={{ minHeight: '100vh' }}>
                    <Container>
                        <Header as="h2">Site Users (Total: {this.state.users.length})</Header>
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

                    </Container>
                </div>
            </Layout>
        );
    }
}

export default Admin;
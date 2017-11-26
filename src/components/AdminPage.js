import React, { Component } from "react";
import { Container, Header, Table } from "semantic-ui-react";
import Layout from "./Layout.js";
import axios from 'axios';
import { API_URL } from '../tools/api-config';
const config = { headers: { 'AUTHORIZATION': `Bearer ${localStorage.getItem('auth_token')}` } }

class Admin extends Component {

    state = { users: [] }

    componentWillMount() {
        axios.get(`${API_URL}/v1/users`).then(response => {
            console.log(response.data)
            const users = response.data.map((user) => {
                return (
                    <Table.Row key={user.id}>
                        <Table.Cell>{user.display_name}</Table.Cell>
                        <Table.Cell>{user.api_membership_type}</Table.Cell>
                        <Table.Cell>{user.locale}</Table.Cell>
                        <Table.Cell>badges</Table.Cell>
                    </Table.Row>
                )
            })
            this.setState({ users: users })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <Layout>
                <div className="profile-page" style={{ height: '100vh' }}>
                    <Container>
                        <Header as="h2">Site Users</Header>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
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
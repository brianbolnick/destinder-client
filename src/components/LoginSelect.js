import React, { Component } from "react";
import { Container, Header, Dropdown, Image, Divider } from "semantic-ui-react";
import Layout from "./Layout.js";
import axios from 'axios';
import Logo from "../img/logo-with-title-word-white.png";
import { API_URL } from '../tools/api-config';
import { PLATFORMS } from '../data/common_constants'
import { getQueryParams } from '../tools/utils';
import jwtDecode from 'jwt-decode';


class Selector extends Component {

    constructor() {
        super();

        const params = getQueryParams();
        // console.log(params);
        if (params.login_token != null) {
            const jwt = jwtDecode(params.login_token);
            console.log(jwt);
            this.state = {
                jwt: jwt
            }

        } else {
            console.log(params)
        }
    }

    handleChange = (e, { value }) => {
        console.log(value)
        axios.post(`${API_URL}/login_select`,
            value
        )
            .then(response => {
                console.log(response.data)
                window.location.replace(`/?token=${response.data.token}`);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const options = Object.values(this.state.jwt).map((platform, index) => {
            console.log(platform)
            return {
                key: index,
                value: platform,
                text: PLATFORMS[platform.membership_type]
            }
        })
        return (
            <Layout>
                <div className="profile-page" style={{ minHeight: '100%' }}>
                    <Container>
                        <Image src={Logo} size='big' centered/>
                        <Divider />
                        <Header as="h2" textAlign='center'>Welcome, Master of many, you're almost there!</Header>
                        <p>Looks like you play Destiny on a few different platforms. Select which one you want to login with.
                        Don't worry, you can always logout and change to another platform.</p>
                        <Dropdown placeholder='Select Platform' fluid selection options={options} onChange={this.handleChange} />

                    </Container>
                </div>
            </Layout>
        );
    }
}

export default Selector;
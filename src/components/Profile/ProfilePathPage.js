import React, { Component } from "react";
import ProfileStats from './ProfilePathStats';
import ProfileStatsMobile from './ProfileStatsMobile';
import { jwt } from '../../tools/jwt';
import HeaderNav from "../Header.js";

class Stats extends Component {
    render() {
        return (
            <HeaderNav>
                <ProfileStats scrollClick={this.props.scrollClick} user_id={this.props.user_id} />
                <ProfileStatsMobile scrollClick={this.props.scrollClick} />
            </HeaderNav>
        );
    }
}

class Profile extends Component {

    render() {
        return (
            <div style={{ backgroundImage: 'linear-gradient(rgb(252, 92, 125), rgb(106, 130, 251))', backgroundSize: 'cover', backgroundPositionY: 'center' }} >
                <Stats user_id={this.props.user_id} />
            </div>
        )
    }
}

class ProfilePage extends Component {


    isLoggedIn() {
        if (jwt != null) {
            if ((jwt.exp * 1000) >= Date.now()) {
                return true;
            } else {
                localStorage.removeItem('jwt');
                localStorage.removeItem('auth_token');
            }
        }
        return false;
    }
    render() {
        return (
            <div className="profile-page" style={{ height: '100%' }}>
                <Profile user_id={this.props.match.params.user_id} />
            </div>
        );
    }
}

export default ProfilePage;

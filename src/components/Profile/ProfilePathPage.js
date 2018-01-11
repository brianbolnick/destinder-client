import React, { Component } from "react";
import ProfileStats from './ProfilePathStats';
// import ProfileStatsMobile from './ProfileStatsMobile';
import { jwt } from '../../tools/jwt';
import Parallax from "react-springy-parallax";
import HeaderNav from "../Header.js";

class Stats extends Component {
    render() {
        
        return (
            <HeaderNav>                
                <ProfileStats scrollClick={this.props.scrollClick} user_id={this.props.user_id}/>
                {/* <ProfileStatsMobile scrollClick={this.props.scrollClick} /> */}
            </HeaderNav>
        );
    }
}

class Profile extends Component {

    render() {
        return (
            <Parallax ref="parallax" pages={1} >
                <Parallax.Layer offset={0} speed={0} factor={2} style={{ backgroundImage: 'linear-gradient(rgb(252, 92, 125), rgb(106, 130, 251))', backgroundSize: 'cover', backgroundPositionY: 'center' }} />
                <Parallax.Layer offset={0} speed={0.5}>
                    <Stats user_id={this.props.user_id}/>
                </Parallax.Layer>
            </Parallax>
        )
    }
}

// class NoAuth extends Component {
//     render() {
//         return (
//             <div>
//                 <Message icon info>
//                     <Icon name='circle notched' loading />
//                     <Message.Content>
//                         <Message.Header>Sorry! You need to be logged in to access this page.</Message.Header>
//                         We can't pull any of your info if we don't know who you are... It'll be worth it :)
//                     </Message.Content>
//                 </Message>
//                 <Button color='green' basic fluid as='a' href={`${API_URL}/login`}>
//                     Sign up or Login with Bungie
//                 </Button>
//                 <Divider />
//                 <Image size='big' centered fluid src='https://media.giphy.com/media/l378k9LrbIFNby9gY/source.gif' />
//             </div>
//         )
//     }
// }

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
        console.log(this.props.match)
        return (            
            <div className="profile-page" style={{ height: '100%' }}>
                <Profile user_id={this.props.match.params.user_id}/>
            </div>                
        );
    }
}

export default ProfilePage;

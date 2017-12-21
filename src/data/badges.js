import React, { Component } from "react";
import {
    Label,
    Icon,
    Popup
} from "semantic-ui-react";
import '../css/App.css'
import '../css/Content.css'


export class Architect extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label className="architect-badge">
                        <Icon name='rebel' /> ARCHITECT
                    </Label>
                }
                content='We built the site! :) '
            />

        )
    }

}

export class Dedicated extends Component {
    render() {
        return (

            <Popup
                trigger={
                    <Label className="rainbow-badge">
                        <Icon name='heart' /> DEDICATED
                    </Label>
                }
                content='Actively engaged in contributing feedback and promoting the site.'
            />

        )
    }

}

export class Donator extends Component {
    render() {
        return (

            <Popup
                trigger={
                    <Label className="donator-badge">
                        <Icon name='dollar' /> DONATOR
                    </Label>
                }
                content='Donated at least $5! Baller.'
            />

        )
    }

}

export class BigDonator extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: 'linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89))', color: '#fafafa' }}>
                        <Icon name='dollar' /> DONATOR
                    </Label>
                }
                content='Donated at least $50! Might as well be Iron Man.'
            />

        )
    }

}

export class Follower extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: 'linear-gradient(to right, rgb(86, 204, 242), rgb(47, 128, 237))', color: '#f5f5f5' }}>
                        <Icon name='users' /> FOLLOWER
                    </Label>
                }
                content='Followed @destinderdotcom on Social Media.'
            />

        )
    }

}

export class Veteran extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: 'linear-gradient(to right, rgb(17, 153, 142), rgb(56, 239, 125))', color: '#f5f5f5' }}>
                        <Icon name='first order' /> VETERAN
                    </Label>
                }
                content='One of the first 500 users on the site!'
            />
            
        )
    }

}


export class CakeBoss extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: '#FF00A3', color: '#FAFAFA' }}>
                        <Icon name='birthday' /> CAKE BOSS
                    </Label>
                }
                content='First donator ever! Thanks for buying our domain name.'
            />
        )
    }

}

export class Sponsor extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: 'linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51))', color: '#FAFAFA' }}>
                        <Icon name='spy' /> SPONSOR
                    </Label>
                }
                content="Donated at least $100! I...can't.....even......"
            />
            
        )
    }
}

export class LittleHelper extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: '#FF4500', color: '#FAFAFA' }}>
                        <Icon name='users' /> LITTLE HELPER
                    </Label>
                }
                content='Helped contribute feedback during our alpha and beta stage on Reddit!'
            />
            
        )
    }
}

export class Conjuror  extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ background: 'linear-gradient(to right, rgb(229, 45, 39), rgb(179, 18, 23))', color: '#FAFAFA' }}>
                        <Icon name='magic' /> CONJUROR
                    </Label>
                }
                content='Referred a friend!'
            />
            
        )
    }
}
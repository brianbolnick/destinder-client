import React, { Component } from "react";
import {
Label,
Icon
} from "semantic-ui-react";
import '../css/App.css'
import '../css/Content.css'


export class Architect extends Component {
    render() {
        return (
            <Label className="architect-badge">
                <Icon name='rebel' /> ARCHITECT
            </Label>
        )
    }

}

export class Dedicated extends Component {
    render() {
        return (
            <Label className="rainbow-badge">
                <Icon name='heart' /> DEDICATED
            </Label>
        )
    }

}

export class Donator extends Component {
    render() {
        return (
            <Label className="donator-badge">
                <Icon name='dollar' /> DONATOR
            </Label>
        )
    }

}

export class BigDonator extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#B4B8BC', color: '#fafafa' }}>
                <Icon name='dollar' /> DONATOR
            </Label>
        )
    }

}

export class Follower extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#1DA1F2', color: '#f5f5f5' }}>
                <Icon name='users' /> FOLLOWER
            </Label>
        )
    }

}

export class Veteran extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#026670', color: '#f5f5f5' }}>
                <Icon name='first order' /> VETERAN
            </Label>
        )
    }

}


export class CakeBoss extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#FF00A3', color: '#FAFAFA' }}>
                <Icon name='birthday' /> CAKE BOSS
            </Label>
        )
    }

}

export class Sponsor extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#FFCC01', color: '#FAFAFA' }}>
                <Icon name='users' /> SPONSOR
            </Label>
        )
    }
}

export class LittleHelper extends Component {
    render() {
        return (
            <Label style={{ backgroundColor: '#FF4500', color: '#FAFAFA' }}>
                <Icon name='users' /> LITTLE HELPER
            </Label>
        )
    }
}
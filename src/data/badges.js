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

export class SniperBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#f1c40f', border: '1px #f1c40f solid' }}>
                        <Icon name='crosshairs' /> SNIPER
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Sniper Rifle'
            />
            
        )
    }
}

export class PulseBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#2ecc71', border: '1px #2ecc71 solid' }}>
                        <Icon name='crosshairs' /> PULSE
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Pulse Rifle'
            />
            
        )
    }
}

export class ScoutBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#9b59b6', border: '1px #9b59b6 solid' }}>
                        <Icon name='crosshairs' /> SCOUT
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Scout Rifle'
            />
            
        )
    }
}

export class HandCannonBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#3498db', border: '1px #3498db solid' }}>
                        <Icon name='crosshairs' /> HAND CANNON
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Hand Cannon'
            />
            
        )
    }
}

export class FusionBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#34495e', border: '1px #34495e solid' }}>
                        <Icon name='crosshairs' /> FUSION
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Fusion Rifle'
            />
            
        )
    }
}

export class AutoBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#FA8708', border: '1px #FA8708 solid' }}>
                        <Icon name='crosshairs' /> AUTO
                    </Label>
                }
                content='More than 1/3 of total weapon kills with an Auto Rifle'
            />
            
        )
    }
}

export class SidearmBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#AA885F', border: '1px #AA885F solid' }}>
                        <Icon name='crosshairs' /> SIDEARM
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Sidearm'
            />
            
        )
    }
}

export class ShotgunBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#e74c3c', border: '1px #e74c3c solid' }}>
                        <Icon name='crosshairs' /> SHOTGUN
                    </Label>
                }
                content='More than 1/3 of total weapon kills with a Shotgun'
            />
            
        )
    }
}

export class MedicBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#FF3B3F', border: '1px #FF3B3F solid' }}>
                        <Icon name='medkit' /> MEDIC
                    </Label>
                }
                content='Performed more than 2x revives than received'
            />
            
        )
    }
}

export class SuperManBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#4484CE', border: '1px #4484CE solid' }}>
                        <Icon name='superpowers' /> SUPER MAN
                    </Label>
                }
                content='20%+ of total kills with abilities'
            />
            
        )
    }
}

export class MarksmanBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#212121', border: '1px #212121 solid' }}>
                        <Icon name='bullseye' /> MARKSMAN
                    </Label>
                }
                content='More than 60% of total weapon kills are precision kills'
            />
            
        )
    }
}

export class FightForeverBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#FF3B3D', border: '1px #009EF9 solid' }}>
                        <Icon name='fire extinguisher' /> FIGHT FOREVER
                    </Label>
                }
                content='More than 60% of total weapon kills are precision kills'
            />
            
        )
    }
}

export class ArmyOfOneBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#DFBF93', border: '1px #374730 solid' }}>
                        <Icon name='star' /> ARMY OF ONE
                    </Label>
                }
                content='Kill Spree Greater than 15'
            />
            
        )
    }
}

export class TrialsGodBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#009EF9', border: '1px #009EF9 solid' }}>
                        <Icon name='star' /> TRIALS GOD
                    </Label>
                }
                content='Kill Spree Greater than 20'
            />
            
        )
    }
}

export class CamperBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#AA885F', border: '1px #AA885F solid' }}>
                        <Icon name='free code camp' /> CAMPER
                    </Label>
                }
                content='Kill Distance is greater than 25m'
            />
            
        )
    }
}

export class RusherBadge extends Component {
    render() {
        return (
            <Popup
                trigger={
                    <Label style={{ backgroundColor: 'transparent', color: '#AA885F', border: '1px #AA885F solid' }}>
                        <Icon name='fast forward' /> RUSHER
                    </Label>
                }
                content='Kill Distance is less than 20m'
            />
            
        )
    }
}
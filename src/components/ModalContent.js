import React, { Component } from "react";
import { Icon, Button, Modal, Divider, Header, Label } from "semantic-ui-react";
import {
    Dedicated, BigDonator, Donator, Follower, Veteran, Sponsor, LittleHelper, Conjuror,
    SniperBadge,
    PulseBadge,
    ScoutBadge,
    HandCannonBadge,
    FusionBadge,
    AutoBadge,
    SidearmBadge,
    ShotgunBadge,
    MedicBadge,
    SuperManBadge,
    MarksmanBadge,
    FightForeverBadge,
    ArmyOfOneBadge,
    TrialsGodBadge,
    CamperBadge,
    RusherBadge
} from '../data/badges';
import { Link } from "react-router-dom";


export class FaqContent extends Component {
    render() {
        return (
            <Modal.Content >
                <Modal.Description>
                    <Header>About Us</Header>
                    <p>We set out with 2 main goals:</p>
                    <ul>
                        <li>Create a single location for Destiny's most valuable tools</li>
                        <li>Simplify and improve the LFG process</li>
                    </ul>
                    <p>
                        Enter Destinder! We've created a place where you'll be able to find everything you need
                        and never have to leave.
                    </p>
                    <p>
                        Say goodbye to jumping between multiple sites to find the perfect teamate.
                        Our LFG segment reflects real time stats so you know exactly who you're inviting.
                        We've also added smarter filtering options to help in your search.
                    </p>

                    <p>Here are some of the other features we're working on adding:</p>
                    <ul>
                        <li>Personal profile and stat dashboard for multiple game types</li>
                        <li>Clan recruitment and stats</li>
                        <li>Inventory management system</li>
                        <li>Updated account badges, LFG post prioritzation options, and more!</li>
                    </ul>
                    <Divider />
                    <Header>Contributing</Header>
                    <p>We're an open source React/Redux + Ruby on Rails shop. We're a small team so we welcome any contribution efforts!</p>
                    <p>
                        If you would like to contribue, please follow our contribution guidelines on
                        <a href="https://github.com/destiny-aviato/destinder-client"> Github.</a>
                    </p>
                    <p>
                        If you don't have any development experience but still want to help,
                        we're also open to feature requests and bug submissions! Use one of the methods below to let us know.
                    </p>
                    <Divider />
                    <Header>Support</Header>
                    <p>
                        Running the site takes a lot of time, effort, and money. We greatly appreciate any donations as they
                        help us cover things like hosting fees and other expenses. Anyone who donates $5 or more receives a special
                        <span style={{ marginLeft: '5px', marginRight: '2px' }}><Donator /></span> badge.

                        {/* <div style={{textAlign: 'center', padding: '30px'}}> <Donator /></div> */}
                    </p>
                    <Button basic as={Link} to='/donate' >
                        <Icon name='paypal' />  Donate!
                    </Button>
                    <Divider />
                    <Header>Contact Us</Header>
                    <p>
                        If you have a feature request, found a bug, have an inquiry about a badge,
                        or anything else, you can reach us at:
                    </p>
                    <ul>
                        <li><a href="https://twitter.com/destinderdotcom">Twitter</a></li>
                        <li><a href="https://www.reddit.com/r/destinder">Reddit</a></li>
                        <li><a href="https://github.com/destiny-aviato/destinder-client">Github</a></li>
                        <li><a href="https://www.instagram.com/destinderdotcom/">Instagram</a></li>
                        <li><a href="mailto:help@destinder.com">Email</a></li>
                    </ul>
                </Modal.Description>
            </Modal.Content>
        )
    }
}

export class BadgeContent extends Component {
    render() {
        return (
            <Modal.Content >
                <Modal.Description>
                    <Header>Earn account badges for interacting with the site in certain ways!</Header>
                    <Label.Group>
                        <Veteran />
                        <Donator />
                        <BigDonator />
                        <Sponsor />
                        <Dedicated />
                        <Follower />
                        <LittleHelper />
                        <Conjuror />
                    </Label.Group>

                    <Divider />
                    <Header>Want More?</Header>
                    <p>We're always creating new badges and new ways to earn them. If you have a suggestion for one, let us know!</p>
                    <Divider />
                    <Header>Stat-Specific badges earned from in-game accomplishments</Header>
                    <Label.Group>
                        <SniperBadge />
                        <PulseBadge/>
                        <ScoutBadge/>
                        <HandCannonBadge/>
                        <FusionBadge/>
                        <AutoBadge/>
                        <SidearmBadge/>
                        <ShotgunBadge/>
                        <MedicBadge/>
                        <SuperManBadge/>
                        <MarksmanBadge/>
                        <FightForeverBadge/>
                        <ArmyOfOneBadge/>
                        <TrialsGodBadge/>
                        <CamperBadge/>
                        <RusherBadge/>
                    </Label.Group>
                    <p>Find out someone's play style at a glance with our player analysis badges on our Trials fireteam search.</p>
                </Modal.Description>
            </Modal.Content>
        )
    }
}
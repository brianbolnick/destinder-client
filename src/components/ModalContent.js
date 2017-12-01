import React, { Component } from "react";
import { Icon, Button, Modal, Divider, Header } from "semantic-ui-react";

export default class ModalContent extends Component {
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
                        <li>Trials of the Nine fireteam stat search with custom player analysis tools</li>
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
                        donator badge (see below).
                    </p>
                    <Button basic onClick={() => { window.location.replace('"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2"') }} >
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
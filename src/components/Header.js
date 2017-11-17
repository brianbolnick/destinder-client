import React, { Component } from "react";
import {
  Button, Header, Icon, Modal, Card
} from "semantic-ui-react";
import '../css/Content.css';
import { Link } from "react-router-dom";

const currentLocation = window.location.pathname.split("/")[1] || "/";

class ProfileCard extends Component {
  render() {
    return (
      currentLocation === 'profile'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
              Profile
                </Card.Header>
            <Card.Description>
              Visit your personal profile page.
                </Card.Description>
          </Card.Content>
        </Card>
        :
        <Card
          as={Link}
          className="nav-card"
          to='/profile'
          raised
          style={{ border: 'solid 3px #71f79f' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              Profile
          </Card.Header>
            <Card.Description>
              Visit your personal profile page.
          </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class LfgCard extends Component {
  render() {
    return (
      currentLocation === 'lfg'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
                LFG Boards
            </Card.Header>
            <Card.Description>
              Find a fireteam to play with.
            </Card.Description>
          </Card.Content>
        </Card>
        :
        <Card
          className="nav-card"
          as={Link}
          to='/lfg'
          raised
          style={{ border: 'solid 3px #71f79f' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              LFG Boards
          </Card.Header>
            <Card.Description>
              Find a fireteam to play with.
          </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class FireteamsCard extends Component {
  render() {
    return (
      currentLocation === 'fireteams'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
                Fireteam Search
            </Card.Header>
            <Card.Description>
              Lookup stats for an opposing fireteam.
            </Card.Description>
          </Card.Content>
        </Card>
        :
        <Card
          className="nav-card"
          as={Link}
          to='/fireteams'
          raised
          style={{ border: 'solid 3px #71f79f' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              Fireteam Search
          </Card.Header>
            <Card.Description>
              Lookup stats for an opposing fireteam.
          </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class PlayerCard extends Component {
  render() {
    return (
      currentLocation === 'players'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
                Player Search
            </Card.Header>
            <Card.Description>
                View the profile of another player.
            </Card.Description>
          </Card.Content>
        </Card>
        :
        <Card
          className="nav-card"
          as={Link}
          to='/players'
          raised
          style={{ border: 'solid 3px #71f79f' }}
        >
          <Card.Content  className="nav-card-content">
            <Card.Header>
              Player Search
          </Card.Header>
            <Card.Description>
            View the profile of another player.
          </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class NavLinks extends Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={4}>
          <ProfileCard />
          <LfgCard />
          <FireteamsCard />
          <PlayerCard />
        </Card.Group>
      </div>
    )
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Modal basic trigger={
          <Icon.Group size='big'>
            <Icon loading size='huge' name='sun' inverted color='yellow'/>
            <Icon className='header-button' link name='world' />
          </Icon.Group>
          } 
          closeIcon 
          dimmer={'blurring'}
          >
          <Header icon='location arrow' content='Orbit' />
          <Modal.Content>
            <NavLinks />
          </Modal.Content>
          <Modal.Actions style={{textAlign: 'center' }}>
            <Button as={Link} to='/'  color='teal' inverted>
              <Icon name='home' /> Home
            </Button>
          </Modal.Actions>
        </Modal>
        {this.props.children}
      </div>
    )
  }
}

export default HeaderComponent;
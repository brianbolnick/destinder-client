import React, { Component } from "react";
import {
  Button, Header, Icon, Modal, Card, Grid
} from "semantic-ui-react";
import '../css/Content.css';
import { Link } from "react-router-dom";

let currentLocation = window.location.pathname.split("/")[1] || "/";

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
          <Card.Content className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
              Profile
                </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
          style={{ border: 'solid 3px #47D5CF' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              Profile
          </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
      this.props.currentLocation === 'lfg'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
              LFG Boards
            </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
          style={{ border: 'solid 3px #47D5CF' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              LFG Boards
          </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
      this.props.currentLocation === 'fireteams'
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
            <Card.Description className='hide-on-mobile'>
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
          style={{ border: 'solid 3px #47D5CF' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              Fireteam Search
          </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
      this.props.currentLocation === 'players'
        ?
        <Card
          className="nav-card"
          raised
          style={{ border: 'solid 3px #212121' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              <Icon name='marker' />
              Player Search
            </Card.Header>
            <Card.Description className='hide-on-mobile'>
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
          style={{ border: 'solid 3px #47D5CF' }}
        >
          <Card.Content className="nav-card-content">
            <Card.Header>
              Player Search
          </Card.Header>
            <Card.Description className='hide-on-mobile'>
              View the profile of another player.
          </Card.Description>
          </Card.Content>
        </Card>
    )
  }
}

class NavLinks extends Component {
  state = { currentLocation: window.location.pathname.split("/")[1] || "/" };

  componentWillMount() {
    this.setState({ currentLocation: window.location.pathname.split("/")[1] || "/" })
  }

  render() {
    return (
      <div>
        <Grid >
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <ProfileCard currentLocation={this.state.currentLocation} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <LfgCard currentLocation={this.state.currentLocation} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <FireteamsCard currentLocation={this.state.currentLocation} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <PlayerCard currentLocation={this.state.currentLocation} />
          </Grid.Column>
        </Grid>
        {/* <Card.Group itemsPerRow={4}>
          <ProfileCard currentLocation={this.state.currentLocation} />
          <LfgCard currentLocation={this.state.currentLocation} />
          <FireteamsCard currentLocation={this.state.currentLocation} />
          <PlayerCard currentLocation={this.state.currentLocation} />
        </Card.Group> */}
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
              <Icon loading size='huge' name='sun' inverted color='yellow' />
              <Icon className='header-button' link name='world' />
            </Icon.Group>
            }
            closeIcon            
          >
            <Header style={{color: '#f5f5f5' }} icon='location arrow' content='Orbit' />
            <Modal.Content style={{textAlign: '-webkit-center'}}>
              <NavLinks />
            </Modal.Content>
            <Modal.Actions style={{ textAlign: 'center' }}>
              <Button className='hide-on-mobile' floated='left' basic inverted onClick={() => { window.location.replace('"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2"') }} >
                <Icon name='paypal' /> Help Run the site, donate now!
              </Button>
              <Button floated='right' as={Link} to='/' color='teal' inverted>
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

import React, { Component } from "react";
import { Container, Menu, Icon, Image, Grid, Card, Button, Dropdown, Modal, Divider, Header, Segment } from "semantic-ui-react";
import "../css/HomePage.css";
import Parallax from "react-springy-parallax";
import { Link } from "react-router-dom";
import Logo from "../img/logo-with-title-word-black.png";
import NoTextLogo from "../img/logo-no-text-white.png";
import LfgIcon from '../img/lfg-icon.png';
import { FaqContent, BadgeContent } from './ModalContent';
import { API_URL } from '../tools/api-config';
import axios from 'axios';
import { jwt } from '../tools/jwt';
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

const FaqButton = () => {
  return (
    <Modal closeIcon trigger={<span className="home-nav-link">FAQ</span>}>
      <Modal.Header>faq</Modal.Header>
      <FaqContent />
    </Modal>
  )
}

const BadgeInfo = () => {
  return (
    <Modal closeIcon trigger={<span className="home-nav-link">Badges</span>}>
      <Modal.Header>Badge-o-Graphy</Modal.Header>
      <BadgeContent />
    </Modal>
  )
}

class LoginButton extends Component {
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

  onLogoutClick() {
    axios.post(`${API_URL}/v1/users/${jwt.user_id}/logout`,
      null,
      config
    )
      .then(response => {
        localStorage.getItem('jwt')
        localStorage.removeItem('jwt');
        localStorage.removeItem('auth_token');
        console.log('logging out');
        window.location.replace('/');
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    return (
      this.isLoggedIn()
        ?
        <Dropdown
          trigger={
            <span style={{ letterSpacing: '1.1px', fontSize: '1.1em' }}>
              {jwt.display_name}
              <Image
                avatar
                src={jwt.profile_picture}
              />{" "}

            </span>
          }
          pointing="top left"
          icon={null}
          style={{ color: "#f5f5f5", lineHeight: '2' }}
        >
          <Dropdown.Menu>
            <Modal closeIcon trigger={<Dropdown.Item className='hide-on-med-and-up'>FAQ</Dropdown.Item>}>
              <Modal.Header>FAQ</Modal.Header>
              <FaqContent />
            </Modal>
            <Modal closeIcon trigger={<Dropdown.Item className='hide-on-med-and-up'>Badges</Dropdown.Item>}>
              <Modal.Header>Badge-o-Graphy</Modal.Header>
              <BadgeContent />
            </Modal>
            <Dropdown.Item as={Link} to='/discord' >Discord</Dropdown.Item>
            <Dropdown.Item onClick={() => this.onLogoutClick()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        :
        <Button basic inverted color='teal' animated as='a' href={`${API_URL}/login`}>
          <Button.Content style={{ color: '#f5f5f5' }} visible>Login</Button.Content>
          <Button.Content style={{ color: '#f5f5f5' }} hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>

    )
  }
}

class HomeNav extends Component {
  render() {
    return (
      <Menu text>
        <Menu.Item header>
          <Image src={Logo} size="small" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item link className='hide-on-mobile'>
            <BadgeInfo />
          </Menu.Item>
          <Menu.Item link className='hide-on-mobile'>
            <FaqButton />
          </Menu.Item>
          <Menu.Item link href='//discord.gg/wgCEXZr' target='_blank' className='hide-on-mobile'>
            <span className="home-nav-link">Discord</span>  
          </Menu.Item>
          <Menu.Item >
            <div>
              <LoginButton />
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

class HomeFirst extends Component {

  state = { showIntro: false };

  componentWillMount() {
    const showIntro = localStorage.getItem('showIntro');
    if (showIntro === null) {
      localStorage.setItem('showIntro', true);
      this.setState({ showIntro: true })
    } else if (showIntro === false) {
      this.setState({ showIntro: false })
    }

  }

  handleDismissClick() {
    console.log(this.state);
    localStorage.setItem('showIntro', false);
    this.setState({ showIntro: false })
    console.log(this.state)
  }

  render() {
    return (
      <Container className="home-first-container" style={{ width: '90%' }}>
        <HomeNav />
        <Modal basic size='small' open={this.state.showIntro}>
          <Modal.Header style={{ fontSize: '1.7em', color: '#FDD66F' }}>
            Welcome to Destinder!
          </Modal.Header>
          <Modal.Content style={{ color: '#f5f5f5', fontSize: '1.3em' }}>
            <p>We're working on rebuilding the site, so some features are still under construction.</p>
            <Divider />
            <p>We appreciate your patience as we're working to get everything up to date!
              Be sure to follow us on social media to get important updates on our progress: </p>
            <div style={{ textAlign: 'center' }}>
              <Icon name='twitter' size='large' link onClick={() => { window.location.replace('https://twitter.com/Destinderdotcom') }} />
              <Icon name='instagram' size='large' link onClick={() => { window.location.replace('https://www.instagram.com/destinderdotcom/') }} />
              <Icon name='reddit' size='large' link onClick={() => { window.location.replace('https://www.reddit.com/r/destinder/') }} />
              <Icon name='simplybuilt' flipped='vertically' size='large' link onClick={() => { window.location.replace('https://discord.gg/wgCEXZr') }} />
            </div>

          </Modal.Content>
          <Modal.Actions>
            <Button floated='left' as={Link} basic inverted to='/donate' >
              <Icon name='paypal' /> Help run the site, donate now!
            </Button>
            <Button floated='right' inverted basic color='teal' onClick={this.handleDismissClick.bind(this)} >
              <Icon name='checkmark' /> Don't show again
            </Button>
          </Modal.Actions>
        </Modal>

        <Grid columns={2} className="home-columns">
          <Grid.Row className='row1'>
            <Grid.Column mobile={8} computer={3}>
              <Card
                as={Link}
                to="/profile"
                className="home-tile-card"

              >
                <div className="home-tile-content">
                  <div className="home-tile-icon">
                    {/* <Icon name="user outline" size="massive" />    */}
                    <Image src="https://www.bungie.net/img/theme/destiny/icons/game_modes/free_roam.png" centered size='tiny' className='home-profile-icon' />
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      Profile
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column mobile={8} computer={3}>
              <Card
                as={Link}
                to="/lfg"
                className="home-tile-card row2-1"

              >
                <div className="home-tile-content">
                  <div className="home-tile-icon">
                    {/* <Icon name="comment outline" size="massive" style={{marginTop: '12px'}}/> */}
                    <Image src={LfgIcon} centered size='tiny' className='home-lfg-icon' />
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      LFG
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='row2'>
            <Grid.Column mobile={8} computer={3}>
              <Card
                as={Link}
                to="/fireteams"
                className="home-tile-card row2-2"

              >
                <div className="home-tile-content row2">
                  <div className="home-tile-icon">
                    <Icon.Group size="massive">
                      {/* <Icon name="users" /> */}
                      {/* <Image src={TrialsIcon} style={{marginTop: '20px'}}/> */}
                      <Image src="https://www.bungie.net/img/theme/destiny/icons/game_modes/trials_of_the_nine.png" centered size='tiny' className='home-fireteams-icon' />
                      {/* <Icon corner color='grey' name='search' /> */}
                    </Icon.Group>
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      Fireteams
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={8} computer={3}>
              <Card
                as={Link}
                to="/clans"
                className="home-tile-card"

              >
                <div className="home-tile-content row2">
                  <div className="home-tile-icon">
                    {/* <Icon name="search" size="massive" /> */}
                    {/* <Image src={ClansIcon} centered size='tiny' style={{width: '100px'}}/> */}
                    <Image src="https://www.bungie.net/img/theme/destiny/icons/game_modes/crucible_control.png" centered size='tiny' className='home-clans-icon' />
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      Clans
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1}>
          <Grid.Row className="home-scroll-button">
            <Grid.Column width={16}>
              <div style={{ textAlign: "center" }}>
                <Icon
                  name="angle down"
                  size="huge"
                  className="scroll-icon fa-pulse"
                  onClick={this.props.scrollClick}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

class HomeSecond extends Component {
  render() {
    return (
      <Container style={{ padding: "2%", minHeight: '90vh' }}>
        <div>
          <Header as='h1'>
            <Image verticalAlign='middle' src={NoTextLogo} />
            <Header.Content style={{ color: '#f5f5f5' }}>
              LEADERBOARDS
                <Header.Subheader style={{ color: '#d8d8d8' }}>
                Destinder Tracked Stat Leaderboards
                </Header.Subheader>
            </Header.Content>
          </Header>
        </div>
        <br />
        <br />

        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={16}>
              <div style={{ textAlign: "center", height: '60vh' }}>
                {/* <AnnouncementCard /> */}
                <Segment inverted padded='very' fluid textAlign='center' size='massive' style={{bordeBottom: 'solid 1px #47D5CF'}}>
                  We'll have some leaderboards of all the stats we track coming soon!
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={16}>
              <div style={{ textAlign: "right" }}>
                <Icon
                  name="angle up"
                  size="huge"
                  className="scroll-icon fa-pulse"
                  onClick={this.props.scrollClick}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

class HomeLayout extends Component {
  render() {

    // const secondStyle = {
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   backgroundImage:
    //     'url("https://www.toptal.com/designers/subtlepatterns/patterns/binding_dark.png")',
    //   backgroundSize: "auto",
    //   backgroundRepeat: "inherit",
    //   color: "white"
    // };

    const secondStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        'linear-gradient(rgb(35, 37, 38), rgb(65, 67, 69))',
      backgroundSize: "auto",
      backgroundRepeat: "inherit",
      color: "white"
    };

    const homeStyle = {
      background:
        'linear-gradient(rgb(35, 37, 38), rgb(65, 67, 69))',
      backgroundSize: "auto",
      backgroundRepeat: "inherit"
    };
    // const homeStyle = {
    //   backgroundImage:
    //     'url("https://www.toptal.com/designers/subtlepatterns/patterns/binding_dark.png")',
    //   backgroundSize: "auto",
    //   backgroundRepeat: "inherit"
    // };
    return (
      <Parallax ref="parallax" pages={2} style={homeStyle} scrolling={false}>
        <Parallax.Layer offset={0} speed={0.5} className='first-layer-home'>
          <HomeFirst scrollClick={() => this.refs.parallax.scrollTo(1)} />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={2} style={secondStyle}>
          <HomeSecond scrollClick={() => this.refs.parallax.scrollTo(0)} />
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default HomeLayout;

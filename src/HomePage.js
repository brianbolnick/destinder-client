import React, { Component } from "react";
import { Container, Menu, Icon, Image, Grid, Card } from "semantic-ui-react";
// import Typed from 'typed.js';
import "./App.css";
import "./HomePage.css";
import Parallax from "react-springy-parallax";
import { Link } from "react-router-dom";

import Arcstrider from "./img/arcstrider.png";
import Logo from "./img/logo-with-title-word-black.png";
import AnnouncementLogo from "./img/announce-with-title-word-white.png";
import AnnouncementTable from './AnnouncementTable.js';
import AnnouncementCard from './AnnouncementCard.js'


// class TypedHeader extends React.Component {
//   componentDidMount() {
//     // You can pass other options here, such as typing speed, back speed, etc.
//     const options = {
//       strings: ['elite', "winners", "salty", "complainers", "ragers", "try hards", "losers", "good looking", "masses"],
//       loop: true,
//       startDelay: 2000,
//       backDelay: 1000,
//       typeSpeed: 70,
//       showCursor: true,
//       cursorChar: "|",
//       shuffle: true
//     };
//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//     // Make sure to destroy Typed instance on unmounting
//     // to prevent memory leaks
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <span ref={(el) => { this.el = el; }} />
//     );
//   }
// }

class HomeFirst extends Component {
  render() {
    return (
      <Container className="home-first-container">
        {/* TODO: Create a separate component for this nav menu */}
        <Menu text>
          <Menu.Item header>
            <Image src={Logo} size="small" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <div>
                <Image
                  src="https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg"
                  avatar
                />
                <span style={{ color: "#f5f5f5", fontWeight: "300" }}>
                  Luminusss
                </span>
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

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
                    <Icon name="user outline" size="massive" />
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
                to="/fireteams"
                className="home-tile-card row2-1"
                
              >
                <div className="home-tile-content">
                  <div className="home-tile-icon">
                    <Icon name="comments" size="massive" />
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
                to="/team-search"
                className="home-tile-card row2-2"
                
              >
                <div className="home-tile-content row2">
                  <div className="home-tile-icon">
                    <Icon.Group size="massive">
                      <Icon name="users" />
                      {/* <Icon corner color='grey' name='search' /> */}
                    </Icon.Group>
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      Team Search
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={8} computer={3}>
              <Card
                as={Link}
                to="/player-search"
                className="home-tile-card"
               
              >
                <div className="home-tile-content row2">
                  <div className="home-tile-icon">
                    <Icon name="search" size="massive" />
                  </div>
                  <Card.Content style={{ borderTop: "none" }}>
                    <Card.Header className="home-tile-text-header">
                      Player Search
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1}>
          <Grid.Row>
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
      <Container style={{ height: "90vh" }}>
        <div>
          <Image src={AnnouncementLogo} size="large" />
          {/* <p>LFG for the <span><TypedHeader/></span></p> */}
        </div>
      <br />
      <br />

        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={4}>
              <div style={{ textAlign: "right" }}>
                <AnnouncementCard />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>


        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={16}>
              <div style={{ textAlign: "center" }}>
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
    const firstStyle = {
      backgroundImage: `url(${Arcstrider})`,
      backgroundSize: "cover"
    };
    const secondStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage:
        'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: "auto",
      backgroundRepeat: "inherit",
      color: "white"
    };

    const homeStyle = {
      backgroundImage:
        'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: "auto",
      backgroundRepeat: "inherit"
    };
    return (
      <Parallax ref="parallax" pages={2} style={homeStyle}>
        {/* <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: `url(${Voidwalker})`, backgroundSize: 'cover' }} />
            <Parallax.Layer offset={1} speed={1} style={{ backgroundImage: `url(${Striker})`, backgroundSize: 'cover' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundImage: `url(${Dawnblade})`, backgroundSize: 'cover' }} /> */}

        <Parallax.Layer offset={0} speed={0.5} className='first-layer-home'>
          <HomeFirst scrollClick={() => this.refs.parallax.scrollTo(2)} />
        </Parallax.Layer>

        <Parallax.Layer offset={1} speed={2} style={secondStyle}>
          <HomeSecond scrollClick={() => this.refs.parallax.scrollTo(0)} />
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default HomeLayout;

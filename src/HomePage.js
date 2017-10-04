import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon, Image, List, Transition, Label, Header, Grid, Card } from 'semantic-ui-react';
import Typed from 'typed.js';
import './App.css';
import './HomePage.css';
import Layout from './Layout.js'
import Fireteams from './FireteamsPage.js';
import Profile from './ProfilePage.js';
import Parallax from 'react-springy-parallax';
import { AnimatedRoute } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom';

import Arcstrider from './img/arcstrider.png';
import Sentinel from './img/sentinel.png';
import Dawnblade from './img/dawnblade.png';
import Gunslinger from './img/gunslinger.png';
import Voidwalker from './img/voidwalker.png';
import Striker from './img/striker.png';
import Logo from './img/logo-with-title-word-black.png';



class TypedReactDemo extends React.Component {
  componentDidMount() {
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ['elite', "winners", "salty", "complainers", "ragers", "try hards", "losers", "good looking", "masses"],
      loop: true,
      startDelay: 2000,
      backDelay: 1000,
      typeSpeed: 70,
      showCursor: true,
      cursorChar: "|",
      shuffle: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span ref={(el) => { this.el = el; }} />
    );
  }
}

// class NavMenu extends Component {
//     state = { activeItem: 'closest' }

//  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//  render() {
//    const { activeItem } = this.state

//    return (
//      <Menu text>
//        <Menu.Item header>Sort By</Menu.Item>
//        <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//        <Menu.Item as={Link} to='/fireteams' name='LFG' active={activeItem === 'LFG'} onClick={this.handleItemClick} />
//        <Menu.Item as={Link} to='/profile' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />        
//      </Menu>
//    )
//  }
// }

class HomeTemp extends Component {
  render() {

    const images = Array(Arcstrider, Dawnblade, Sentinel, Gunslinger, Voidwalker, Striker);
    var image = images[Math.floor(Math.random() * images.length)];
    // var image = Voidwalker;

    const backgroundStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover'
    }
    return (
      <div className="home-page" style={backgroundStyle}>
        <Container>
          {/* <Header as='h2'>Welcome to Destinder! </Header>
              <p>LFG for the <span><TypedReactDemo/></span></p> */}
          <Menu text>
            <Menu.Item header><Image src={Logo} size='small' /></Menu.Item>
            <Menu.Menu position='right'>

              <Menu.Item>
                <div>
                  <Image src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' avatar />
                  <span>Luminusss</span>
                </div>
              </Menu.Item>
            </Menu.Menu>
            {/* <Menu.Item as={Link} to='/' name='home'  />
                <Menu.Item as={Link} to='/fireteams' name='LFG' />
                <Menu.Item as={Link} to='/profile' name='profile'  />         */}
          </Menu>

          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card as={Link} to='/profile' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                  <div className='home-tile-content' >
                    <div className='home-tile-icon'>
                      <Icon name='user outline' size='massive' />
                    </div>
                    <Card.Content style={{ borderTop: 'none' }}>
                      <Card.Header className='home-tile-text-header'>
                        Profile
                          </Card.Header>
                      {/* <Card.Description className='home-tile-text-body'>
                            Find players or teams to play with.
                          </Card.Description> */}
                    </Card.Content>
                    {/* <Card.Content>
                          <div className='home-tile-text'>
                            <Icon name='user' size='huge' className="home-tile-icon"/>
                            PROFILE
                          </div>
                        </Card.Content > */}
                  </div>
                </Card>
              </Grid.Column>

              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card as={Link} to='/fireteams' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                  <div className='home-tile-content' >
                    <div className='home-tile-icon'>
                      <Icon name='comments' size='massive' />
                    </div>
                    <Card.Content style={{ borderTop: 'none' }}>
                      <Card.Header className='home-tile-text-header'>
                        LFG
                          </Card.Header>
                      {/* <Card.Description className='home-tile-text-body'>
                            Find players or teams to play with.
                          </Card.Description> */}
                    </Card.Content>
                    {/* <Card.Content>
                          <div className='home-tile-text'>
                            <Icon name='user' size='huge' className="home-tile-icon"/>
                            PROFILE
                          </div>
                        </Card.Content > */}
                  </div>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card as={Link} to='/team-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                  <div className='home-tile-content' >
                    <div className='home-tile-icon'>
                      <Icon name='users' size='massive' />
                    </div>
                    <Card.Content style={{ borderTop: 'none' }}>
                      <Card.Header className='home-tile-text-header'>
                        Team Search
                        </Card.Header>
                      {/* <Card.Description className='home-tile-text-body'>
                          Find players or teams to play with.
                        </Card.Description> */}
                    </Card.Content>
                    {/* <Card.Content>
                        <div className='home-tile-text'>
                          <Icon name='user' size='huge' className="home-tile-icon"/>
                          PROFILE
                        </div>
                      </Card.Content > */}
                  </div>
                </Card>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <Card as={Link} to='/player-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                  <div className='home-tile-content' >
                    <div className='home-tile-icon'>
                      <Icon name='search' size='massive' />
                    </div>
                    <Card.Content style={{ borderTop: 'none' }}>
                      <Card.Header className='home-tile-text-header'>
                        Player Search
                          </Card.Header>
                      {/* <Card.Description className='home-tile-text-body'>
                            Find players or teams to play with.
                          </Card.Description> */}
                    </Card.Content>
                    {/* <Card.Content>
                          <div className='home-tile-text'>
                            <Icon name='user' size='huge' className="home-tile-icon"/>
                            PROFILE
                          </div>
                        </Card.Content > */}
                  </div>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {/* <Card.Group itemsPerRow={1}>
                <Card as={Link} to='/'>
                  <Card.Content>
                    <Icon name='home' size='huge' />
                  </Card.Content >
                </Card>
                <Card as={Link} to='/fireteams'>
                  <Card.Content>
                    <Icon name='comments' size='huge' />
                  </Card.Content >
                </Card>
                <Card as={Link} to='/profile'>
                  <Card.Content>
                    <Icon name='users' size='huge' />
                  </Card.Content >
                </Card>
              </Card.Group> */}
        </Container>
      </div>
    );
  }
}


class HomeFirst extends Component {
  render() {
    return (
      <Container>
        {/* <Header as='h2'>Welcome to Destinder! </Header>
        <p>LFG for the <span><TypedReactDemo/></span></p> */}
        {/* <Menu text>
          <Menu.Item header><Image src={Logo} size='small' /></Menu.Item>
          <Menu.Menu position='right'>

            <Menu.Item>
              <div>
                <Image src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' avatar />
                <span>Luminusss</span>
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu> */}

        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column mobile={8} computer={4}>
              <Card as={Link} to='/profile' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='user outline' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Profile
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column mobile={8} computer={4}>
              <Card as={Link} to='/fireteams' className="home-tile-card row2-1" style={{ marginTop: '15%', marginBottom: '15%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='comments' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      LFG
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={8} computer={4}>
              <Card as={Link} to='/team-search' className="home-tile-card row2-2" style={{ marginTop: '8%' }}>
                <div className='home-tile-content row2' >
                  <div className='home-tile-icon'>
                    <Icon name='users' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Team Search
                  </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={8} computer={4}>
              <Card as={Link} to='/player-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                <div className='home-tile-content row2' >
                  <div className='home-tile-icon'>
                    <Icon name='search' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Player Search
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    )
  }
}

class HomeSecond extends Component {
  render() {
    return (
      <Container>
        <Header as='h2'>ANNOUNCEMENTS</Header>
        <p>LFG for the <span><TypedReactDemo/></span></p>
        {/* <Menu text>
          <Menu.Item header><Image src={Logo} size='small' /></Menu.Item>
          <Menu.Menu position='right'>

            <Menu.Item>
              <div>
                <Image src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' avatar />
                <span>Luminusss</span>
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu> */}

        {/* <Grid columns={2}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card as={Link} to='/profile' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='user outline' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Profile
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card as={Link} to='/fireteams' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='comments' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      LFG
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card as={Link} to='/team-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='users' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Team Search
                  </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card as={Link} to='/player-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                <div className='home-tile-content' >
                  <div className='home-tile-icon'>
                    <Icon name='search' size='massive' />
                  </div>
                  <Card.Content style={{ borderTop: 'none' }}>
                    <Card.Header className='home-tile-text-header'>
                      Player Search
                    </Card.Header>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Container>
    )
  }
}

class HomeLayout extends Component {
  render() {
    const firstStyle = {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `url(${Arcstrider})`,
      backgroundSize: 'cover'
    }
    const secondStyle = {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: 'auto',
      backgroundRepeat: 'inherit',
      color: 'white'
    }

    const homeStyle = {
      backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: 'auto',
      backgroundRepeat: 'inherit',
    }
    return (
      <Parallax ref="parallax" pages={2} style={homeStyle}>

        {/* <Parallax.Layer offset={0} speed={1} style={{ backgroundImage: `url(${Voidwalker})`, backgroundSize: 'cover' }} />
            <Parallax.Layer offset={1} speed={1} style={{ backgroundImage: `url(${Striker})`, backgroundSize: 'cover' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundImage: `url(${Dawnblade})`, backgroundSize: 'cover' }} /> */}

        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={firstStyle}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          <HomeFirst />
          
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0}
          style={secondStyle}
        >
          <HomeSecond />
        </Parallax.Layer>


      </Parallax>
    )
  }

}

class HomeOld extends Component {
  render() {
    return (
      // <div className="home-page">
      //     <Container>
      //         <Header as='h2'>Welcome to Destinder! </Header>
      //         <p>LFG for the <span><TypedReactDemo/></span></p>
      //     </Container>
      // </div>
      <Segment basic>
        <Container fluid >
          <Route exact path="/" component={HomeLayout} />
          <AnimatedRoute
            path="/fireteams"
            component={Fireteams}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
          />
          <AnimatedRoute
            path="/profile"
            component={Profile}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
          />
          <Route path='/donate' component={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2'} />
        </Container>
      </Segment>
    );
  }
}



export default HomeLayout;





import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon, Image, List, Transition, Label, Header, Grid, Card } from 'semantic-ui-react'
import Typed from 'typed.js';
import './App.css';
import './HomePage.css';
import Layout from './Layout.js'
import Fireteams from './FireteamsPage.js';
import Profile from './ProfilePage.js';
import { AnimatedRoute } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'

import Arcstrider from './img/arcstrider.jpg'
import Sentinel from './img/sentinel.jpg'
import Dawnblade from './img/dawnblade.jpg'
import Gunslinger from './img/gunslinger.jpg'
import Voidwalker from './img/voidwalker.jpg'
import Striker from './img/striker.jpg'



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
      <span ref={(el) => { this.el = el; }}/>
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

class Home extends Component {
  render() {

    const images = Array(Arcstrider, Dawnblade, Sentinel, Gunslinger, Voidwalker, Striker);
    var image = images[Math.floor(Math.random()*images.length)];
    // var image = './img/arcstrider.jpg';

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
                <Menu.Item header>Sort By</Menu.Item>
                <Menu.Item as={Link} to='/' name='home'  />
                <Menu.Item as={Link} to='/fireteams' name='LFG' />
                <Menu.Item as={Link} to='/profile' name='profile'  />        
              </Menu>

              <Grid columns={1} divided>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Card as={Link} to='/'  style={{marginBottom: '15%', marginTop: '15%'}}>
                      <Card.Content>
                        <Icon name='home' size='huge' className="home-tile-icon"/>
                      </Card.Content >
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Card as={Link} to='/fireteams'  style={{marginBottom: '15%'}}>
                      <Card.Content>
                        <Icon name='comments' size='huge' className="home-tile-icon"/>
                      </Card.Content >
                    </Card>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Card as={Link} to='/profile' >
                      <Card.Content>
                        <Icon name='users' size='huge' className="home-tile-icon"/>
                      </Card.Content >
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
            <Route exact path="/" component={Home} />
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


  
export default Home;





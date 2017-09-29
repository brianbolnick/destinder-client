import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon, Header  } from 'semantic-ui-react'
import './App.css';
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class SidebarLeftPush extends Component {
  state = { visible: false }
  

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  
  
  render() {
    // var typed = new Typed('home-subtitle', {
    //   strings: ['elite', "winners", "salty", "complainers", "ragers", "try hards", "losers", "good looking", "masses"],
    //   loop: true,
    //   startDelay: 2000,
    //   backDelay: 1000,
    //   typeSpeed: 70,
    //   showCursor: true,
    //   cursorChar: "|",
    //   shuffle: true
    // });


    const { visible } = this.state
    return (
      <Router>
        <div>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Menu.Item as={Link} to='/' name='home'>                
                <Icon name='home' />
                Home                
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='gamepad'>
                  <Icon name='gamepad' />
                  LFG
              </Menu.Item>
              <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Container fluid>
                  <Button floated='left' onClick={this.toggleVisibility} circular icon='sidebar' className="menu-icon"/>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/fireteams" component={FireteamsPage}/>
                </Container>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <SidebarLeftPush />
      </div>
    );
  }
}

export default App;

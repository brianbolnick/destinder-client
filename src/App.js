import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon  } from 'semantic-ui-react'
import './App.css';
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class SidebarHeader extends Component {
  state = { visible: true }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    const { visible } = this.state
    return (
      <Router>
        <div>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted compact>
              <Menu.Item as={Link} to='/' name='home'>                
                <Icon name='home' />
                Home                
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='user'>
                  <Icon name='user' />
                  Profile
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='comments'>
                  <Icon name='comments' />
                  LFG
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='group'>
                  <Icon name='group' />
                  Team Search
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='paypal'>
                  <Icon name='paypal' />
                  Donate
              </Menu.Item>
              <Menu.Item as={Link} to='/fireteams' name='question circle outline'>
                  <Icon name='question circle outline' />
                  FAQ
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
          <SidebarHeader />
      </div>
    );
  }
}

export default App;

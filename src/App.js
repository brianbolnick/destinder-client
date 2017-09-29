import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header  } from 'semantic-ui-react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <Header as='h2'>Welcome to Destinder! </Header>
    <p>There's not much here yet, check back soon!</p>
  </div>
)
const Fireteams = () => (
  <div>
    <Header as='h2'>LFG!</Header>
    <p>This is where all of the posts will be.</p>
  </div>
)


class SidebarLeftPush extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
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
                  <Route exact path="/" component={Home}/>
                  <Route path="/fireteams" component={Fireteams}/>
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

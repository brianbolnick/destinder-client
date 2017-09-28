import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Sidebar, Segment, Button, Menu, Image, Icon, Header  } from 'semantic-ui-react'
import './App.css';

class SidebarLeftPush extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
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
                <Header as='h2'>Welcome to Destinder! </Header>
                <p>There's not much here yet, check back soon!</p>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      
      </div>
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

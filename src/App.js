import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Header } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Container text>
              <Header as='h2'>Welcome to Destinder! </Header>
              <p>There's not much here yet, check back soon!</p>
          </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Container, Header  } from 'semantic-ui-react'
import Typed from 'typed.js';
import './App.css';
import './HomePage.css';


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
  

class HomePage extends Component {
    render() {

      // const homeSubtitleStyle = {
      //   fontWeight: '200'
      // }

      // const noMarginStyle ={
      //   margin: '0'
      // }

      // const logoStlye ={
      //   width: '90%',
      //   margin: '10px 10px 0px 10px'
      // }

      // const heroHeightStyle = {
      //   height: '150px'
      // }

      return (
        <div className="home-page">
            <Container>
                <Header as='h2'>Welcome to Destinder! </Header>
                <p>LFG for the <span><TypedReactDemo/></span></p>
            </Container>
        </div>
      );
    }
  }
  
  export default HomePage;





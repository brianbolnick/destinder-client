import React, { Component } from 'react';
import './App.css';
import Home from './HomePage.js';
import Fireteams from './FireteamsPage.js';
import Profile from './ProfilePage.js';
import NotFound from './NotFound.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, withRouter, Switch } from 'react-router-dom';


const App = ({ location }) => {
  
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 300, exit: 200 };
  return (

      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/fireteams" component={Fireteams} />
            <Route path="/profile" component={Profile} />
            <Route path='/donate' component={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2'} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    
  )
}

export default withRouter(App)

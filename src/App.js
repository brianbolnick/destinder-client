import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon, Image, List, Transition, Label, Header } from 'semantic-ui-react'
import './App.css';
import Layout from './Layout.js'
import Home from './HomePage.js';
import Fireteams from './FireteamsPage.js';
import Profile from './ProfilePage.js';
import NotFound from './NotFound.js';
import { AnimatedRoute } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'



const Content = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 1500, exit: 1500 }
  console.log(currentKey);
  
  return (
      // <PageContent />
      <Segment basic className="content-page">
        <Header as='h1'> THIS IS A TEST! </Header>
        <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
          <Menu.Item as={Link} to='/' name='home'  />
          <Menu.Item as={Link} to='/fireteams' name='LFG' />
          <Menu.Item as={Link} to='/profile' name='profile'  />        
        </Menu>
        <TransitionGroup component="main" className="page-main">
          <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
            <section className="page-main-inner">
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/fireteams" component={Fireteams} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup> 
      </Segment>
  )
}


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const App = ({ location }) => {
  
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 1500, exit: 1500 };
  return (

    // <Segment basic style= {{padding: '0'}}>
    //   <Container fluid >
    //       <Route exact path="/" component={Home} />
    //       <Route path="/fireteams" component={Content}/>
    //       <Route path="/profile" component={Profile}/>
    //       <Route path='/donate' component={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2'} />

    //       {/* <AnimatedRoute
    //           exact 
    //           path="/"
    //           component={Home}
    //           atEnter={{ offset: -100 }}
    //           atLeave={{ offset: -100 }}
    //           atActive={{ offset: 0 }}
    //           mapStyles={(styles) => ({
    //               transform: `translateX(${styles.offset}%)`,
    //           })}
    //       /> */}
    //       {/* <AnimatedRoute
    //           path="/fireteams"
    //           component={Content}
    //           atEnter={{ offset: -100 }}
    //           atLeave={{ offset: -100 }}
    //           atActive={{ offset: 0 }}
    //           mapStyles={(styles) => ({
    //               transform: `translateX(${styles.offset}%)`,
    //           })}
    //       /> */}
    //       {/* <AnimatedRoute
    //           path="/profile"
    //           component={Profile}
    //           atEnter={{ offset: -100 }}
    //           atLeave={{ offset: -100 }}
    //           atActive={{ offset: 0 }}
    //           mapStyles={(styles) => ({
    //               transform: `translateX(${styles.offset}%)`,
    //           })}
    //       /> */}
    //   </Container>
    // </Segment>

    // <div>
    //   {/* <Header /> */}
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/fireteams" component={Content}/>
    //     <Route path="/profile" component={Profile}/>
    //     {/* <Route path='/users/:userId' render={ ({match})=> <User id={match.params.userId}/>} /> */}
    //     <Route path='/donate' component={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2'} />
    //     <Route component={NotFound} />
    //   </Switch>
    // </div>

    <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <Segment basic style= {{padding: '0'}}>
          <Container fluid >     
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/fireteams" component={Fireteams} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Container>
        </Segment>
      </CSSTransition>
    </TransitionGroup> 
  )
}

export default withRouter(App)

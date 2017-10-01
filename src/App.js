import React, { Component } from 'react';
import { Container, Sidebar, Segment, Button, Menu, Icon, Image, List, Transition, Label } from 'semantic-ui-react'
import './App.css';
import Layout from './Layout.js'
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';
import ProfilePage from './ProfilePage.js';
import { AnimatedRoute } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'

const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']

class TransitionExampleGroup extends Component {
  state = { items: users.slice(0, 3) }

  // handleAdd = () => this.setState({ items: users.slice(0, this.state.items.length + 1) })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleVisibility = () => this.setState({ visible: !this.state.visible })

  // handleRemove = () => this.setState({ items: this.state.items.slice(0, -1) })

  render() {
    const { items } = this.state

    return (
      <div>
        {/* <Button.Group>
          <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} />
          <Button disabled={items.length === users.length} icon='plus' onClick={this.handleAdd} />
        </Button.Group> */}

        <Menu.Item as={Link} to='/' name='home'>                
          <Icon name='home' />
          Home                
        </Menu.Item>
        <Menu.Item as={Link} to='/fireteams' name='comments'>                
          <Icon name='comments' />
          LFG               
        </Menu.Item>

        <Transition.Group
          as={Menu}
          duration={1000}
          animation={'fade'}
        >
          <Router>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/fireteams" component={FireteamsPage}/>
          </Router>
        </Transition.Group>
        
      </div>
    )
  }
}

class PageContent extends Component {
  render() {
    
    return (
      <Segment basic>
        <Container fluid >
            {/*  <Button floated='left' onClick={this.toggleVisibility} circular icon='sidebar' className="menu-icon" /> */}
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/test" component={TransitionExampleGroup}/> */}
            {/* <Route path="/fireteams" component={FireteamsPage}/> */}
            {/* <Route path="/profile" component={ProfilePage}/> */}
            {/* <Route path="/fireteams" component={FireteamsPage}/> */}

            <AnimatedRoute
                path="/fireteams"
                component={FireteamsPage}
                atEnter={{ offset: +100 }}
                atLeave={{ offset: +100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                    transform: `translateX(${styles.offset}%)`,
                })}
            />
            <AnimatedRoute
                path="/profile"
                component={ProfilePage}
                atEnter={{ offset: +100 }}
                atLeave={{ offset: +100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                    transform: `translateX(${styles.offset}%)`,
                })}
            />
            <Route path='/donate' component={() => window.location = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2'} />

        </Container>
      </Segment>
    )
  }
}



const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 1500, exit: 1500 }
  
  return (
  	<Layout>
      {/* <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
          <section className="page-main-inner">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/fireteams" component={FireteamsPage} />
              <Route path="/profile" component={ProfilePage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup> */}
      {/* <Transition.Group visible='true' animation='scale' duration={500}>
        <Route path="/" exact component={HomePage} />
        <Route path="/fireteams" component={FireteamsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Transition.Group> */}
      {/* <SidebarHeader /> */}
      <PageContent />

    </Layout>
    
  )
}

export default withRouter(App)

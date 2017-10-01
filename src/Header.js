import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Container, Sidebar, Segment, Button, Menu, Icon, Transition, Label } from 'semantic-ui-react'
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';
import ProfilePage from './ProfilePage.js';
import { AnimatedRoute } from 'react-router-transition';

import {
    Route,
    Link
} from 'react-router-dom'


class SidebarHeader extends Component {
    state = { visible: true }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    render() {
        const { visible } = this.state
        return (

            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted compact>
                        <Menu.Item as={Link} to='/' name='home'>
                            <Icon name='home' />
                            Home
                </Menu.Item>
                        <Menu.Item as={Link} to='/profile' name='user'>
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
                        <Menu.Item as={Link} to='/donate' name='paypal'>
                            <Icon name='paypal' />
                            Donate
                </Menu.Item>
                        <Menu.Item as={Link} to='/test' name='question circle outline'>
                            <Icon name='question circle outline' />
                            FAQ
                </Menu.Item>

                    </Sidebar>
                    <Transition
                        as={Menu}
                        duration={1500}
                        animation='fade'
                    >
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Container fluid>
                                    <Button floated='left' onClick={this.toggleVisibility} circular icon='sidebar' className="menu-icon" />
                                    <Route exact path="/" component={HomePage} />
                                    {/* <Route path="/test" component={TransitionExampleGroup}/> */}
                                    {/* <Route path="/fireteams" component={FireteamsPage}/> */}
                                    {/* <Route path="/profile" component={ProfilePage}/> */}
                                    {/* <Route path="/fireteams" component={FireteamsPage}/> */}
                                    <AnimatedRoute
                                        path="/fireteams"
                                        component={FireteamsPage}
                                        atEnter={{ offset: -100 }}
                                        atLeave={{ offset: -100 }}
                                        atActive={{ offset: 0 }}
                                        mapStyles={(styles) => ({
                                            transform: `translateX(${styles.offset}%)`,
                                        })}
                                    />
                                    <AnimatedRoute
                                        path="/profile"
                                        component={ProfilePage}
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
                        </Sidebar.Pusher>
                    </Transition>
                </Sidebar.Pushable>
            </div>
        )
    }
}

class Header extends Component {
    state = { activeItem: 'gamepad' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const sidebarStyle = {
            padding: '0',
            margin: '0',
            maxWidth: '68px',
            minWidth: '68px'
        }
        return (
            <Segment basic style={sidebarStyle}>
                <Label as='a' color='orange' ribbon='right' style={ {paddingLeft: '3em'}}><Icon name='wrench' /> BETA</Label>
                <Menu icon='labeled' vertical inverted width='very thin' compact >                
                    <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'}>
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to='/profile' name='user' active={activeItem === 'user'}>
                        <Icon name='user' />
                        Profile
                    </Menu.Item>
                    <Menu.Item as={Link} to='/fireteams' name='comments' active={activeItem === 'comments'}>
                        <Icon name='comments' />
                        LFG
                    </Menu.Item>
                    <Menu.Item as={Link} to='/fireteams' name='group' active={activeItem === 'group'}>
                        <Icon name='group' />
                        Team Search
                    </Menu.Item>
                    <Menu.Item as={Link} to='/donate' name='paypal' active={activeItem === 'paypal'}>
                        <Icon name='paypal' />
                        Donate
                    </Menu.Item>
                    <Menu.Item as={Link} to='/test' name='question circle outline' active={activeItem === 'question circle outline'}>
                        <Icon name='question circle outline' />
                        FAQ
                    </Menu.Item>
                </Menu>
            </Segment>
        )
    }
}

export default Header


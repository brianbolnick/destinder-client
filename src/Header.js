import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Transition, Label, Image } from 'semantic-ui-react'
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';
import ProfilePage from './ProfilePage.js';
import { Route, Link } from 'react-router-dom';
import Logo from './img/logo-no-text-white.png';


const Header = ({ children }) => (
    
    <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='slide along' width='very thin' icon='labeled' visible='true' vertical inverted compact>
            
            <Menu.Item name='logo'>
                <Image src={Logo} size='mini'/>
            </Menu.Item>

            <Menu.Item as={Link} to='/' name='home'>
                <Icon name='home' size='large'/>
            </Menu.Item>

            <Menu.Item as={Link} to='/profile' name='user'>
                <Icon name='user outline' size='large'/>
            </Menu.Item>

            <Menu.Item as={Link} to='/fireteams' name='comments'>
                <Icon name='comments' size='large' />
            </Menu.Item>

            <Menu.Item as={Link} to='/player-search' name='group'>
                <Icon name='search' size='large'/>
            </Menu.Item>
            
            <Menu.Item as={Link} to='/team-search' name='group'>
                <Icon name='group' size='large'/>
            </Menu.Item>

            {/* <Menu.Item as={Link} to='/donate' name='paypal'>
                <Icon name='paypal' />
                Donate
            </Menu.Item> */}
        
        </Sidebar>
        <Sidebar.Pusher>
            {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)

export default Header


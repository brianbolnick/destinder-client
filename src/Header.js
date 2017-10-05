import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Transition, Label, Image, Popup, Button, Divider, Container } from 'semantic-ui-react'
import HomePage from './HomePage.js';
import FireteamsPage from './FireteamsPage.js';
import ProfilePage from './ProfilePage.js';
import { Route, Link } from 'react-router-dom';
import Logo from './img/logo-no-text-white.png';

const betaPopupContent = {
    render() {
        return (
            <div>
                Many of these features are still under development, so you may see some bugs!
                <Button animated color='green' >
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

class Header extends Component {
    
    // Only show sidebar on tablets and larger
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth, height: window.innerHeight };
        if (this.state.width >= 320 && this.state.width <= 601) {
            this.state = ({ width: window.innerWidth, height: window.innerHeight, visible: false });
        } else {
            this.state = ({ width: window.innerWidth, height: window.innerHeight, visible: true });
        }  
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        if (this.state.width >= 320 && this.state.width <= 601) {
            this.setState({ width: window.innerWidth, height: window.innerHeight, visible: false });
        } else {
            this.setState({ width: window.innerWidth, height: window.innerHeight, visible: true });
        }  
      }
      
     toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render () {
        const { visible } = this.state
        return (
            <Sidebar.Pushable as={Segment}>                
                <Sidebar as={Menu} animation='slide along' width='very thin' icon='labeled' visible={visible} vertical inverted compact style={{backgroundColor: '#212121'}}>                    
                    {/* <Menu.Item name='logo' >
                        <Image 
                            src={Logo} 
                            size='mini' 
                        />
                    </Menu.Item> */}

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/' name='home'>
                            <Image 
                                src={Logo} 
                                size='mini' 
                            />
                        </Menu.Item>
                        }
                    content='Home'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/profile' name='profile'>
                            <Icon name='user outline' size='large'/>
                        </Menu.Item>
                        }
                    content='Profile'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/fireteams' name='fireteams'>
                            <Icon name='comments' size='large'/>
                        </Menu.Item>
                        }
                    content='LFG Boards'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/player-search' name='search'>
                            <Icon name='search' size='large'/>
                        </Menu.Item>
                        }
                    content='Guardian Search'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/team-search' name='group'>
                            <Icon name='group' size='large'/>
                        </Menu.Item>
                        }
                    content='Team Lookup'
                    position='right center'
                    />


                    {/* <Menu.Item as={Link} to='/donate' name='paypal'>
                        <Icon name='paypal' />
                        Donate
                    </Menu.Item> */}
                    
                    <Popup
                    trigger={<Label attached='bottom' style={{backgroundColor: '#FF3B3D', color: '#f5f5f5'}} >BETA</Label>}
                    header='Heads up!'
                    content={
                        <div>
                            Many of these features are still under development, so you may see some bugs!
                            <Divider />
                            <Button  href="mailto:help@destinder.com" animated style={{backgroundColor: '#5085A5', color: '#f5f5f5' }} >
                                <Button.Content visible>Report an Issue</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='send' />
                                </Button.Content>
                            </Button>
                        </div>
                    }
                    position='right center'
                    hoverable
                    />
                </Sidebar>
                <Sidebar.Pusher>
                    <Button floated='left' onClick={this.toggleVisibility} icon='sidebar' className="menu-icon hide-on-med-and-up" />
                    <Divider className='hide-on-med-and-up header-divider' style={{ marginBottom: '7%' }} hidden/>
                    <Container className='content-container'>
                        {this.props.children}
                    </Container>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

export default Header


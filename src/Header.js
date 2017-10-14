import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Label, Image, Popup, Button, Divider, Container, Dropdown } from 'semantic-ui-react'

import { Link } from 'react-router-dom';
import Logo from './img/logo-no-text.png';
import ArcstriderDark from './img/arcstrider-dark.png';
// import ArcstriderLight from './img/arcstrider-light.png';

 // eslint-disable-next-line
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


const themeStyles = {
    green: {text: "Green", sidebarColor: {backgroundColor: '#272727'} , iconColor: {color: '#f5f5f5'} , headerBackground: {backgroundColor: '#14a76c'} , heartColor: {color: '#D82B30'}, backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`}, labelColor: {color: '#212121', backgroundColor: '#F1C42E'}},
    yellow: {text: "Yellow", sidebarColor: {backgroundColor: '#3A3A3B'} , iconColor: {color: '#c5c6c7'} , headerBackground: {backgroundColor: '#F7B831'}, heartColor: {color: '#D82B30'},  backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`}, labelColor: {color: '#212121', backgroundColor: '#F7B831'}} ,
    red: {text: "Red", sidebarColor: {backgroundColor: '#212121'}, iconColor: {color: '#f5f5f5'}, headerBackground: {backgroundColor: '#E74C3C'}, heartColor: {color: '#E74C3C'},  backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`},labelColor: {color: '#212121', backgroundColor: '#F1C42E'}},
    seaGreen: {text: "Sea Green", sidebarColor: {backgroundColor: '#202933'}, iconColor: {color: '#c5c6c7'}, headerBackground: {backgroundColor: '#49A29D'}, heartColor: {color: '#E74C3C'},  backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`},labelColor: {color: '#212121', backgroundColor: '#F1C42E'}},
    blue: {text: "Blue", sidebarColor: {backgroundColor: '#2f4454'}, iconColor: {color: '#c5c6c7'}, headerBackground: {backgroundColor: '#C5C6C7'}, heartColor: {color: '#ff695e'},  backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`},labelColor: {color: '#212121', backgroundColor: '#F1C42E'}},
    whiteBlack: {text: "Blue", sidebarColor: {backgroundColor: '#f5f5f5'}, iconColor: {color: '#212121'}, headerBackground: {backgroundColor: '#C5C6C7'}, heartColor: {color: '#ff695e'},  backgroundImage: {backgroundImage:  `url(${ArcstriderDark})`},labelColor: {color: '#212121', backgroundColor: '#F1C42E'}}
}

class Header extends Component {

    // Only show sidebar on tablets and larger
    constructor(props) {
        super(props);
        if (localStorage.theme == null) {
            localStorage.setItem('theme', JSON.stringify(themeStyles.red));
        }
        // console.log(localStorage);
        this.state = { width: window.innerWidth, height: window.innerHeight, currentTheme: localStorage.getItem('theme') };
        if (this.state.width >= 320 && this.state.width <= 601) {   
            this.state = ({ width: window.innerWidth, height: window.innerHeight, visible: false, currentTheme: themeStyles.blue  });
        } else {
            this.state = ({ width: window.innerWidth, height: window.innerHeight, visible: true, currentTheme: themeStyles.blue  });
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
            this.setState({ width: window.innerWidth, height: window.innerHeight, visible: false, currentTheme: themeStyles.blue  });
        } else {
            this.setState({ width: window.innerWidth, height: window.innerHeight, visible: true, currentTheme: themeStyles.blue  });
        }  
      }
      
     toggleVisibility = () => this.setState({ visible: !this.state.visible });

     changeTheme = (e, data) => {
        // console.log(data.value);         
        localStorage.setItem('theme', JSON.stringify(data.value));
        this.setState({currentTheme: data.value});        
        // console.log(localStorage);
        //  this.setState({ visible: !this.state.visible });
     }
    //  changeTheme = (e, data) => console.log(data.value);
     

    render () {

        const trigger = (
            <span>
              <Image avatar src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' /> Luminusss
            </span>
          )

        const languageOptions = [
            { key: 'us', value: 'us', flag: 'us', text: 'English' }
        ]

        const themeOptions = [
            {
                key: 'Green/Black',
                text: 'Green',
                value: themeStyles.green                
            },
            {
                key: 'Yellow/Gray',
                text: 'Yellow',
                value: themeStyles.yellow                
            },
            {
                key: 'Red/Black',
                text: 'Red',
                value: themeStyles.red                
            },
            {
                key: 'Sea Green',
                text: 'Sea Green',
                value: themeStyles.seaGreen                
            },
            {
                key: 'Blue/Gray',
                text: 'Blue',
                value: themeStyles.blue                            
            },
            {
                key: 'White/Black',
                text: 'White/Black',
                value: themeStyles.whiteBlack                
            }
        ]
        // console.log(localStorage.getItem('theme'));
        const currentTheme = JSON.parse(localStorage.getItem('theme'));

        const { visible } = this.state;

        const socialStyle = {
            width: '100%',
            position: 'absolute',
            margin: '0',
            top: 'auto',
            left: '0',
            bottom: '20px'
        }
        
        return (
            <Sidebar.Pushable as={Segment} style={currentTheme.backgroundImage}>                
                {/* #2f4454 (dark blue),   */}
                <Sidebar as={Menu} className='content-sidebar' animation='slide along' width='very thin' icon='labeled' visible={visible} vertical inverted compact style={currentTheme.sidebarColor}>                    
                    {/* <Menu.Item name='logo' >
                        <Image 
                            src={Logo} 
                            size='mini' 
                        />
                    </Menu.Item> */}

                    <Popup
                    trigger={
                       
                        <Menu.Item as={Link} to='/' name='home' style={currentTheme.headerBackground}>
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
                            <Icon name='user circle outline' style={currentTheme.iconColor} inverted  size='large'/>
                        </Menu.Item>
                        }
                    content='Profile'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/fireteams' name='fireteams'>
                            <Icon name='comments' size='large' inverted style={currentTheme.iconColor}/>
                        </Menu.Item>
                        }
                    content='LFG Boards'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/player-search' name='search'>
                            <Icon name='id card' size='large' inverted style={currentTheme.iconColor} />
                        </Menu.Item>
                        }
                    content='Guardian Search'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/team-search' name='group'>
                            <Icon corner name='search' size='large' inverted style={currentTheme.iconColor}/>
                        </Menu.Item>
                        }
                    content='Team Lookup'
                    position='right center'
                    />                    

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/donate' name='group'>
                            <Icon name='paypal' size='large' inverted style={currentTheme.iconColor}/>
                        </Menu.Item>
                        }
                    content='Help us make the site better! Donate now and receive a special badge.'
                    position='right center'
                    />

                    <Popup
                    trigger={
                        <Menu.Item as={Link} to='/about' name='about'>
                            <Icon name='info circle' size='large'inverted style={currentTheme.iconColor}/>
                        </Menu.Item>
                        }
                    content='About the site'
                    position='right center'
                    />
                    <Popup                
                    trigger={
                        <Menu.Item name='settings' className='hide-on-med-and-up'>
                            <Icon name='settings' size='large' inverted style={currentTheme.iconColor}/>
                        </Menu.Item>
                        }
                    content={                        
                        <div>
                            Customize the sidebar theme: 
                            <Divider/> 
                            <Dropdown  upward scrolling text={currentTheme.text} selection fluid options={themeOptions} onChange={this.changeTheme} />
                        </div>
                    }
                    position='right center'
                    hoverable
                    />

                    <Popup                        
                        trigger={
                            <Menu.Item name='group' style={socialStyle}>
                                <Icon name='heart' size='large' inverted style={currentTheme.heartColor}/>
                            </Menu.Item>
                            }
                        header='Follow us on social media and earn a follower badge!'
                        content={
                            <Menu icon borderless fluid widths={5} >
                                <Menu.Item href='//twitter.com/destinderdotcom' target='_blank' name='twitter'>
                                    <Icon name='twitter square' size='large' style={{color: '#2AA3EF'}}/>
                                </Menu.Item>

                                <Menu.Item  href='//instagram.com/destinderdotcom' target='_blank' name='instagram'>
                                    <Icon name='instagram' size='large' style={{ color: '#B740A9' }}/>
                                </Menu.Item>

                                <Menu.Item name='facebook'>
                                    <Icon name='facebook' size='large' style={{color: '#4969A8' }}/>
                                </Menu.Item>

                                <Menu.Item  href='//www.reddit.com/r/destinder/' target='_blank' name='reddit'>
                                    <Icon name='reddit' size='large' style={{ color: '#FC461E' }}/>
                                </Menu.Item>

                                <Menu.Item href='//github.com/destiny-aviato/destinder' target='_blank'  name='github'>
                                    <Icon name='github' size='large'/>
                                </Menu.Item>
                            </Menu>
                            }
                        position='right center'
                        hoverable
                        flowing
                    />


                    {/* <Menu.Item as={Link} to='/donate' name='paypal'>
                        <Icon name='paypal' />
                        Donate
                    </Menu.Item> */}
                    
                    <Popup
                    trigger={<Label attached='bottom' style={currentTheme.labelColor} >BETA</Label>}
                    header='Heads up!'
                    content={
                        <div>
                            Many of these features are still under development, so you may see some bugs!
                            <Divider />
                            <Button  href="mailto:help@destinder.com" animated style={{backgroundColor: '#45a29e', color: '#f5f5f5' }} >
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
                <Sidebar.Pusher >
                    <Button floated='left' onClick={this.toggleVisibility} icon='sidebar' className="menu-icon hide-on-med-and-up" />
                    <Divider className='hide-on-med-and-up header-divider' style={{ marginBottom: '7%' }} hidden/>
                    <Menu compact className='hide-on-mobile' style={{  float: 'right',  marginRight: '10%', backgroundColor: 'transparent', border: 'none', boxShadow: 'none'}}>
                        <Menu.Menu position='right' style={{border: 'none'}}>                            
                            <Popup                
                            trigger={
                                <Menu.Item name='settings' style={{color: '#f5f5f5'}}>
                                    <Icon name='settings' size='large' inverted style={currentTheme.iconColor}/>
                                    Customize
                                </Menu.Item>
                                }
                            content={                        
                                <div>
                                    Sidebar theme: 
                                    <Divider/> 
                                    <Dropdown scrolling text={currentTheme.text} selection  options={themeOptions} onChange={this.changeTheme} />
                                    <Divider hidden />
                                    Language:
                                    <Divider/> 
                                    <Dropdown scrolling text='Language' selection  options={languageOptions} />
                                    
                                </div>
                            }
                            position='right center'
                            hoverable
                            />
                            <Menu.Item name='user-name'>
                                <Dropdown trigger={trigger} pointing='top left' icon={null} style={{color: '#f5f5f5'}}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Logout</Dropdown.Item>                                
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item >
                        </Menu.Menu>
                    </Menu>
                    <Container className='content-container'>
                        {this.props.children}
                    </Container>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

export default Header


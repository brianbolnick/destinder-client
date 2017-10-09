import React, { Component } from 'react';
import { Container, Menu, Icon, Image, Grid, Card, Dropdown } from 'semantic-ui-react';
// import Typed from 'typed.js';
import './App.css';
import './HomePage.css';
import Parallax from 'react-springy-parallax';
import { Link } from 'react-router-dom';

import LayerBackground from './img/layers-test-bg-only.png';
import LayerChars from './img/layers-test-chars.png';
import LayerShips from './img/layers-test-ships.png';
import LayerOverlay from './img/bg-overlay.png';
import Logo from './img/logo-with-title-word-black.png';
import Arcstrider from './img/sentinel-dark.png';

import AnnouncementLogo from './img/announce-with-title-word-white.png';



// class TypedHeader extends React.Component {
//   componentDidMount() {
//     // You can pass other options here, such as typing speed, back speed, etc.
//     const options = {
//       strings: ['elite', "winners", "salty", "complainers", "ragers", "try hards", "losers", "good looking", "masses"],
//       loop: true,
//       startDelay: 2000,
//       backDelay: 1000,
//       typeSpeed: 70,
//       showCursor: true,
//       cursorChar: "|",
//       shuffle: true
//     };
//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//     // Make sure to destroy Typed instance on unmounting
//     // to prevent memory leaks
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <span ref={(el) => { this.el = el; }} />
//     );
//   }
// }


class HomeFirst extends Component {
  render() {

    const trigger = (
        <span>
          <Image avatar src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' /> Luminusss
        </span>
      )

    return (
      <Container>
        {/* TODO: Create a separate component for this nav menu */}
        <Menu compact className='hide-on-mobile' style={{  float: 'right', backgroundColor: 'transparent'}}>
            <Menu.Menu position='right'>                                        
                <Menu.Item name='user-name'>
                    <Dropdown trigger={trigger} pointing='top left' icon={null} style={{color: '#f5f5f5'}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Logout</Dropdown.Item>                                
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item >
            </Menu.Menu>
        </Menu>

        <div style={{height: 'calc(100vh - 90px)' }} >
        </div>
        <Grid columns={1} >
          <Grid.Row >
            <Grid.Column width={16} >
              <div style={{textAlign: 'center'}}>
                <Icon name='angle down' size='huge' className='scroll-icon fa-pulse'  onClick={this.props.scrollClick}/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      

    )
  }
}

class HomeSecond extends Component {
    render() {
        return (
            <Container>
            {/* TODO: Create a separate component for this nav menu */}
            <Menu text>
                <Menu.Item header><Image src={Logo} size='small' /></Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item>
                    <div>
                    <Image src='https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' avatar />
                    <span style={{color: '#f5f5f5', fontWeight: '300'}}>Luminusss</span>
                    </div>
                </Menu.Item>
                </Menu.Menu>
            </Menu>
    
            <Grid columns={2}>
                <Grid.Row>
                <Grid.Column mobile={8} computer={4}>
                    <Card as={Link} to='/profile' className="home-tile-card" style={{ marginTop: '15%', marginBottom: '15%' }}>
                    <div className='home-tile-content' >
                        <div className='home-tile-icon'>
                        <Icon name='user outline' size='massive' />
                        </div>
                        <Card.Content style={{ borderTop: 'none' }}>
                        <Card.Header className='home-tile-text-header'>
                            Profile
                        </Card.Header>
                        </Card.Content>
                    </div>
                    </Card>
                </Grid.Column>
    
                <Grid.Column mobile={8} computer={4}>
                    <Card as={Link} to='/fireteams' className="home-tile-card row2-1" style={{ marginTop: '15%', marginBottom: '15%' }}>
                    <div className='home-tile-content' >
                        <div className='home-tile-icon'>
                        <Icon name='comments' size='massive' />
                        </div>
                        <Card.Content style={{ borderTop: 'none' }}>
                        <Card.Header className='home-tile-text-header'>
                            LFG
                        </Card.Header>
                        </Card.Content>
                    </div>
                    </Card>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column mobile={8} computer={4}>
                    <Card as={Link} to='/team-search' className="home-tile-card row2-2" style={{ marginTop: '8%' }}>
                    <div className='home-tile-content row2' >
                        <div className='home-tile-icon'>
                        <Icon.Group size='massive'>
                            <Icon name='users' />
                            {/* <Icon corner color='grey' name='search' /> */}
                            
                        </Icon.Group>
                        </div>
                        <Card.Content style={{ borderTop: 'none' }}>
                        <Card.Header className='home-tile-text-header'>
                            Team Search
                        </Card.Header>
                        </Card.Content>
                    </div>
                    </Card>
                </Grid.Column>
                <Grid.Column mobile={8} computer={4}>
                    <Card as={Link} to='/player-search' className="home-tile-card" style={{ marginTop: '8%' }}>
                    <div className='home-tile-content row2' >
                        <div className='home-tile-icon'>
                        <Icon name='search' size='massive' />
                        </div>
                        <Card.Content style={{ borderTop: 'none' }}>
                        <Card.Header className='home-tile-text-header'>
                            Player Search
                        </Card.Header>
                        </Card.Content>
                    </div>
                    </Card>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid columns={1} >
                <Grid.Row >
                <Grid.Column width={16} >
                    <div style={{textAlign: 'center'}}>
                        <Icon name='angle down' size='huge' className='scroll-icon fa-pulse'  onClick={this.props.downScrollClick}/>
                        {/* <Icon name='angle up' size='huge' className='scroll-icon fa-pulse'  onClick={this.props.upScrollClick}/> */}
                    </div>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
            
    
        )
        }
    }

class HomeThird extends Component {
    render() {
      return (
        <Container style={{height: '90vh'}}>
          <div style={{height: 'calc(100vh - 135px)'}}>
            <Image src={AnnouncementLogo} size='large' />
            {/* <p>LFG for the <span><TypedHeader/></span></p> */}
          </div>
  
          <Grid columns={1} >
            <Grid.Row >
              <Grid.Column width={16} >
                <div style={{textAlign: 'right'}}>
                  <Icon name='angle up' size='huge' className='scroll-icon fa-pulse'  onClick={this.props.scrollClick}/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )
    }
}

class HomeLayout extends Component {
  render() {
    const firstStyle = {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: `url(${Arcstrider})`,
        backgroundSize: 'cover'
      }
    
    const bgStyle = {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: `url(${LayerBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '800px',
      position: 'fixed',
      zIndex: '-3'
    }

    const shipStyle = {
        backgroundImage: `url(${LayerShips})`,
        backgroundPosition: 'bottom center',
        // backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        position: 'fixed',
        zIndex: '-2',
        backgroundPositionX: '2px',
        backgroundPositionY: '83px',
        backgroundSize: '400px'
    }
    const overlayStyle = {
        backgroundImage: `url(${LayerOverlay})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        position: 'fixed',
        zIndex: '-1'
    }

    const charsStyle = {
        backgroundImage: `url(${LayerChars})`,
        backgroundPosition: 'bottom',
        backgroundSize: '1200px',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        position: 'fixed',
        zIndex: '-1'
    }


    const secondStyle = {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: 'auto',
      backgroundRepeat: 'inherit',
      color: 'white'
    }

    const homeStyle = {
      backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/patterns/ep_naturalblack.png")',
      backgroundSize: 'auto',
      backgroundRepeat: 'inherit',
    }

    return (
      <Parallax ref="parallax" pages={3} style={homeStyle}>

        {/* First section */}
        <Parallax.Layer offset={0} speed={0.5} style={bgStyle} />
        <Parallax.Layer offset={0} speed={0.8} style={shipStyle} />
        <Parallax.Layer offset={0} speed={0.6} style={overlayStyle} />
        <Parallax.Layer offset={0} speed={0.5} style={charsStyle} >
            <HomeFirst scrollClick={() => this.refs.parallax.scrollTo(1)}/>
        </Parallax.Layer>

        {/* Second Section */}
        <Parallax.Layer offset={1} speed={0.1} style={firstStyle}>
          <HomeSecond downScrollClick={() => this.refs.parallax.scrollTo(2)} upScrollClick={() => this.refs.parallax.scrollTo(0)}/>          
        </Parallax.Layer>
        
        {/* Third Section */}
        <Parallax.Layer offset={2} speed={2} style={secondStyle} >
          <HomeThird scrollClick={() => this.refs.parallax.scrollTo(0)}/>
        </Parallax.Layer>


        {/* <Parallax.Layer offset={2} speed={1} style={{ backgroundImage: `url(${Dawnblade})`, backgroundSize: 'cover' }} /> */}


      </Parallax>
    )
  }

}

export default HomeLayout;





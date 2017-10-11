import React, { Component } from 'react';
import { Container, Header, Menu, Segment, Accordion, Icon, Form, Radio, Dropdown, Button } from 'semantic-ui-react';
import Layout from './Layout.js';
// import {posts} from './data/posts';
import { Route, Link } from 'react-router-dom';
import './Content.css';


class TagSearch extends Component {
    
    render() {
        const tagOptions = [
            {
                text: 'ii WALZ ii',
                value: 2,
                image: { avatar: true, src: 'https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' },
            },
            {
                text: 'Putin Pudding',
                value: 3,
                image: { avatar: true, src: 'https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' },
            },
            {
                text: 'KURTO13',
                value: 4,
                image: { avatar: true, src: 'https://www.bungie.net//img/profile/avatars/bungie_day_15_27.jpg' },
            },

        ]
        return (
            <Dropdown placeholder='Fireteam' fluid multiple search selection options={tagOptions} />
        )
    }
}


class NewForm extends Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    handleChange = (e, { value }) => this.setState({ value })
    


    render() {
        const { activeIndex } = this.state
        const { value } = this.state
        const labelStyle = {
            /* display: block; */
            margin: '0 0 .28571429rem 0',
            color: 'rgba(0,0,0,.87)',
            fontSize: '.92857143em',
            fontWeight: '700',
            textTransform: 'none'
        }
        const gameTypeOptions = [
            { key: 's', text: 'Story', value: 'story' }
        ]
        const teamOptions = [
            { key: 'any', text: 'Any', value: 'any' },
            { key: 'similar', text: 'Similar', value: 'similar' },
            { key: 'sherpa', text: 'Sherpa (Help Needed)', value: 'sherpa' },
            { key: 'sherpee', text: 'Sherpee (Someone to Carry)', value: 'sherpee' },
        ]
        const characterOptions = [
            { key: 't', text: 'Titan', value: 'titan' },
            { key: 'h', text: 'Hunter', value: 'hunter' },
            { key: 'w', text: 'Warlock', value: 'warlock' }

        ]
        return (
            <div style={{ margin: '0 auto' }}>
                <Accordion styled style={{ marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon color='yellow' style={{ marginRight: '15px' }} name='write' size='big' />
                        New Post
                        <Icon style={{ float: 'right', marginTop: '7px' }} name='dropdown' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <Form>
                            <Form.Group >                                
                                <Form.Field width={3}>
                                    <label>Mode</label>
                                    <div style={{display: 'inline-flex', marginTop: '3%'}}>
                                        <span style={{color: '#212121', marginRight: '2%'}} >PVE</span> <Form.Radio className='mode-toggle' toggle label='PVP' width={8}/>
                                    </div>
                                </Form.Field>
                                <Form.Select  width={13} label='Gametype' options={gameTypeOptions} placeholder='Story' />
                            </Form.Group>
                            <Form.Group >
                                <Form.Select width={4} label='Character' options={characterOptions} placeholder='Titan' />
                                <Form.Select width={4} label='Looking For...' options={teamOptions} placeholder='Any' />
                                <Form.Field width={8}>
                                    <label>Fireteam</label>
                                    <TagSearch />
                                </Form.Field>                                
                            </Form.Group>
                            <Form.TextArea label='Message' placeholder='Looking for one more...' />
                            <Form.Checkbox label='I have a mic!' />
                            <Button content='Submit' icon='send' labelPosition='left' type='submit' />
                        </Form>
                    </Accordion.Content>
                </Accordion>
            </div>
        )
    }
}



class FireteamsPage extends Component {
    render() {
        return (
            <Layout>
                <div className="fireteams-page" style={{ height: '100vh' }}>
                    <Container>
                        {/* <Header as='h2'>LFG</Header>
                        <p>All LFG posts are here.</p> */}
                        <div style={{ height: '50px' }} />
                        <NewForm />
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default FireteamsPage;







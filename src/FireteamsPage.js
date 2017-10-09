import React, { Component } from 'react';
import { Container, Header, Menu, Segment } from 'semantic-ui-react';
import Layout from './Layout.js'

// import {posts} from './data/posts';
import { Route, Link } from 'react-router-dom'


class FireteamsPage extends Component {
    render() {
        return (
            <Layout>
                <div className="fireteams-page" style={{height: '100vh'}}>
                    <Container>
                        <Header as='h2'>LFG</Header>
                        <p>All LFG posts are here.</p>
                    </Container>
                </div>
            </Layout>
        );
    }
}
  
export default FireteamsPage;







import React, { Component } from 'react';
import { Container, Header, Menu } from 'semantic-ui-react';
import Layout from './Layout.js'

// import {posts} from './data/posts';
import { Route, Link } from 'react-router-dom'


class FireteamsPage extends Component {
    render() {
        return (
            <Layout>
                <div className="fireteams-page">
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







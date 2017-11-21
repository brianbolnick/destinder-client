import React, { Component } from "react";
import {
    Card,
    Icon
} from "semantic-ui-react";
import { deleteLfgPost } from '../actions/index';
import { connect } from 'react-redux'

import "../css/Content.css";

class LfgCard extends Component {
    deletePostClick() {
        this.props.deleteLfgPost(this.props.data.id);
    }

    render() {
        const { data } = this.props;
        // console.log(data);
        return (
            <Card >
                <Card.Content header={data.id} />
                <Card.Content >
                    {data.message}
                    <Icon onClick={this.deletePostClick.bind(this)} link name='trash outline' />
                </Card.Content>
            </Card>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//       lfgPosts: state.lfgPosts.all,
//       fetched: state.lfgPosts.fetched,
//       fetching: state.lfgPosts.fetching
//     }
//   }

export default connect(null, { deleteLfgPost })(LfgCard)
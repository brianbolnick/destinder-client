import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PostCard from './PostCard';
import {
    Route,
    Link
} from 'react-router-dom';



const PostList = ({posts}) => (
    <Grid>
        { posts.map( post => 
            <PostCard {...post} key={post.id} />
        )}
    </Grid>
);

export default PostList;





import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';



const PostCard = ({id, image, address: {street, city, state, zip}, ...otherProps}) => (
    <div>
     {/* post content */}
     </div>
);

export default styled(PostCard)`
    display: block;
`;
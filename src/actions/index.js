import {
    GET_LFG_POSTS,
    GET_LFG_POST,
    CREATE_LFG_POST,
    GET_PLAYER_CHARACTERS,
    GET_MATCHING_USERS
} from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
const config = { headers: { 'AUTHORIZATION': `Bearer ${localStorage.getItem('auth_token')}` } }

export function getPostsSuccess(posts) {
    // console.log(posts);
    return { type: GET_LFG_POSTS, payload: posts };
}


export const getLfgPosts = () => {
    return (dispatch, getState) => {
        axios.get(`${API_URL}/v1/lfg_posts`).then(response => {
            dispatch({ type: GET_LFG_POSTS, payload: response.data })
        }).catch(error => console.log(error))
    };
}

export const getMatchingUsers = (name) => {
    return (dispatch, getState) => {
        if (name === "") {
            dispatch({ type: GET_MATCHING_USERS, payload: name })
        } else {
            axios.get(`${API_URL}/v1/users/find/${name}`).then(response => {
                dispatch({ type: GET_MATCHING_USERS, payload: response.data })
            }).catch(error => console.log(error))
        }
    };
}

export const getPlayerCharacters = (user_id) => {
    return (dispatch, getState) => {
        axios.get(`${API_URL}/v1/users/${user_id}/characters`).then(response => {
            dispatch({ type: GET_PLAYER_CHARACTERS, payload: response.data })
        }).catch(error => console.log(error))
    };
}


export function createLfgPost(props) {
    axios.post(`${API_URL}/v1/lfg_posts`,
        props,
        config
    )
        .then(response => {
            return {
                type: CREATE_LFG_POST,
                payload: response.data
            };
        })
        .catch(error => console.log(error))
}



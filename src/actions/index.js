import { GET_LFG_POSTS, GET_LFG_POST, CREATE_LFG_POST } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
const config = { headers: { 'AUTHORIZATION': `Bearer ${localStorage.getItem('auth_token')}` } }

export function getLfgPosts() {
        // const request = axios.get( `${API_URL}/v1/lfg_posts`);
        // console.log(request)
        // return {
        //     type: GET_LFG_POSTS,
        //     payload: request
        // };
    const request = axios.get(`${API_URL}/v1/lfg_posts`)
        .then(response => {            
            return {
                type: GET_LFG_POST,
                payload: response.data
            };
        })
        .catch(error => console.log(error))
}

export function createLfgPost(props) {
    const request = axios.post(`${API_URL}/v1/lfg_posts`,
        props,
        config
    )
        .then(response => {
            console.log(response.data)
            return {
                type: CREATE_LFG_POST,
                payload: response.data
            };
        })
        .catch(error => console.log(error))
}



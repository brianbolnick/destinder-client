import { GET_LFG_POSTS } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';

export function getLfgPosts() {
    const request = axios.get( `${API_URL}/v1/lfg_posts`);
    return {
        type: GET_LFG_POSTS,
        payload: request
    };
}

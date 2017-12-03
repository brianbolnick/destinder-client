import { FETCH_FIRETEAM_START, FETCH_FIRETEAM_END, SET_FIRETEAM_ERRORS, FETCH_PLAYER_DATA } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

// FETCH_FIRETEAM_START: on form submit, send request to server to find last trials fireteam
// respond with:
    // fireteam = [
    //     {
    //         player_name: "string",
    //         character_id: "string",
    //         user_id: integer
    //     },
    //     ... 
    // ]
// FETCH FIRETEAM END: receive fireteam array
// For each fireteam, dispatch FETCHING_PLAYER_START: set fetchingPlayer to true
// Send request to server to get player data 
// Dispatch FETCHING_PLAYER_END on retrieval, set fetchingPlayer to false and respond with player stats
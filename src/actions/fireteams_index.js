// eslint-disable-next-line
import { FETCH_FIRETEAM_START, FETCH_FIRETEAM_END, SET_FIRETEAM_ERRORS, FETCH_PLAYER_DATA, SET_USER_ERRORS } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
import { push } from 'react-router-redux'
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

export const validateUser = (data) => {
    return (dispatch, getState) => {
        const gamertag = encodeURIComponent(data.gamertag.trim())
        axios.get(`${API_URL}/v1/validate_player?user=${gamertag}&platform=${data.console}`, config).then(response => {
            if (response.data.valid === 0) {
                dispatch({
                    type: SET_USER_ERRORS,
                    payload: "User not found."
                })
            } else {
                dispatch(push(`/fireteams/${data.console}/${gamertag}`))
            }
        }).catch(error => {
            dispatch({
                type: SET_USER_ERRORS,
                payload: "There was an issue searching for that user."
            })           
        })
        
    };
}

export const resetErrors = () => {
    return (dispatch, getState) => {
        dispatch({
            type: SET_USER_ERRORS,
            payload: null
        })    
    }
}
// eslint-disable-next-line
import { FETCH_PLAYER_START, FETCH_PLAYER_END, SET_PLAYER_ERRORS } from '../actions/types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
import { push } from 'react-router-redux'
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }


export const fetchPlayerStats = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_PLAYER_START })        
        axios.get(`${API_URL}/v1/fireteams/stats/${data.platform}/${data.membership_id}`).then(response => {
            dispatch({
                type: FETCH_PLAYER_END,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_PLAYER_ERRORS,
                payload: "There was an issue pulling stats for that player."
            })
        })
    }
}
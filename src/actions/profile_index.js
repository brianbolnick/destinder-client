import { 
    FETCH_PROFILE_CHARACTERS_START, 
    FETCH_PROFILE_CHARACTERS_END, 
    SET_PROFILE_CHARACTERS_ERROR,
    FETCH_PROFILE_USER_START,
    FETCH_PROFILE_USER_END,
    SET_PROFILE_USER_ERROR
 } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
// const token = localStorage.getItem('auth_token');
// const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

export const fetchUserDetails = (user_id) => {    
    return (dispatch, getState) => {
        dispatch({ type: FETCH_PROFILE_USER_START })
        axios.get(`${API_URL}/v1/users/${user_id}/`).then(userResponse => {            
            axios.get(`${API_URL}/v1/users/${user_id}/reputation`).then(repResponse => {
                dispatch({ type: FETCH_PROFILE_USER_END, payload: userResponse.data, rep: repResponse.data })
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: SET_PROFILE_USER_ERROR,
                    payload: error,
                    message: "There was a problem retrieving your characters."
                })
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_PROFILE_USER_ERROR,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}


export const fetchPlayerCharacters = (user_id) => {    
    return (dispatch, getState) => {
        dispatch({ type: FETCH_PROFILE_CHARACTERS_START })
        axios.get(`${API_URL}/v1/users/${user_id}/characters`).then(response => {            
            dispatch({ type: FETCH_PROFILE_CHARACTERS_END, payload: response.data })            
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_PROFILE_CHARACTERS_ERROR,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}
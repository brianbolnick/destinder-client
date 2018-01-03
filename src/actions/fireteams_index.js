// eslint-disable-next-line
import { FETCH_FIRETEAM_START, FETCH_FIRETEAM_END, SET_FIRETEAM_ERRORS, FETCH_PLAYER_DATA, SET_USER_ERRORS, VALIDATE_PLAYER_END, VALIDATE_PLAYER_START, ADD_FIRETEAM_CHARACTER, CLEAR_STORE, FETCH_PGCR_END, FETCH_PGCR_START, SET_PGCR_ERRORS } from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
import { push } from 'react-router-redux'
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

export const addPlayerStats = (id, data) => {
    return (dispatch, getState) => {
        dispatch({
            type: ADD_FIRETEAM_CHARACTER,
            payload: data,
            id: id
        })
    }
}

export const clearOnUnmount = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CLEAR_STORE
        })
    }
}

export const validateUser = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: VALIDATE_PLAYER_START })        
        const gamertag = encodeURIComponent(data.gamertag.trim())
        axios.get(`${API_URL}/v1/validate_player?user=${gamertag}&platform=${data.console}`, config).then(response => {
            if (response.data.valid === 0) {
                dispatch({
                    type: SET_USER_ERRORS,
                    payload: "User not found."
                })
            } else {
                dispatch({
                    type: VALIDATE_PLAYER_START
                })
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

export const fetchFireteamMembers = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_FIRETEAM_START })
        axios.get(`${API_URL}/v1/fireteams/${data.platform}/${data.gamertag}`).then(response => {            
            if (response.data.error) {
                console.log("found error getting fireteam: ",  response.data.error)
                dispatch({
                    type: SET_FIRETEAM_ERRORS,
                    message: "There was an issue pulling stats for that player."
                })
            } else {
                dispatch({
                    type: FETCH_FIRETEAM_END,
                    payload: response.data
                })
            }
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_FIRETEAM_ERRORS,
                message: "There was an issue pulling stats for that player."
            })
        })
    }
}

export const fetchPgcr = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_PGCR_START })
        axios.get(`${API_URL}/v1/characters/pgcr/${data}`).then(response => {            
            if (response.data.error) {
                console.log("found error getting pgcr: ",  response.data.error)
                dispatch({
                    type: SET_PGCR_ERRORS,
                    message: "There was an issue pulling game data for this match."
                })
            } else {
                dispatch({
                    type: FETCH_PGCR_END,
                    payload: response.data
                })
            }
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_PGCR_ERRORS,
                message: "There was an issue pulling game data for this match."
            })
        })
    }
}

export const validateUserDirectPath = (data) => {
    return (dispatch, getState) => {
        const gamertag = encodeURIComponent(data.gamertag.trim())
        axios.get(`${API_URL}/v1/validate_player?user=${gamertag}&platform=${data.platform}`, config).then(response => {
            if (response.data.valid === 0) {
                dispatch({
                    type: SET_USER_ERRORS,
                    payload: "User not found. Please go back and search again."
                })
            } else {
                console.log("found user, getting fireteam.");
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
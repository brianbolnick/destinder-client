import * as Types from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';

export const fetchUserDetails = (user_id) => {
    return (dispatch, getState) => {
        dispatch({ type: Types.FETCH_PROFILE_USER_START })
        axios.get(`${API_URL}/v1/users/${user_id}/`).then(userResponse => {
            axios.get(`${API_URL}/v1/users/${user_id}/reputation`).then(repResponse => {
                dispatch({ type: Types.FETCH_PROFILE_USER_END, payload: userResponse.data, rep: repResponse.data })
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: Types.SET_PROFILE_USER_ERROR,
                    payload: error,
                    message: "There was a problem retrieving your characters."
                })
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: Types.SET_PROFILE_USER_ERROR,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}

export const fetchPlayerCharacters = (user_id) => {
    return (dispatch, getState) => {
        dispatch({ type: Types.FETCH_PROFILE_CHARACTERS_START })
        axios.get(`${API_URL}/v1/users/${user_id}/characters`).then(response => {
            dispatch({ type: Types.FETCH_PROFILE_CHARACTERS_END, payload: response.data })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: Types.SET_PROFILE_CHARACTERS_ERROR,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}

export const changeCharacter = (id, type) => {
    return (dispatch, getState) => {
        dispatch({ type: Types.CHANGE_CHARACTER, payload: { id: id, type: type } })
    };
}

export const fetchNightfall = (user_id, char_id) => {
    return (dispatch, getState) => {
        dispatch({ type: Types.FETCH_NIGHTFALL_START })
        axios.get(`${API_URL}/v1/users/${user_id}/characters/${char_id}/stats?mode=16`).then(normResponse => {
            axios.get(`${API_URL}/v1/users/${user_id}/characters/${char_id}/stats?mode=17`).then(presResponse => {
                dispatch({ type: Types.FETCH_NIGHTFALL_END, normPayload: normResponse.data, presPayload: presResponse.data })
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: Types.SET_NIGHTFALL_ERROR,
                    payload: error,
                    message: "There was a problem retrieving your nightfall stats."
                })
            })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: Types.SET_NIGHTFALL_ERROR,
                payload: error,
                message: "There was a problem retrieving your nightfall stats."
            })
        })
    };
}

export const fetchPvp = (user_id, char_id) => {
    console.log("in action")
    return (dispatch, getState) => {
        dispatch({ type: Types.FETCH_PVP_START })
        axios.get(`${API_URL}/v1/users/${user_id}/characters/${char_id}/stats?mode=5`).then(response => {
            dispatch({ type: Types.FETCH_PVP_END, payload: response.data })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: Types.SET_PVP_ERROR,
                payload: error,
                message: "There was a problem retrieving your nightfall stats."
            })
        })
    };
}

export const fetchCharacter = (user_id, character_id) => {
    return (dispatch, getState) => {
        dispatch({ type: Types.FETCH_PROFILE_CHARACTER_START })
        axios.get(`${API_URL}/v1/users/${user_id}/characters/${character_id}`).then(response => {
            dispatch({ type: Types.FETCH_PROFILE_CHARACTER_END, payload: response.data })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: Types.SET_PROFILE_CHARACTERS_ERROR,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}
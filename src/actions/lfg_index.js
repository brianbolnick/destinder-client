import {
    GET_LFG_POSTS,
    CREATE_LFG_POST,
    GET_PLAYER_CHARACTERS,
    GET_MATCHING_USERS,
    FETCH_POSTS_START,
    CREATE_POST_START,
    DELETE_LFG_POST,
    SHOW_ALL_POSTS,
    FILTER_ELO,
    FILTER_KD,
    FILTER_LOOKING_FOR,
    FILTER_MIC,
    FILTER_MODE,
    SET_ERRORS,
    SET_FETCH_POST_ERRORS
} from './types';
import axios from 'axios';
import { API_URL } from '../tools/api-config';
const token = localStorage.getItem('auth_token');
const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

export function getPostsSuccess(posts) {
    return { type: GET_LFG_POSTS, payload: posts };
}

export const filterMode = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FILTER_MODE, payload: data })
    };
}

export const filterMic = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FILTER_MIC, payload: data })
    };
}

export const filterLookingFor = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FILTER_LOOKING_FOR, payload: data })
    };
}

export const filterElo = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FILTER_ELO, payload: data })
    };
}

export const showAllPosts = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_ALL_POSTS })
    };
}

export const filterKd = (data) => {
    return (dispatch, getState) => {
        dispatch({ type: FILTER_KD, payload: data })
    };
}

export const getLfgPosts = (platform) => {
    platform = platform || null
    if (token != null) {
        return (dispatch, getState) => {
            dispatch({ type: FETCH_POSTS_START })
            axios.get(`${API_URL}/v1/lfg_posts`, config).then(response => {                
                if (response.data.error) {
                    console.log(response.data.error)
                    if (response.data.error === "Signature has expired") {
                        dispatch({
                            type: SET_FETCH_POST_ERRORS,
                            payload: response.data.error,
                            message: "Your session has expired, please login again."
                        })
                    } else {
                        dispatch({
                            type: SET_FETCH_POST_ERRORS,
                            payload: response.data.error,
                            message: `There was a problem retrieving posts: ${response.data.error}.`
                        })
                    }
                } else {
                    dispatch({ type: GET_LFG_POSTS, payload: response.data })
                }
                
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: SET_FETCH_POST_ERRORS,
                    payload: error,
                    message: "There was a problem retrieving posts."
                })
            })
        };
    } else {
        return (dispatch, getState) => {
            dispatch({ type: FETCH_POSTS_START })
            axios.get(`${API_URL}/v1/lfg_posts?platform=${platform}`).then(response => {
                dispatch({ type: GET_LFG_POSTS, payload: response.data })
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: SET_FETCH_POST_ERRORS,
                    payload: error,
                    message: "There was a problem retrieving posts."
                })
            })
        };
    }

}

export const getMatchingUsers = (name) => {
    return (dispatch, getState) => {
        if (name === "") {
            dispatch({ type: GET_MATCHING_USERS, payload: name })
        } else {
            axios.get(`${API_URL}/v1/users/find/?data=${name}`, config).then(response => {
                dispatch({ type: GET_MATCHING_USERS, payload: response.data })
            }).catch(error => {
                console.log(error)
                dispatch({
                    type: SET_ERRORS,
                    payload: error,
                    message: "There was a problem searching for fireteam members."
                })
            })
        }
    };
}

export const getPlayerCharacters = (user_id) => {
    return (dispatch, getState) => {
        axios.get(`${API_URL}/v1/users/${user_id}/characters`).then(response => {
            dispatch({ type: GET_PLAYER_CHARACTERS, payload: response.data })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_ERRORS,
                payload: error,
                message: "There was a problem retrieving your characters."
            })
        })
    };
}


export const createLfgPost = (props) => {
    return (dispatch, getState) => {
        dispatch({ type: CREATE_POST_START })
        axios.post(`${API_URL}/v1/lfg_posts`,
            props,
            config
        )
            .then(response => {
                dispatch({
                    type: CREATE_LFG_POST,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: SET_ERRORS,
                    payload: error,
                    message: "There was a problem creating your post."
                })
            })
    };

}


export const deleteLfgPost = (id) => {
    return (dispatch, getState) => {
        axios.delete(`${API_URL}/v1/lfg_posts/${id}`,
            config
        )
            .then(response => {
                dispatch({ type: DELETE_LFG_POST, payload: response.data })
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: SET_ERRORS,
                    payload: error,
                    message: "There was a problem deleting your post."
                })
            })
    };

}





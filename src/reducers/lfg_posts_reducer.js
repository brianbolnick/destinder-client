import {
    GET_LFG_POSTS,
    GET_PLAYER_CHARACTERS,
    GET_MATCHING_USERS,
    FETCH_POSTS_START,
    CREATE_LFG_POST,
    CREATE_POST_START,
    DELETE_LFG_POST
} from '../actions/types';

const INITIAL_STATE = {
    all: [],
    lfgPost: null,
    users: [],
    characters: [],
    fetching: false,
    fetched: false,
    fetchingNewPost: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LFG_POSTS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                all: action.payload
            };
        case FETCH_POSTS_START:
            return { ...state, fetching: true };
        case GET_PLAYER_CHARACTERS:
            return { ...state, characters: action.payload };
        case GET_MATCHING_USERS:
            return { ...state, users: action.payload };
        case CREATE_LFG_POST:
            return { ...state, fetchingNewPost: false, all: [...state.all, action.payload] }
        case CREATE_POST_START:
            return { ...state, fetchingNewPost: true }
        case DELETE_LFG_POST:
            return {...state, all: state.all.filter(post => post.id !== action.payload.id)}
        default:
            return state;
    }
}
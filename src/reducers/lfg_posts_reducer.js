import {
    GET_LFG_POSTS,
    GET_PLAYER_CHARACTERS,
    GET_MATCHING_USERS,
    FETCH_POSTS_START,
    CREATE_LFG_POST,
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
} from '../actions/types';

const INITIAL_STATE = {
    all: [],
    lfgPost: null,
    users: [],
    characters: [],
    fetching: false,
    fetched: false,
    fetchingNewPost: false,
    error:  null
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
        // eslint-disable-next-line
            // const posts = state.all.filter(post => post.user_id !== action.payload.user_id && post.id !== action.payload.id)
            // console.log(action.payload)
            // return { 
            //     ...state, 
            //     fetchingNewPost: false, 
            //     all: [...state, action.payload] }
        case CREATE_POST_START:
            return { ...state, fetchingNewPost: true }
        case DELETE_LFG_POST:
            return { ...state, all: state.all.filter(post => post.id !== action.payload.id) }
        case SHOW_ALL_POSTS:
            return { ...state, all: state.all }
        case FILTER_ELO:
            // console.log(action.payload)
            return {
                ...state,
                all: state.all.filter(post =>
                    JSON.parse(post.player_data).elo.elo >= action.payload[0] &&
                    JSON.parse(post.player_data).elo.elo <= action.payload[1]
                )
            }
        case FILTER_KD:
        console.log(action.payload)
            return {
                ...state,
                all: state.all.filter(post =>
                    JSON.parse(post.player_data).kd_ratio >= action.payload[0] &&
                    JSON.parse(post.player_data).kd_ratio <= action.payload[1]
                )
            }
        case FILTER_MODE:
            // eslint-disable-next-line
            return { ...state, all: state.all.filter(post => post.game_type == action.payload) }
        case FILTER_MIC:
            if (action.payload === 1) {
                return { ...state, all: state.all.filter(post => post.has_mic === true) }
            } else {
                return { ...state, all: state.all };
            }
        case FILTER_LOOKING_FOR:
            return { ...state, all: state.all.filter(post => post.looking_for === action.payload) }
        case SET_ERRORS:
            return { ...state, error: action.message }
        case SET_FETCH_POST_ERRORS:
            return { ...state, error: action.message, fetching: false, fetched: true }
        default:
            return state;
    }
}
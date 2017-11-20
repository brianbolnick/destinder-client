import { GET_LFG_POSTS, GET_PLAYER_CHARACTERS, GET_MATCHING_USERS, FETCH_POSTS_START} from '../actions/types';

const INITIAL_STATE = { 
    all: [], 
    lfgPost: null,
    users: [], 
    characters: [],
    fetching: false,
    fetched: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LFG_POSTS:
            console.log("got posts");
            return { 
                ...state, 
                fetching: false, 
                fetched: true, 
                all: action.payload
            };
        case FETCH_POSTS_START:
            console.log("fetching posts");
            return { ...state, fetching: true};
        case GET_PLAYER_CHARACTERS:
            return {...state, characters: action.payload};
        case GET_MATCHING_USERS: 
            return {...state, users: action.payload};
        default:
            return state;
    }
}
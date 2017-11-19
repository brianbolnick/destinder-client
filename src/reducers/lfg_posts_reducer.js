import { GET_LFG_POSTS, GET_PLAYER_CHARACTERS, GET_MATCHING_USERS} from '../actions/types';

const INITIAL_STATE = { 
    all: [], 
    lfgPost: null,
    users: [], 
    characters: [] 
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LFG_POSTS:
            return { ...state, all: action.payload};
        case GET_PLAYER_CHARACTERS:
            return {...state, characters: action.payload};
        case GET_MATCHING_USERS: 
            // console.log("in reducer", action.payload)
            return {...state, users: action.payload};
        default:
            return state;
    }
}
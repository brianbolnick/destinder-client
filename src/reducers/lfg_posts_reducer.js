import { GET_LFG_POSTS } from '../actions/types';

const INITIAL_STATE = { all: [], lfgPost: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_LFG_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
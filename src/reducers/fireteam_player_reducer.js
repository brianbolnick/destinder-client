// eslint-disable-next-line
import { FETCH_PLAYER_START, FETCH_PLAYER_END, SET_PLAYER_ERRORS } from '../actions/types';

const INITIAL_STATE = {
    error: null,
    fetching: false,
    stats: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PLAYER_START:            
            return { ...state, fetching: true };
        case FETCH_PLAYER_END:
            return { ...state, fetching: false, stats: action.payload }
        case SET_PLAYER_ERRORS: 
            return { ...state, fetching: false, error: action.payload }
        default:
            return state;
    }
}
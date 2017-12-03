import { FETCH_FIRETEAM_START, FETCH_FIRETEAM_END, SET_FIRETEAM_ERRORS, FETCH_PLAYER_DATA } from '../actions/types';

const INITIAL_STATE = {
    fireteam: [],
    fetching: false,
    fetched: false,
    fetchingPlayer: false,
    error:  null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FIRETEAM_START:            
            return { ...state, fetching: true };
        case FETCH_FIRETEAM_END:
            return { ...state, fetchingPlayer: true, fetching: false }
        case FETCH_PLAYER_DATA: 
            return { ...state, fetchingPlayer: true, fetching: false }
        case SET_FIRETEAM_ERRORS:
            return { ...state, error: action.message, fetching: false, fetched: true }
        default:
            return state;
    }
}
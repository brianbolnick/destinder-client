// eslint-disable-next-line
import { FETCH_FIRETEAM_START, FETCH_FIRETEAM_END, SET_FIRETEAM_ERRORS, FETCH_PLAYER_DATA, SET_USER_ERRORS, VALIDATE_PLAYER_END, VALIDATE_PLAYER_START } from '../actions/types';

const INITIAL_STATE = {
    fireteam: [],
    fetchingTeam: false,
    fetched: false,
    fetchingPlayer: false,
    error:  null,
    userValid: true,
    validatingUser: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FIRETEAM_START:            
            return { ...state, fetchingTeam: true };        
        case VALIDATE_PLAYER_START:            
            return { ...state, validatingUser: true };        
        case VALIDATE_PLAYER_END:            
            return { ...state, validatingUser: false };        
        case FETCH_FIRETEAM_END:
            return { ...state, fetchingTeam: false, fireteam: action.payload }
        case FETCH_PLAYER_DATA: 
            return { ...state, fetchingPlayer: true, fetching: false }
        case SET_FIRETEAM_ERRORS:
            console.log("setting error in reducer", action.message)
            return { ...state, error: action.message, fetchingFireteam: false }
        case SET_USER_ERRORS:
            return { ...state, userValid: false, validatingUser: false, error: action.payload }
        default:
            return state;
    }
}
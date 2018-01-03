// eslint-disable-next-line
import {
    FETCH_FIRETEAM_START,
    FETCH_FIRETEAM_END,
    SET_FIRETEAM_ERRORS,
    FETCH_PLAYER_DATA,
    SET_USER_ERRORS,
    VALIDATE_PLAYER_END,
    VALIDATE_PLAYER_START,
    ADD_FIRETEAM_CHARACTER,
    CLEAR_STORE,
    FETCH_PGCR_START,
    FETCH_PGCR_END,
    SET_PGCR_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
    fireteam: [],
    fetchingTeam: false,
    fetched: false,
    fetchingPlayer: false,
    error: null,
    userValid: true,
    validatingUser: false,
    characters: {},
    pgcr: {},
    fetchingPgcr: false,
    pgcrError: null
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
        case FETCH_PGCR_START:
            return { ...state, pgcrError: null, fetchingPgcr: true }
        case FETCH_PGCR_END:
            return { ...state, pgcrError: null, fetchingPgcr: false, pgcr: action.payload }
        case SET_PGCR_ERRORS:
            console.log("setting error in reducer", action.message)
            return { ...state, pgcrError: action.message, fetchingPgcr: false }
        case SET_FIRETEAM_ERRORS:
            console.log("setting error in reducer", action.message)
            return { ...state, error: action.message, fetchingFireteam: false }
        case SET_USER_ERRORS:
            return { ...state, userValid: false, validatingUser: false, error: action.payload }
        case CLEAR_STORE:
            return INITIAL_STATE;
        case ADD_FIRETEAM_CHARACTER:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    [action.id]: action.payload
                }
            }
        default:
            return state;
    }
}
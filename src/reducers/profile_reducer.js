// eslint-disable-next-line
import {
    FETCH_PROFILE_CHARACTERS_START,
    FETCH_PROFILE_CHARACTERS_END,
    SET_PROFILE_CHARACTERS_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    characters: {},
    fetchingCharacters: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROFILE_CHARACTERS_START:
            return { ...state, fetchingCharacters: true };
        case FETCH_PROFILE_CHARACTERS_END:
            return { ...state, fetchingCharacters: true, characters: action.payload };
        case SET_PROFILE_CHARACTERS_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, error: action.message, fetchingCharacters: false }
        default:
            return state;
    }
}
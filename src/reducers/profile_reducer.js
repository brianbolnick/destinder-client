// eslint-disable-next-line
import {
    FETCH_PROFILE_CHARACTERS_START,
    FETCH_PROFILE_CHARACTERS_END,
    SET_PROFILE_CHARACTERS_ERROR,
    FETCH_PROFILE_USER_START,
    FETCH_PROFILE_USER_END,
    SET_PROFILE_USER_ERROR,
    FETCH_PROFILE_CHARACTER_START,
    FETCH_PROFILE_CHARACTER_END
} from '../actions/types';

const INITIAL_STATE = {
    characters: {},
    character: null,
    fetchingCharacters: false,
    fetchingCharacter: false,
    fetchingUser: false,
    user: {},
    userError: null,
    reputation: {},
    reputationError: null,
    characterError: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROFILE_USER_START:
            return { ...state, fetchingUser: true };
        case FETCH_PROFILE_USER_END:            
            return { ...state, fetchingUser: false, user: action.payload, reputation: action.rep };
        case SET_PROFILE_USER_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, userError: action.message, fetchingUser: false }
        case FETCH_PROFILE_CHARACTERS_START:
            return { ...state, fetchingCharacters: true };
        case FETCH_PROFILE_CHARACTERS_END:            
            return { ...state, fetchingCharacters: false, characters: action.payload };
        case FETCH_PROFILE_CHARACTER_START:
            return { ...state, fetchingCharacter: true };
        case FETCH_PROFILE_CHARACTER_END:            
            return { ...state, fetchingCharacter: false, character: action.payload };
        case SET_PROFILE_CHARACTERS_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, characterError: action.message, fetchingCharacters: false }
        default:
            return state;
    }
}
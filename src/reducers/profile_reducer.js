// eslint-disable-next-line
import * as Types from '../actions/types';

const INITIAL_STATE = {
    characters: {},
    character: null,
    fetchingCharacters: false,
    fetchingCharacter: false,
    fetchingUser: false,
    fetchingNightfall: false,
    fetchingTrials: false,
    fetchingPvp: false,
    user: {},
    nightfallNormal: {},
    nightfallHeroic: {},
    pvp: {},
    trials: {},
    trialsGames: {},
    pvpError: {},
    trialsError: {},
    userError: null,
    reputation: {},
    reputationError: null,
    characterError: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.FETCH_PROFILE_USER_START:
            return { ...state, fetchingUser: true };
        case Types.FETCH_PROFILE_USER_END:
            return { ...state, fetchingUser: false, user: action.payload, reputation: action.rep };
        case Types.SET_PROFILE_USER_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, userError: action.message, fetchingUser: false }
        case Types.FETCH_PVP_START:
            return { ...state, fetchingPvp: true, pvpError: null };
        case Types.FETCH_PVP_END:
            return { ...state, fetchingPvp: false, pvp: action.payload };
        case Types.SET_PVP_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, pvpError: action.message, pvpCharacters: false }
        case Types.FETCH_TRIALS_START:
        console.log("in trials reducer start")
            return { ...state, fetchingTrials: true, trialsError: null };
        case Types.FETCH_TRIALS_END:
        console.log("in trials reducer end")
            return { ...state, fetchingTrials: false, trials: action.payload, trialsGames: action.games };
        case Types.SET_TRIALS_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, trialsError: action.message, trialsCharacters: false }
        case Types.FETCH_NIGHTFALL_START:
            return { ...state, fetchingNightfall: true, nightfallError: null };
        case Types.FETCH_NIGHTFALL_END:
            return { ...state, fetchingNightfall: false, nightfallNormal: action.normPayload, nightfallHeroic: action.presPayload };
        case Types.SET_NIGHTFALL_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, nightfallError: action.message, fetchingNightfall: false }
        case Types.FETCH_PROFILE_CHARACTERS_START:
            return { ...state, fetchingCharacters: true };
        case Types.FETCH_PROFILE_CHARACTERS_END:
            const first = Object.entries(action.payload)[0]
            const character = {
                id: first[0],
                type: first[1].character_type
            }
            return { ...state, fetchingCharacters: false, characters: action.payload, character: character };
        case Types.CHANGE_CHARACTER:
            return { ...state, character: action.payload, characterError: null };
        case Types.SET_PROFILE_CHARACTERS_ERROR:
            console.log("setting error in reducer", action.message)
            return { ...state, characterError: action.message, fetchingCharacters: false }
        default:
            return state;
    }
}
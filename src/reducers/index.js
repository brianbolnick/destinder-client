import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ProfileReducer from './profile_reducer';
import LfgPostsReducer from './lfg_posts_reducer';
import FireteamsReducer from './fireteams_reducer';
import FireteamPlayerReducer from './fireteam_player_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    routing: routerReducer,
    lfgPosts: LfgPostsReducer,
    fireteam: FireteamsReducer,
    fireteamPlayer: FireteamPlayerReducer,
    profile: ProfileReducer,
    form: formReducer
});
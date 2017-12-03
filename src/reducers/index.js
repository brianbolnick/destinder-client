import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import LfgPostsReducer from './lfg_posts_reducer';
import FireteamsReducer from './fireteams_reducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    routing: routerReducer,
    lfgPosts: LfgPostsReducer,
    fireteam: FireteamsReducer,
    form: formReducer
});
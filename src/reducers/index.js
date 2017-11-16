import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import LfgPostsReducer from './lfg_posts_reducer';

export default combineReducers({
    routing: routerReducer,
    lfgPosts: LfgPostsReducer

});
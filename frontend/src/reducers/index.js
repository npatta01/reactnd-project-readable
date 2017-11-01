import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import posts from "./posts";
import categories from "./categories";


export default combineReducers({
    router: routerReducer,
    posts,
    categories

})
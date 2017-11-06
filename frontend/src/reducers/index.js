import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import posts from "./posts";
import categories from "./categories";
import {reducer as formReducer} from 'redux-form'
import comments from "./comments";


export default combineReducers({
    router: routerReducer,
    posts,
    categories,
    comments,
    form: formReducer


})
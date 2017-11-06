// https://github.com/anirudhramanan/Readable/blob/master/readable-client/src/reducers/post.js
// https://github.com/JesseRWeigel/udacity-reactnd-readable/blob/master/src/utils/post_api_util.js
// https://github.com/ryanwaite28/react-readable/blob/master/src/actions/index.js

import * as Types from "../actions/actionTypes"

function posts(state = {
    all: [],
    current: null,
    sortOrder: 'posted'
}, action) {

    switch (action.type) {
        case Types.FETCH_POSTS:
            return {...state, all: action.posts};


        case Types.DELETE_POST:
            const posts = state.all.filter((p) => p.id !== action.id)
            return {...state, all: posts};


        case Types.UPDATE_SORT:
            return {...state, sortOrder: action.sortOrder.toLowerCase()};


        case Types.ADD_POST:
        case Types.FETCH_POST:
        case Types.UPDATE_POST:
        case Types.UPDATE_POST_SCORE:
            const subPosts = state.all.filter((p) => p.id !== action.post.id)
            const newPosts = [...subPosts, action.post]
            return {...state, all: newPosts, current: action.post.id};

        default:
            return state

    }
}

export default posts
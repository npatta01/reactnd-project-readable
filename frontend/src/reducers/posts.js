// https://github.com/anirudhramanan/Readable/blob/master/readable-client/src/reducers/post.js
// https://github.com/JesseRWeigel/udacity-reactnd-readable/blob/master/src/utils/post_api_util.js
// https://github.com/ryanwaite28/react-readable/blob/master/src/actions/index.js

import * as Types from "../actions/actionTypes"

function posts(state = {
    all: []
}, action) {

    switch (action.type) {
        case Types.FETCH_POSTS:
            return {...state, all: action.posts};

        default:
            return state

    }
}

export default posts
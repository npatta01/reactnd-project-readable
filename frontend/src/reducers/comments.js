// https://github.com/anirudhramanan/Readable/blob/master/readable-client/src/reducers/post.js
// https://github.com/JesseRWeigel/udacity-reactnd-readable/blob/master/src/utils/post_api_util.js
// https://github.com/ryanwaite28/react-readable/blob/master/src/actions/index.js

import * as Types from "../actions/actionTypes"

function comments(state = {
    all: []
}, action) {

    switch (action.type) {
        case Types.FETCH_COMMENTS:
            return {...state, all: action.comments};

        default:
            return state

    }
}

export default comments
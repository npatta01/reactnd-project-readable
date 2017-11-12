import * as Types from "../actions/actionTypes"
import {sortBy} from "lodash";

function comments(state = {
    all: []
}, action) {

    let newComments = [];
    let subComments = []
    switch (action.type) {
        case Types.FETCH_COMMENTS:
            return {...state, all: action.comments};


        case Types.ADD_COMMENT:
        case Types.UPDATE_COMMENT:
        case Types.VOTE_COMMENT:
            subComments = state.all.filter((c) => c.id !== action.comment.id)
            newComments = sortBy([...subComments, action.comment], ['timestamp']).reverse();
            return {...state, all: newComments};

        case Types.DELETE_COMMENT:
            newComments = state.all.filter((c) => c.id !== action.comment.id)
            return {...state, all: newComments};

        default:
            return state

    }
}

export default comments
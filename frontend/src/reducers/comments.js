import * as Types from "../actions/actionTypes"

function comments(state = {
    all: []
}, action) {

    switch (action.type) {
        case Types.FETCH_COMMENTS:
            return {...state, all: action.comments};


        case Types.ADD_COMMENT:
        case Types.UPDATE_COMMENT:
        case Types.VOTE_COMMENT:
            const subComments = state.all.filter((c) => c.id !== action.comment.id)
            const newComments = [...subComments, action.comment]
            return {...state, all: newComments};

        case Types.DELETE_COMMENT:
            const comments = state.all.filter((c) => c.id !== action.comment.id)
            return {...state, all: comments};

        default:
            return state

    }
}

export default comments
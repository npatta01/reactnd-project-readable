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

        case Types.SET_CURRENT_POST:
            return {...state, current: action.postId};
        case Types.UPDATE_COMMENT_COUNT:
            const _subPosts = state.all.filter((p) => p.id !== action.postId)
            let post = state.all.filter((p) => p.id===action.postId)[0]
            const currentCommentCount = post.commentCount + action.counter
            post= {...post,commentCount:currentCommentCount}
            const _newPosts = [..._subPosts, post]
            return {...state, all: _newPosts};



        default:
            return state

    }
}

export default posts
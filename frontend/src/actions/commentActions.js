import BlogApi from "../blogApi";
import * as Types from './actionTypes'

const uuid = require('uuid-v4');

export const fetchComments = (postId) => {
    return (dispatch) => {
        BlogApi.getPostComments(postId).then(response => {
            const comments = response.data;
            dispatch({type: Types.FETCH_COMMENTS, postId, comments})
        });
    }
}

export const createComment = (comment, parentId) => {
    let updatedComment = {...comment, parentId, id: uuid(), timestamp: new Date().getTime()}
    return (dispatch) => {
        BlogApi.addComment(updatedComment).then(response => {
            const _comment = response.data;
            dispatch({type: Types.ADD_COMMENT, comment: _comment})
        })
    }
}

export const deleteComment = (comment) => {
    return (dispatch) => {
        BlogApi.deleteComment(comment.id).then(() =>
            dispatch({type: Types.DELETE_COMMENT, comment})
        );
    }
}

export const voteComment = (commentId, option) => {
    return (dispatch) => {
        BlogApi.voteComment(commentId, option).then(response => {
            const updatedComment = response.data;
            dispatch({type: Types.VOTE_COMMENT, comment: updatedComment})
        })
    }
}

export const updateComment = (comment) => {
    return (dispatch) => {
        BlogApi.updateComment(comment)
            .then(response => {
                const updatedComment = response.data;
                dispatch({type: Types.UPDATE_COMMENT, comment: updatedComment})
            })
    }
}

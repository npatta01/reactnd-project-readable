import BlogApi from "../blogApi";
import * as Types from './actionTypes'

export const fetchComments = (postId) =>{
    return (dispatch) =>{
        BlogApi.getPostComments(postId).then (comments =>{
           dispatch({type: Types.FETCH_COMMENTS, postId, comments})
        });
    }
}


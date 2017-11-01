import * as Types from "./actionTypes"

import BlogApi from "../blogApi";

export const fetchAllPosts = () => {
    return (dispatch) => {
        BlogApi.getPosts().then(posts => {
            dispatch({type: Types.FETCH_POSTS, posts})
        })
    }
}


export const fetchPostsInCategory = (category) => {
    return (dispatch) => {
        BlogApi.getPosts(category).then(posts => {
            dispatch({type: Types.FETCH_CATEGORY, posts, category})
        })
    }
}
import * as Types from "./actionTypes"
import {history} from "../history";

import BlogApi from "../blogApi";

const uuid = require('uuid-v4');

export const fetchAllPosts = () => {
    return (dispatch) => {
        BlogApi.getPosts().then(response => {
            const posts = response.data;
            dispatch({type: Types.FETCH_POSTS, posts})
        })
    }
};


export const fetchPostsInCategory = (category) => {
    return (dispatch) => {
        BlogApi.getPosts(category).then(response => {
            const posts = response.data;
            dispatch({type: Types.FETCH_CATEGORY, posts, category})
        })
    }
};

export const fetchPost = (postId) => {
    return (dispatch) => {
        BlogApi.getPost(postId).then(response => {
                const post = response.data;
                if (post && post.deleted === false) {
                    dispatch({type: Types.FETCH_POST, post})
                } else {
                    history.push(`/error`)
                }
            }
        )
    }
};

export const createPost = (data) => {
    return (dispatch) => {
        let postData = {
            ...data, id: uuid(), voteScore: 0, deleted: false,
            commentCount: 0, timestamp: new Date().getTime()
        };
        BlogApi.createPost(postData).then(response => {
            const post = response.data;
            dispatch({type: Types.ADD_POST, post});
            history.push(`/posts/${post.id}`)
        })
    }
};

export const updatePost = (data) => {
    return (dispatch) => {
        BlogApi.updatePost(data).then((response) => {
            const post = response.data;
            dispatch({type: Types.UPDATE_POST, post});
            history.push(`/posts/${post.id}`)

        });
    }
};

export const deletePost = (data) => {
    return (dispatch) => {
        BlogApi.deletePost(data.id).then(response => {
            const post = response.data;
            dispatch({type: Types.DELETE_POST, id: post.id});
            history.goBack()
        })
    }
};

export const updateSortOrder = (sortOrder) => {

    return {type: Types.UPDATE_SORT, sortOrder: sortOrder}
};

export const votePost = (postId, option) => {
    return (dispatch) => {
        BlogApi.updatePostScore(postId, option).then(response => {
            const post = response.data;
            dispatch({type: Types.UPDATE_POST_SCORE, post, sortOrder: option})
        })
    }
};

export const setCurrentPost = (postId) => {

    return {type: Types.SET_CURRENT_POST, postId}
};

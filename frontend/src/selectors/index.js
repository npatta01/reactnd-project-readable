import { createSelector } from 'reselect'
import sortBy from 'lodash/sortBy';


const getCurrentCategory = (state) => state.categories.current
const getPosts = (state) => state.posts.all
const getCurrentSortOrder = (state) => state.posts.sortOrder


export const getCurrentPosts = createSelector  (
    [getPosts,getCurrentCategory,getCurrentSortOrder] ,
    (allPosts,category, sortOrder) =>{
        let posts = allPosts;

        if (category!=="all"){
            posts = posts.filter((p)=>p.category ===category);
        }

        if (sortOrder==="posted"){
            posts = sortBy(posts, ['timestamp']).reverse();

        }else{
            posts = sortBy(posts, ['voteScore']).reverse();
        }

        return posts

    }
)


const getCurrentPostId = (state) => state.posts.current

export const getCurrentPost = createSelector  (
    [getPosts,getCurrentPostId] ,
    (allPosts,postId) =>{

        let subPosts = allPosts.filter((p)=>p.id===postId);

        if (subPosts.length===0){
            return null
        }else{
            return subPosts[0]
        }

    }
)
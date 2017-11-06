import React, {Component} from 'react';
import PostEditForm from "./PostEditForm";
import {connect} from 'react-redux'
import {createPost, fetchPost, updatePost} from "../actions/postActions";
import {getCurrentPost} from "../selectors/index";


class AddPostPage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    componentDidMount() {
        this.props.fetchData(this.props.match.params.postId)
    }

    createPost = (data) => {
        console.log(data)
        this.props.createPost(data);
    }

    render() {
        const {categories, post} = this.props;
        let initialValues = {...post};

        return (
            <div>
                <h2>Add post Page</h2>
                <PostEditForm onSubmit={this.createPost} categories={categories} initialValues={initialValues}/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    post: getCurrentPost(state),
    categories: state.categories.all
})

const mapDispatchToProps = dispatch => ({
    dispatch,
    createPost: (data) => {
        if (data.id) {
            dispatch(updatePost(data))
        } else {
            dispatch(createPost(data))
        }
    },
    fetchData: (postId) => {
        dispatch(fetchPost(postId));

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage)

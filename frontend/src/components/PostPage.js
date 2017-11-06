import React, {Component} from 'react';
import Post from "./Post";
import PropTypes from 'prop-types'
import {fetchPost} from "../actions/postActions";
import {connect} from 'react-redux'
import {getCurrentPost} from "../selectors/index";
import {fetchComments} from "../actions/commentActions";
import CommentContainer from "./CommentContainer";

class PostPage extends Component {
    constructor() {
        super()
    }

    static propTypes = {
    }

    componentDidMount() {
        this.props.fetchData(this.props.match.params.postId)
    }

    render() {
        const {post,comments} = this.props;

        if (post) {
            const commentsViews = comments.map((c) => <CommentContainer key={c.id} comment={c} isEdit={false}/>);

            return (

                <div>
                    <Post post={post}>
                    </Post>
                    <div>
                        <h3> Comments </h3>
                        {commentsViews}
                        <h3>
                            Add your voice
                        </h3>
                        <div>
                            <CommentContainer isEdit={true} toggleDisabled={true}/>
                        </div>

                    </div>
                </div>

            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => ({
    comments: state.comments.all,
    post: getCurrentPost(state)
})

const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchData: (postId) => {
        dispatch(fetchPost(postId));
        dispatch(fetchComments(postId));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)



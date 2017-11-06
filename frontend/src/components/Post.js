import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import PropTypes from 'prop-types'
import {timeAgo} from "../utils";
import {Link} from 'react-router-dom'

import {history} from "../history";


import Vote from "./Vote";

import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';

import {connect} from 'react-redux'


import './style.css';
import {votePost} from "../actions/postActions";

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class PostView extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    }

    editPost = () => {
        const {post} = this.props;

        history.push(`/posts/${post.id}/edit`)
    }

    render() {
        const {post, updateVoteScore} = this.props;
        const category = `#${post.category}`;
        const time = timeAgo(post.timestamp);
        const profileUrl = `https://api.adorable.io/avatars/40/${post.author}`

        const titleElem = <Link to={`/posts/${ post.id }`}> {post.title}</Link>;
        return (
            <Card className="post">
                <CardHeader
                    title={post.author}
                    subtitle={time}
                    avatar={profileUrl}
                />

                <CardTitle title={titleElem}>
                </CardTitle>
                <CardText>
                    {post.body}
                </CardText>

                <div style={styles.wrapper}>
                    <Chip style={styles.chip}>
                        {category}
                    </Chip>

                </div>


                <CardActions>


                    <FlatButton
                        icon={<Delete/>}
                    />

                    <FlatButton
                        icon={<Edit/>} onClick={this.editPost}
                    />

                    <Vote voteScore={post.voteScore} onVote={updateVoteScore}/>

                </CardActions>


            </Card>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.all
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    deletePost: (posts) => {

    },
    updateVoteScore: (action) => {
        const {post} = ownProps;
        dispatch(votePost(ownProps.post.id, action))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)

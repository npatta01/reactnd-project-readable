import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import Vote from "./Vote";
import Avatar from 'material-ui/Avatar';
import '../App.css';
import Delete from 'material-ui/svg-icons/action/delete';
import {timeAgo} from "../utils";

class CommentView extends Component {
    constructor() {
        super()
    }

    render() {

        const {comment,onDelete} = this.props;
        const profileUrl = `https://api.adorable.io/avatars/40/${comment.author}`

        const time = timeAgo(comment.timestamp);

        const {updateVoteScore} = this.props;

        return (
            <Paper zDepth={1}>

                <div>

                    <div className="commentContainer">

                        <div className="commentContainerTop">
                            <Avatar src={profileUrl} className="commentAvatar"/>
                            <div>
                                <div>
                                    {comment.author}
                                </div>
                                <div>
                                    {time}

                                </div>


                            </div>
                        </div>

                        <div className="commentContainerBottom">
                            <p>
                                {comment.body}
                            </p>

                            <FlatButton
                                icon={<Delete/>}
                                onClick={onDelete}
                            />




                            {/*<FlatButton
                                icon={<Edit/>}
                            />*/}
                            <Vote voteScore={comment.voteScore} onVote={updateVoteScore}/>
                        </div>


                    </div>


                </div>
            </Paper>
        )

    }


}

export default CommentView;

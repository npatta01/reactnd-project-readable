import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

import Avatar from 'material-ui/Avatar';
import '../App.css';
import {Field, reduxForm} from 'redux-form';
import {TextField,} from 'redux-form-material-ui';
import {getProfileUrl} from "../utils";

const required = value => (value == null ? 'Required' : undefined);

class CommentEdit extends Component {
    render() {

        let {comment} = this.props;

        if (comment === undefined) {
            comment = {author: 'guestuser', body: '', voteScore: 0, timestamp: new Date().getTime(), deleted: false}
        }

        const profileUrl = getProfileUrl(comment.author)

        const {handleSubmit, invalid, onSubmit} = this.props;

        return (
            <Paper zDepth={1}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        <div className="commentContainer">

                            <div className="commentContainerTop">
                                <Avatar src={profileUrl} className="commentAvatar"/>
                                <div>
                                    <Field
                                        name="author"
                                        component={TextField}
                                        defaultValue={comment.author}
                                        validate={required}
                                        ref="comment"
                                        withRef
                                        multiLine={true}

                                    />


                                </div>
                            </div>

                            <div>
                                <div>
                                    <Field
                                        name="body"
                                        component={TextField}
                                        hintText="Post Comment"
                                        floatingLabelText="body"
                                        validate={required}
                                        ref="body"
                                        withRef
                                        multiLine={true}

                                    />
                                </div>
                                <div>
                                    <FlatButton label="Submit" primary={true} type="submit" disabled={invalid}/>

                                </div>
                            </div>


                        </div>


                    </div>
                </form>
            </Paper>
        )

    }


}

function mapStateToProps(state, props) {
    console.log(props)
    const commentID = props.comment ? props.comment.id : 'new'
    return {
        form: `editComment-${commentID}`
    };
}

export default connect(mapStateToProps)(reduxForm({enableReinitialize: true})(CommentEdit));

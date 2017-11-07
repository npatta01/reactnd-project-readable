import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import Toggle from 'material-ui/Toggle';

import Vote from "./Vote";
import Avatar from 'material-ui/Avatar';
import '../App.css';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import {timeAgo} from "../utils";
import {Field, reduxForm, formValueSelector} from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
    SelectField,
    TextField,
} from 'redux-form-material-ui';

const required = value => (value == null ? 'Required' : undefined);

class CommentEdit extends Component {
    constructor() {
        super()
    }

    render() {

        let {comment} = this.props;

        if (comment === undefined) {
            comment = {author: 'guestuser', body: '', voteScore: 0, timestamp: new Date().getTime(), deleted: false}
        }

        const profileUrl = `https://api.adorable.io/avatars/40/${comment.author}`

        const {handleSubmit, pristine, reset, submitting, invalid, onSubmit, categories} = this.props;

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

/*
const selector = formValueSelector('editComment');

CommentEdit = connect(state => ({}))(CommentEdit);

CommentEdit = reduxForm({
    form: 'editComment'})(CommentEdit);




export default CommentEdit;
*/

function mapStateToProps(state, props) {
    console.log(props)
    const commentID = props.comment ? props.comment.id : 'new'
    return {
        form: `editComment-${commentID}`
    };
}

export default connect(mapStateToProps)(reduxForm({enableReinitialize: true})(CommentEdit));

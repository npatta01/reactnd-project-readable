import React, {Component} from 'react';
import PropTypes from 'prop-types'

import '../App.css';
import CommentView from "./CommentView";
import CommentEdit from "./CommentEdit";
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
import {createComment, deleteComment, updateComment, voteComment} from "../actions/commentActions";


const style = {
    marginBottom: '10px'
}

class CommentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: this.props.isEdit
        };
    }

    static propTypes = {
        comment: PropTypes.object,
        parentId: PropTypes.string.isRequired,
        isEdit: PropTypes.bool.isRequired
    }

    upsertComment = (data) => {
        this.props.createComment(data)

        if (data.id) {
            this.setState({
                isEdit: !this.state.isEdit
            })
        }
    }

    render() {

        const {comment, toggleDisabled,updateVoteScore,deleteComment} = this.props;
        const {isEdit} = this.state;

        const initialValues = {...comment}
        initialValues['author'] = initialValues.author || "guest"

        let child = null;
        if (isEdit) {
            child = <CommentEdit comment={comment} initialValues={initialValues} onSubmit={this.upsertComment} />
        } else {
            child = <CommentView comment={comment} updateVoteScore={updateVoteScore} onDelete={deleteComment}/>
        }

        return (
            <div style={style}>
                <Paper zDepth={1}>

                    {toggleDisabled ? null :
                        <FlatButton icon={<Toggle
                            label="Edit"
                            onToggle={this.toggle}
                            toggled={isEdit}
                        />}/>}


                    {child}

                </Paper>
            </div>
        )


    }


    toggle = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })

    }

}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
    createComment: (data) => {
        if (data.id) {
            dispatch(updateComment(data))

        } else {
            data.parentId = ownProps.parentId
            dispatch(createComment(data, ownProps.parentId))
        }
    },
    updateVoteScore: (action) => {
        const {comment} = ownProps;
        dispatch(voteComment(comment.id, action))
    },
    deleteComment: () =>{
        const {comment} = ownProps;
        dispatch(deleteComment(comment))
    }


})

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)



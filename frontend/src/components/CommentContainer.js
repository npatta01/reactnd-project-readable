import React, {Component} from 'react';
import PropTypes from 'prop-types'

import '../App.css';
import CommentView from "./CommentView";
import CommentEdit from "./CommentEdit";
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';


const style = {
    marginBottom:'10px'
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
        isEdit: PropTypes.bool.isRequired
    }
    render() {

        const {comment,toggleDisabled} = this.props;
        const {isEdit} = this.state;

        const initialValues = {...comment, author: comment ? comment.author : 'guest'}

        let child =null;
        if (isEdit) {
            child= <CommentEdit comment={comment} initialValues={initialValues} />
        } else {
            child= <CommentView comment={comment}  />
        }

        return (
            <div style={style}>
                <Paper zDepth={1}>

                    {toggleDisabled? null :
                        <FlatButton icon={<Toggle
                            label="Edit"
                            onToggle={this.toggle}
                        />}/>}


                {child}

                </Paper>
            </div>
        )


    }


    toggle = () =>{
        this.setState({
            isEdit: !this.state.isEdit
        })

    }

}

export default CommentContainer;

import React, {Component} from 'react';
import {red500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import PropTypes from 'prop-types'


class Vote extends Component {
    constructor() {
        super()
    }

    static propTypes = {
        voteScore: PropTypes.number.isRequired,
        onVote: PropTypes.func.isRequired
    }

    upVote = () => {
        this.props.onVote('upVote')
    }
    downVote = () => {
        this.props.onVote('downVote')
    }

    render() {
        const {voteScore} = this.props;

        return (
            <span>
                <FlatButton
                    icon={<ThumbUp color={red500}/>}
                    onClick={this.upVote}
                />

                {voteScore}

                <FlatButton
                    icon={<ThumbDown color={red500}/>}
                    onClick={this.downVote}
                />


            </span>
        )
    }
}

export default Vote;

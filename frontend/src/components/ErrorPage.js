import React, {Component} from 'react';
import {connect} from 'react-redux'


class ErrorPage extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <h2>404</h2>
                <p> Page Not Found :(</p>
            </div>
        );
    }
}


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage)

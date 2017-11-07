import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class CategoryPage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    renderCategory(category) {
        const {name, path} = category;
        return (
            <div key={name}>
                <Link to={path}><h2>{name} </h2></Link>
            </div>
        )
    }

    render() {
        const {categories} = this.props;
        const categoryViews = categories.map((c) => this.renderCategory(c))
        return (
            <div>
                <h2>Category Page</h2>

                <div>
                    {categoryViews}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    categories: state.categories.all
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)


import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function CategoryPage(props) {
    function categoryViews() {
        const {categories} = props;
        const renderCategories = categories.map((category) => {
            return (
                <div key={category.name}>
                    <Link to={category.path}><h2>{category.name} </h2></Link>
                </div>
            );
        });
        return renderCategories;
    }

    return (
        <div>
            <h2>Category Page</h2>
            <div>
                {categoryViews()}
            </div>
        </div>
    );
}


const mapStateToProps = state => ({
    categories: state.categories.all
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)


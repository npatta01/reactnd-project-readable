
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import NavigationDrawer from "./NavigationDrawer";
import './style.css';
import PostList from "./PostList";
import {fetchCategories} from "../actions/categoryActions";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentPosts} from "../selectors/index";
import {updateSortOrder} from "../actions/postActions";
const queryString = require('query-string');



class HomePage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    navigateToAdd = () =>{
        this.props.history.push("/add");
    }

    sortChange  = (sortOrder) =>{
        this.props.updateSortOrder(sortOrder);
    }


    renderPageTitle() {
        const {category} = this.props;
        if (this.props.category==="all"){
            return (<h2>Trending Posts</h2>)
        }else{
            return (<h2>{category.toUpperCase()} Posts</h2>)
        }


    }

    render() {

        let forceNavDown = {'top': '64px'}
        const {posts} = this.props;

        return (
            <div className="Category">

                {this.renderPageTitle()}
                <div>
                    <PostList posts={posts} sortChange={this.sortChange}/>

                </div>
                <div>

                    <FloatingActionButton className='addButton' onClick={this.navigateToAdd}>
                        <ContentAdd/>

                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    posts: getCurrentPosts(state),
    category: state.categories.current
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    dispatch,
    fetchData: () => {
        const sortOrder = queryString.parse(ownProps.location.search) || 'posted'
        const category = this.props.match.params.category || 'all';
        dispatch(updateSortOrder(sortOrder))
        dispatch(fetchCategories());
    },
    updateSortOrder: (sortOrder) =>{
        dispatch(updateSortOrder(sortOrder))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

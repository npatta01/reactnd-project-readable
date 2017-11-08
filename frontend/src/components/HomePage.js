
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import './style.css';
import PostList from "./PostList";
import {fetchCategories, setCurrentCategory} from "../actions/categoryActions";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentPosts} from "../selectors/index";
import {setCurrentPost, updateSortOrder} from "../actions/postActions";
const queryString = require('query-string');



class HomePage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    navigateToAdd = () =>{
        this.props.setCurrentPost(null);
        this.props.history.push("/add");
    }

    sortChange  = (sortOrder) =>{
        this.props.updateSortOrder(sortOrder);
    }

    componentWillMount() {
        this.props.setCurrentPost(null);
        this.callFetchData(this.props)
    }


    callFetchData(props){
        const sortOrder = queryString.parse(props.location.search).voteScore
        const category = props.match.params.category

        this.props.fetchData(sortOrder,category)
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.location.search.voteScore !== this.props.location.search.voteScore
        || prevProps.match.params.category !== this.props.match.params.category){
           this.callFetchData(this.props)
            //const k = 7;
        }

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
    fetchData: (sortOrder,category) => {
        const _sortOrder = sortOrder || 'posted'
        const _category = category || 'all';
        dispatch(updateSortOrder(_sortOrder));
        dispatch(setCurrentCategory(_category));
    },

    updateSortOrder: (sortOrder) =>{
        dispatch(updateSortOrder(sortOrder))
    },

    setCurrentPost : (postId) =>{
        dispatch(setCurrentPost(postId))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

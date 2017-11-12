import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Post from "./Post";
import PropTypes from 'prop-types'

class PostList extends Component {
    constructor() {
        super()
        this.state = {sortOrder: "posted"};
    }

    static propTypes = {
        posts: PropTypes.array.isRequired,
        sortChange: PropTypes.func.isRequired
    }


    handleSortChange = (event, index, value) => {
        this.props.sortChange(value);
        this.setState({
            sortOrder: value
        })
    }

    render() {
        const {posts, sortChange} = this.props;
        const postItems = posts.map((p) => <Post key={p.id} post={p}/>);

        return (
            <div>

                <div>
                    <DropDownMenu value={this.state.sortOrder} onChange={this.handleSortChange}>
                        <MenuItem value="posted" primaryText="Posted"/>
                        <MenuItem value="likes" primaryText="Likes"/>
                    </DropDownMenu>
                </div>
                {postItems}

            </div>
        );
    }
}

export default PostList
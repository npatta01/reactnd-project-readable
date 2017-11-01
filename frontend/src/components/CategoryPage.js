import React, { Component } from 'react';

class CategoryPage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    render() {
        return (
            <div className="Category">
                <h2>Category Page</h2>
            </div>
        );
    }
}

export default CategoryPage
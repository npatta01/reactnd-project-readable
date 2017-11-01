import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationDrawer from "./NavigationDrawer";


class HomePage extends Component {
    constructor() {
        super()
        this.state = {title: ''}
    }

    render() {
        let forceNavDown = {'top': '64px'}

        return (
            <div className="Category">

                <h2>Home Page</h2>
                <div>
                    <RaisedButton label="Default"/>

                </div>
                <div>


                </div>
            </div>
        );
    }
}

export default HomePage
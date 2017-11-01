import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class NavigationDrawer extends Component {

    static propTypes = {
        onToggleDrawer: PropTypes.func.isRequired
    }

    constructor() {
        super()
        this.state = {title: ''}
    }

    render() {
        let forceNavDown = {'top': '64px'};

        let {onToggleDrawer} = this.props;

        return (

            <div>
                <Drawer open={true} containerStyle={forceNavDown}>

                    <MenuItem
                        containerElement={<Link to="/home"/>}
                    >Home
                    </MenuItem>
                    <MenuItem
                        containerElement={<Link to="/about"/>}>
                        Categories</MenuItem>

                </Drawer>
            </div>
        )

    }
}


export default NavigationDrawer
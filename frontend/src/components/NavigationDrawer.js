import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class NavigationDrawer extends Component {

    static propTypes = {
        openState : PropTypes.bool.isRequired
    }

    constructor() {
        super()
        this.state = {title: ''}
    }

    handleClose = (open) => {
        console.log(open)
    };


    render() {
        let forceNavDown = {'top': '64px'};

        let {openState} = this.props;

        return (

            <div>
                <Drawer open={openState}
                        containerStyle={forceNavDown}>

                    <MenuItem
                        containerElement={<Link to="/"/>}
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
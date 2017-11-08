import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
                        containerElement={<Link to="/postcategories"/>}>
                        Categories</MenuItem>

                </Drawer>
            </div>
        )

    }
}


export default NavigationDrawer
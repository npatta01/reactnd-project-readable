import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationDrawer from "./NavigationDrawer";
import {fetchCategories} from "../actions/categoryActions";
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {fetchAllPosts} from "../actions/postActions";


class MainLayout extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
            , navDrawerOpen: true

        }
    }

    componentWillMount() {
        this.props.fetchData()
    }


    toggleDrawer = (open) => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        })
    }

    render() {
        const paddingLeftDrawerOpen = 270;
        let {navDrawerOpen} = this.state;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                //margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
                // minHeight: '800px'
                paddingTop: '80px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //minWidth: '500px'

            },
            appBar: {
                position: "fixed", top: 0,
            }
        };

        return (
            <div>
                <div>
                    <AppBar
                        title="Readable"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.toggleDrawer}
                        style={styles.appBar}
                    >

                    </AppBar>
                </div>

                <div>
                    <NavigationDrawer
                        openState={navDrawerOpen}/>

                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>


            </div>


        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
    dispatch,
    fetchData: () => {
        dispatch(fetchCategories());
        dispatch(fetchAllPosts())
    }

})

// export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout))


/*
                        onToggleDrawer={this.toggleDrawer}/>
*/
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationDrawer from "./NavigationDrawer";
import {fetchCategories} from "../actions/categoryActions";
import {connect} from 'react-redux'
import {withRouter} from 'react-router'


class MainLayout extends Component {
    constructor() {
        super()
        this.state = {
            title: ''
            , navDrawerOpen: true

        }
    }

    componentWillMount() {
        this.props.fetchCategories()
    }


    toggleDrawer() {
        this.setState({
            open: !this.state.open
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
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            }
        };

        return (
            <div>
                <div>
                    <AppBar
                        title="Readable"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    >

                    </AppBar>
                </div>

                <div>
                    <NavigationDrawer onToggleDrawer={this.toggleDrawer.bind(this)}/>
                    <div style={styles.container}>
                        <h2>Body</h2>
                        <div>
                            {this.props.children}

                        </div>
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
    fetchCategories: () =>
        dispatch(fetchCategories())
})

// export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout))



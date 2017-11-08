import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {Route, Switch} from 'react-router';
import thunk from 'redux-thunk';

import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from "./components/MainLayout";
import injectTapEventPlugin from 'react-tap-event-plugin';
import AddPostPage from "./components/AddPostPage";
import PostPage from "./components/PostPage";
import {history} from "./history";

// Create a history of your choosing (we're using a browser history in this case)

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk,logger),
    )
)


//store.dispatch(fetchCategories());
//store.dispatch(fetchAllPosts());

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


ReactDOM.render(
    <Provider store={store}>
        {/* Tell the Router to use our enhanced history */}
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <MainLayout>
                    <Switch>
{/*
                        <Route exact path='/' component={HomePage}/>
*/}
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/add' component={AddPostPage}/>
                        <Route exact path='/posts/:postId' component={PostPage}/>
                        <Route exact path='/posts/:postId/edit' component={AddPostPage}/>
                        <Route path='/postcategories' component={CategoryPage}/>

                        <Route path='/:category' component={HomePage}/>

                    </Switch>
                </MainLayout>
            </MuiThemeProvider>

        </ConnectedRouter>


    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
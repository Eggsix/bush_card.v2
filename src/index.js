import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';


import { AUTH_USER } from './actions/types';
import Home from './components/home';
import requireAuth from './components/auth/require_auth';
import Feature from './components/feature';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Signin from './components/auth/signin';
import App from './components/app';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({type: AUTH_USER });
}


ReactDOM.render(
	<Provider store={ store }>
	  	<Router history={browserHistory}>
	    	<Route path="/" component={App}>
	        <IndexRoute component={Home} />
	    		<Route path="signin" component={Signin} />
	    		<Route path="signout" component={Signout} />
	    		<Route path="signup" component={Signup} />
	        <Route path='feature' component={requireAuth(Feature)} />
	    	</Route>
	    </Router>
	</Provider>
    ,document.getElementById('root')
);

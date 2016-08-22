import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';
//redux thunk gives direct access to dispatch
export function signinUser({ email, password }) {

	return function(dispatch) {
		//make use of any request here
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				//handle success
				//- update sate user is authenticated
				dispatch({ type: AUTH_USER });
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);				
				// - redirect to '/feature'
				browserHistory.push('/feature');
			})
			.catch(() => {
				//handle error
				// - Show an error to the user
				dispatch(authError('Bad Login Info'));
			});
		// Submit email and password to server
	}

}
export function signupUser({email, password}) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(response => dispatch(authError('Email is in use')));
	}
}
export function signoutUser() {
	localStorage.removeItem('token');
	return { type: UNAUTH_USER };
}
export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: {authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch({
					type: FETCH_MESSAGE,
					payload: response.data.message
				})
			});
	}
}
export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}
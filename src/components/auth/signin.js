import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

	formSubmit({email, password}) {
		this.props.signinUser({email, password});
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { fields: {email, password}, handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
				<fieldset className="form-group">
					<label htmlfor="email">Email:</label>
					<input type="email" placeholder="Email" className="form-control" { ...email } />  
				</fieldset>
				<fieldset className="form-group">
					<label htmlfor="password">Email:</label>
					<input type="password" placeholder="Password" className="form-control" { ...password } /> 
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error }
}

export default reduxForm({
	form: 'signin',
	fields: [ 'email', 'password']
}, mapStateToProps, actions)(Signin);
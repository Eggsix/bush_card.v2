import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
class Signup extends Component {
	
	handleFormSubmit(formProps) {
		this.props.signupUser(formProps);
	}

	renderAlert() {
		if(this.props.errorMessage) {
			return (
				<div className='alert alert-danger'>
					<strong>Oops</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {

		const {fields: { email, password, passwordConfirm}, handleSubmit} = this.props;

		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label htmlfor="email">Email:</label>
					<input className="form-control" type="email" { ...email } placeholder="Email" />
					{email.touched && email.error && <div className="error">{email.error}</div>}
				</fieldset>
				<fieldset className="form-group">
					<label htmlfor="email">Email:</label>
					<input className="form-control" type="password" { ...password } placeholder="Password" />
					{password.touched && password.error && <div className="error">{password.error}</div>}
				</fieldset>
				<fieldset className="form-group">
					<label htmlfor="passwordConfirm">Confirm Password:</label>
					<input className="form-control" type="password" { ...passwordConfirm } placeholder="Confirm Password" />
					{passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
				</fieldset>
				{ this.renderAlert()}
				<button className="btn btn-primary" type="submit">Sign up</button>
			</form>
		);
	}
}
function validate(formProps) {
	const errors = {};

	for ( var key in formProps) {
		if (!formProps[key]) {
			errors[key] = `Do not leave field blank`;
		}
	}

	if(formProps.password !== formProps.passwordConfirm) {
		errors.password = "Passwords do not match";
	}
	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
}, mapStateToProps, actions)(Signup);
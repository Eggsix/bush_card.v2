import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

	renderLinks() {
		if( this.props.authenticated ) {
			return  <li className="nav-item">
						<Link to="/signout">Sign out</Link>
					</li>;
		} else {
			return [
					<li className="nav-item" key={1}>
						<Link to="/signin">Sign in</Link>
					</li>,
					<li className="nav-item" key={2}>
						<Link to="/signup">Sign up</Link>
					</li>
			];
		}
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="navbar-brand"><Link to="/">Bush Money</Link></li>
					{this.renderLinks()}
				</ul>
			</nav>
		)
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);
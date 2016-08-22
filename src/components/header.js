import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Header extends Component {

	renderLinks() {
		if (this.props.authenticated) {
			return <li>
				<Link className="button special" to="/signout">Sign Out</Link>
			</li>
		} else {	
			return [
				<li key={1}>
					<Link className="button special" to="/signin">Sign In</Link>
				</li>
			];	
		}
	}
	render() {
		return (
			<header id="header">
				<h1><Link to="/">Bush Money</Link></h1>
				<nav id="nav">	
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/bush_money">Bush Money</Link></li>
						<li><Link to="/bush_money">Shopping</Link></li>
						<li><Link to="/bush_money">Trade</Link></li>
						<li><Link to="/bush_money">FAQs</Link></li>
						{this.renderLinks()}
					</ul>
				</nav>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(Header);
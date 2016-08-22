import React from 'react';
import { Link } from 'react-router';

import Header from './header';
const Home = () => {
	return (
		<div>
			<Header />
			<section id="banner">
				<h2>Enrollment is quick and easy!</h2>
				<ul className="actions">
					<li>
						<Link className="button big" to="/signup">Sign Up</Link>
					</li>
				</ul>
			</section>

			<section id="one" className="wrapper style1 special">
					<div className="container">
						<div className="row 2000%">

							<div className="3u 12u$(medium)">
								<section className="box">
									<h3>Safe</h3>
									<p>The Alaska BushCard is safer than using Cash! Your money is FDIC insured.</p>
								</section>
							</div>

							<div className="3u 12u$(medium)">
								<section className="box">

									<h3>Shop</h3>
									<p>Shop online for better deals — members get exclusive access to BushMall™ and hundreds of great deals!</p>
								</section>
							</div>

							<div className="3u 12u$(medium)">
								<section className="box">

									<h3>Alerts</h3>
									<p>Never lose track of your spending with BushAlerts™ — real time mobile text alerts.</p>
								</section>
							</div>

							<div className="3u 12u$(medium)">
								<section className="box">
									<h3>ATM</h3>
									<p>Access ATMs worldwide - everywhere MasterCard is accepted!
	 								©2015 Alaska BushCard.</p>
								</section>
							</div>

						</div>
					</div>
				</section>
				<section id="two" className="wrapper style2 special">
					<div className="container">
						<header className="major">
							<h2>Coming Soon</h2>
							<p>We are building an intelligent hub for your entire financial life.</p>
						</header>
						<footer>
							<ul>
								<li><p>For people who want to get things done from their smartphone, no need for check books, check cashing or ATMs</p></li>
								<li><p>Make money with us by helping others find good products that fit Alaska lifestyle.</p></li>
								<li><p>Shop with us for the best products at the best prices.</p></li>
								<li><p>Keep the money within the community while building commerce with other communities.</p></li>
								<li><p>We are focused on building the best money tools and community shopping for all Alaskans.</p></li>
							</ul>
						</footer>
					</div>
				</section>
				<section id="three" className="wrapper style2 special">
					<div className="container">	
							<header className="major">
								<h2>When do you launch?</h2>
								<p>We are building an intelligent hub for your entire financial life.</p>
							</header>
							<footer>
								<p>While we are building this community hub, we’ll be going live with PrestigePay Visa® Prepaid Debit cards on August 1st, 2016. These cards can be topped up and used at stores, online and at ATMs. They will allow us to test features with real users like you and work on building our BushMoney community.</p>
								<p>Most small rural and marginalized communities have few jobs and few opportunities, BushMoney will help these communities to build commerce and trade with each other, from farmers in the Matanuska Valley to Ivory carvers in the native villages, let's build Alaska economy from the ground up, buy local, eat local, trade local!</p>
							</footer>
					</div>
				</section>
			</div>
	);
};

export default Home;
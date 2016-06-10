import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div className='container top'>
				<h1>About</h1>
				<div className='col-lg-8 col-md-8 col-sm-10'>
					<p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
					<p>This app is written in ES6 syntax and uses both, class based components and stateless functional components</p>
					<p>
						Basically this is the same app I built using ES5 syntax and the React.createClass({}) but now,
						I'm using ES6, some testing and a Node/Express server.
						Not much testing is going on and I'm just learning to be more comfortable using the new syntax in general.
						I'm really liking it but it takes a little getting used to.
					</p>
					<p>
						The app just lets you view Pluralsight courses and they're authors and let's the user
						perform basic CRUD actions, crete, retrive, update and delete. That's what it's going
						to do now but I'm going to making some changes to the API for something a little more useful
						and or more features.
					</p>
				</div>
			</div>
		);
	}
}

export default AboutPage;

import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div className='container top'>
				<h1>About</h1>
				<div className='col-lg-8 col-md-8 col-sm-10'>
					<p>This application uses React, Redux, React Router and a variety of other helpful libraries for a responsive user experience.</p>
					<p>This app is written in the ES6 syntax and uses both, class based components and stateless functional components.</p>
					<p>
						Basically this is the same app I built using the ES5 syntax with the React.createClass({}) but now,
						I'm using ES6 syntax, with some testing and a Node/Express server.
						I'm just getting use to the new ES6 syntax and the style used with React and Redux.
						I'm really liking it but it takes a little getting used to but that will resolve itself with lots of practice.
					</p>
					<p>
						The app just lets you view Pluralsight courses and they're authors and let's the user
						perform basic CRUD actions, create, retrive, update and delete. That's what it's going
						to do now but I'm going to making some changes to the API for something a little more useful
						and or more features.
					</p>
				</div>
			</div>
		);
	}
}

export default AboutPage;

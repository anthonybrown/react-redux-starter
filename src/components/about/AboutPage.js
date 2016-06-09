import React from 'react';

class AboutPage extends React.Component {
	render() {
		return (
			<div className='container top'>
				<h1>About</h1>
				<div className='col-lg-6 col-md-8 col-sm-8'>
					<p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
					<p>This app is written in ES6 syntax and uses both, class based components and stateless functional components</p>
					<p>
						Basically this is the same app I built using ES5 syntax and the React.createClass({}) but now,
						I'm using ES6, some testing and a Node/Express server.
						Not much testing is going on and I'm just learning to be more comfortable using the new syntax in general.
						I'm really liking it but it takes a little getting used to.
					</p>
				</div>
			</div>
		);
	}
}

export default AboutPage;

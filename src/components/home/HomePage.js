import React  from 'react';
import {Link} from 'react-router';

class	HomePage extends React.Component {
	render() {
		return (
			<div className='jumbotron vertical-center text-center top'container>
				<h1>React Administration</h1>
				<p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
				<Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
			</div>
		);
	}
}

export default HomePage;

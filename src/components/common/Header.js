import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
	return (
		<nav className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<IndexLink to='/'   activeClassName ='active'>Home</IndexLink>
				{' | '}
				<Link to='/about'   activeClassName ='active'>About</Link>
				{' | '}
				<Link to='/courses' activeClassName ='active'>Courses</Link>
			</div>
		</nav>
	);
};

export default Header;


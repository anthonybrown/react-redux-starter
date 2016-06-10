import React, {PropTypes} from 'react';
import {Link, IndexLink}  from 'react-router';
import LoadingDots			  from './LoadingDots';


const Header = ({loading}) => {
	return (
		<nav className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<IndexLink to='/'   activeClassName ='active'>Home</IndexLink>
				{' | '}
				<Link to='/about'   activeClassName ='active'>About</Link>
				{' | '}
				<Link to='/course' activeClassName ='active'>Manage Courses</Link>
				{' | '}
				<Link to='/courses' activeClassName ='active'>Courses</Link>
				{loading && <LoadingDots interval={100} dots={20} />}
			</div>
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;


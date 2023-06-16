import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
	

	return (
		<div className='Header'>
			<div
				className='title'
			>
				<Link to='/'>maciej rzadzinski</Link>
			</div>
			<nav>
				<div className='categories'>
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
						>
							<li className='category'>Portfolio</li>
						</div>
					</NavLink>
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
						>
							<li className='category'>Resume</li>
						</div>
					</NavLink>
					<NavLink to='/browser' className='navLink'>
						<div
							className='category-container'
						>
							<li className='category'>About</li>
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Header;

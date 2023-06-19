import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
	return (
		<div className='Header'>
			<div className='title'>
				<div className='title-name'>
					<Link to='/'>maciej rzadzinski</Link>
				</div>
			</div>
			<nav>
				<div className='categories'>
					<div className='category-container'>
						<NavLink to='/' className='navLink'>
							<li className='category'>Portfolio</li>
						</NavLink>
					</div>
					<div className='category-container'>
						<NavLink to='/about' className='navLink'>
							<li className='category'>About</li>
						</NavLink>
					</div>
					<div className='category-container'>
						<NavLink to='/resume' className='navLink'>
							<li className='category'>Resume</li>
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;

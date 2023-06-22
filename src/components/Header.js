import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
	return (
		<div className='Header'>
			<div className='title'>
				<div className='title-name'>
					<Link to='/about'>maciej rzadzinski</Link>
				</div>
				<div className='contact-info'>
					<Link to='/contact'>contact</Link>
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
						<NavLink to='/skills' className='navLink'>
							<li className='category'>Skills</li>
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;

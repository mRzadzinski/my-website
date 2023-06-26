import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const titleName = useRef(null);
	const portfolio = useRef(null);
	const skills = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	const location = useLocation();

	useEffect(() => {
		setFontWeight();
	}, [location.pathname]);

	function setFontWeight() {
		titleName.current.classList.remove('fat-text');
		portfolio.current.classList.remove('fat-text');
		skills.current.classList.remove('fat-text');
		about.current.classList.remove('fat-text');
		contact.current.classList.remove('fat-text');

		if (location.pathname === '/') {
			titleName.current.classList.add('fat-text');
		} else if (location.pathname === '/portfolio') {
			portfolio.current.classList.add('fat-text');
		} else if (location.pathname === '/skills') {
			skills.current.classList.add('fat-text');
		} else if (location.pathname === '/about') {
			about.current.classList.add('fat-text');
		} else if (location.pathname === '/contact') {
			contact.current.classList.add('fat-text');
		}
	}

	return (
		<div className='Header'>
			<div ref={titleName} className='title-name'>
				<Link to='/'>maciej rzadzinski</Link>
			</div>
			<nav>
				<div className='categories'>
					<NavLink to='/portfolio' className='navLink'>
						<li ref={portfolio} className='category'>
							portfolio
						</li>
					</NavLink>
					<NavLink to='/skills' className='navLink'>
						<li ref={skills} className='category'>
							skills
						</li>
					</NavLink>
					<NavLink to='/about' className='navLink'>
						<li ref={about} className='category'>
							about
						</li>
					</NavLink>
				</div>
			</nav>
			<div ref={contact} className='contact-info'>
				<Link to='/contact'>contact</Link>
			</div>
		</div>
	);
};

export default Header;

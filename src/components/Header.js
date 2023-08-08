import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.scss';
import { useLocation } from 'react-router-dom';

const Header = ({ footer }) => {
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

	let setTransition;
	let makeWhite;
	let removeTransition;

	function clearTimeouts() {
		if (setTransition) clearTimeout(setTransition);
		if (makeWhite) clearTimeout(makeWhite);
		if (removeTransition) clearTimeout(removeTransition);
	}

	function highlightFooter() {
		footer.current.style.transition = 'none';
		footer.current.style.backgroundColor = '#ff0069';

		setTransition = setTimeout(() => {
			footer.current.style.transition = 'all 3s';
		}, 100);
		makeWhite = setTimeout(() => {
			footer.current.style.backgroundColor = 'white';
		}, 200);
		removeTransition = setTimeout(() => {
			footer.current.style.transition = 'none';
		}, 5000);
	}

	function scrollToBottom() {
		footer.current.scrollIntoView();
	}

	return (
		<nav className='Header'>
			<div ref={titleName} className='title-name' onClick={clearTimeouts}>
				<Link to='/'>maciej rzadzinski</Link>
			</div>
			<ul className='categories'>
				<NavLink to='/portfolio' className='navLink'>
					<li ref={portfolio} className='category' onClick={clearTimeouts}>
						portfolio
					</li>
				</NavLink>
				<NavLink to='/skills' className='navLink'>
					<li ref={skills} className='category' onClick={clearTimeouts}>
						skills
					</li>
				</NavLink>
				<NavLink to='/about' className='navLink'>
					<li ref={about} className='category' onClick={clearTimeouts}>
						about
					</li>
				</NavLink>
			</ul>
			<div
				aria-description='Contact info is in the footer. Clicking this element will scroll the website all the way down to the footer.'
				ref={contact}
				className='contact-info'
				onClick={() => {
					clearTimeouts();
					highlightFooter();
					scrollToBottom();
				}}
			>
				<span tabIndex={0}>contact</span>
			</div>
		</nav>
	);
};

export default Header;

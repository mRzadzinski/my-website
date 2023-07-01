import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
	return (
		<div className='Main'>
			<div className='intro'>
				Hello, World!
				<br />
				I’m Maciej Rządziński - Front End Developer. I’m excited
				about new technologies and making the world more interactive.
			</div>
			<div className='more-about-me'>
				<Link to='/about'>more about me</Link>
			</div>
			<div className='see-my-work'>
				<Link to='/about'>see my work</Link>
			</div>
		</div>
	);
};

export default Main;

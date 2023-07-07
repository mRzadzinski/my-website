import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
	return (
		<div className='Main'>
			<div className='intro'>
				Hello, World!
				<br />
				I'm Maciej Rządziński - <span>front end developer</span>,
				<br />
				excited about new technologies and making{' '}
				<nobr>
					the world more <span>interactive</span>{' '}
				</nobr>.
			</div>
			<div className='more-about-me'>
				<Link to='/about'>more about me</Link>
			</div>
			<div className='see-my-work'>
				<Link to='/portfolio'>see my work</Link>
			</div>
		</div>
	);
};

export default Main;

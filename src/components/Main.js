import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
	return (
		<main className='Main'>
			<article className='intro'>
				Hello World,
				<br />
				I'm Maciej Rządziński - <span>frontend developer</span>,
				<br />
				making things work is what I do.
			</article>
			<p className='more-about-me'>
				<Link to='/about'>more about me</Link>
			</p>
			<p className='see-my-work'>
				<Link to='/portfolio'>see my work</Link>
			</p>
		</main>
	);
};

export default Main;

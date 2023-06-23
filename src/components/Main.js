import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
	return (
		<div className='Main'>
			<div className="intro">
				I’m Maciej Rządziński - Front End Developer. I’m excited about new
				technologies and making the world more interactive.
			</div>
			<div className="more-about-me">more about me</div>
		</div>
	);
};

export default Main;

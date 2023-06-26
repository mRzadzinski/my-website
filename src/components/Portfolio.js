import React from 'react';
import '../styles/Portfolio.scss';
import Project from './Project';
import projects from '../portfolio-data';

const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<div className='portfolio-intro'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.{' '}
			</div>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
			<div className='empty-space'></div>
		</div>
	);
};

export default Portfolio;
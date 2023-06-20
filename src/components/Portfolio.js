import React from 'react';
import '../styles/Portfolio.scss';
import Project from './Project';
import projects from '../portfolio-data';

const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<div className='portfolio-title'>Portfolio</div>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</div>
	);
};

export default Portfolio;

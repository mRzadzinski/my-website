import React from 'react';
import '../styles/Portfolio.scss';
import Project from './Project';
import projects from '../portfolio-data';

const Portfolio = () => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<div className='Portfolio'>
			<div className='portfolio-intro'>
				Below you can find five projects I had the most fun with. Each of them
				was an assignment from The Odin Project course; <nobr>however, I</nobr>{' '}
				allowed myself to go beyond the assignments and expanded functionality
				according to my wild fantasies.
				<br />
				For more code feel free to visit my{' '}
				<span onClick={() => openInNewTab('https://github.com/mRzadzinski')}>
					github
				</span>
				.
			</div>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
			<div className='empty-space'></div>
		</div>
	);
};

export default Portfolio;

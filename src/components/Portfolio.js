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
				Below you can find four projects I had the most fun with.
				<br />
				For more code visit my{' '}
				<span onClick={() => openInNewTab('https://github.com/mRzadzinski')}>
					github page
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

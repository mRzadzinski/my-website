import React from 'react';
import '../styles/Portfolio.scss';
import Project from './Project';
import projects from '../portfolio-data';

const Portfolio = () => {
	return (
		<div className='Portfolio'>
			<section className='portfolio-intro'>
				Below you can find four projects I had the most fun with.
				<br />
				For more code visit my{' '}
				<a
					href='https://github.com/mRzadzinski'
					target='_blank'
					rel='noreferrer'
				>
					github page
				</a>
				.
			</section>
			<section>
				{projects.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</section>
		</div>
	);
};

export default Portfolio;

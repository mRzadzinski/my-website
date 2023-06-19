import React from 'react';
import '../styles/Project.scss';
import projects from '../portfolio-data';

const Project = () => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<div className='Project'>
			<div className='project-img-container'>
				<img
					className='project-image'
					src={projects[0].img}
					alt='project-img'
				/>
			</div>
			<div className='project-name'>{projects[0].name}</div>

			<div className='project-description-container'>
				<div className='project-description'>{projects[0].description}</div>
				<div className='project-buttons-container'>
					<button onClick={() => openInNewTab(projects[0].liveLink)}>
						Check live!
					</button>
					<br />
					<button onClick={() => openInNewTab(projects[0].githubLink)}>
						Github repo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;

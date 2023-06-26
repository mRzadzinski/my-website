import React from 'react';
import '../styles/Project.scss';

const Project = ({ project }) => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<div className='Project'>
			<div className='project-title-container'>
				<div className='project-name'>{project.name}</div>
				<div className='project-btns'>
					<button
						className='project-link-btn'
						onClick={() => openInNewTab(project.liveLink)}
					>
						Check live!
					</button>
					<button
						className='project-link-btn'
						onClick={() => openInNewTab(project.githubLink)}
					>
						Github repo
					</button>
				</div>
			</div>

			<div className='project-description'>{project.description}</div>
			<div className='project-img-container'>
				<img className='project-image' src={project.img} alt='project-img' />
			</div>
		</div>
	);
};

export default Project;

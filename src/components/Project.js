import React from 'react';
import '../styles/Project.scss';

const Project = ({ project }) => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	let img;
	if (project.img) {
		img = <img className='project-image' src={project.img} alt='project-img' />;
	} else {
		img = null;
	}

	let liveBtn;
	if (project.liveLink) {
		liveBtn = (
			<button
				className='project-link-btn'
				onClick={() => openInNewTab(project.liveLink)}
			>
				Check live
			</button>
		);
	} else {
		liveBtn = null;
	}

	return (
		<div className='Project'>
			<div className='project-title-container'>
				<div className='project-name'>{project.name}</div>
				<div className='project-btns'>
					{liveBtn}
					<button
						className='project-link-btn'
						onClick={() => openInNewTab(project.githubLink)}
					>
						Github
					</button>
				</div>
			</div>

			<div className='project-description'>{project.description}</div>
			<div className='project-img-container'>{img}</div>
		</div>
	);
};

export default Project;

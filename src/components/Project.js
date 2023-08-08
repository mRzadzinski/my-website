import React from 'react';
import '../styles/Project.scss';

const Project = ({ project }) => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	let img;
	if (project.img) {
		img = (
			<img
				className='project-image'
				src={project.img}
				alt='project-img'
				width={project.imgWidth}
				height={project.imgHeight}
			/>
		);
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
		<article className='Project'>
			<div className='project-title-container'>
				<h1 className='project-name'>{project.name}</h1>
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

			{project.description}
			<div className='project-img-container'>{img}</div>
		</article>
	);
};

export default Project;

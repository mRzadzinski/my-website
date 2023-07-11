import React from 'react';
import '../styles/Footer.scss';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';

const Footer = () => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<div className='Footer'>
			<div className='email'>rzadzinski.maciej@gmail.com</div>
			<div className='github'>
				<img
					onClick={() => openInNewTab('https://github.com/mRzadzinski')}
					className='social-media-icons'
					src={githubIcon}
					alt='github-icon'
				/>
			</div>
			<div className='linkedin'>
				<img
					onClick={() =>
						openInNewTab(
							'https://www.linkedin.com/in/maciej-rzadzinski-28450420b/'
						)
					}
					id='linkedin-icon'
					className='social-media-icons'
					src={linkedinIcon}
					alt='linkedin-icon'
				/>
			</div>
		</div>
	);
};

export default Footer;

import React from 'react';
import '../styles/Contact.scss';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';

const Contact = () => {
	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	return (
		<div className='Contact'>
			<div className='mail-contact'>
				mail me <span id='mail-contact'>rzadzinski.maciej@gmail.com</span>
			</div>

			<div className='see-my-icons'>
				see my
				<div className='github'>
					<img
						onClick={() => openInNewTab('https://github.com/mRzadzinski')}
						className='social-media-icons-contact'
						src={githubIcon}
						alt='github-icon'
					/>
				</div>
				<div className='linkedin'>
					<img
						onClick={() =>
							openInNewTab(
								'https://pl.linkedin.com/in/maciej-rz%C4%85dzi%C5%84ski-28450420b'
							)
						}
						id='linkedin-icon-contact'
						className='social-media-icons-contact'
						src={linkedinIcon}
						alt='linkedin-icon'
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;

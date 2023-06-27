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
			rzadzinski.maciej@gmail.com
			<br />
			github
			<br />
			linkedin
		</div>
	);
};

export default Contact;

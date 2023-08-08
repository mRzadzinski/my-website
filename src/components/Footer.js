import React, { forwardRef, useRef } from 'react';
import '../styles/Footer.scss';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import checkMarkIcon from '../img/check-mark.png';

const Footer = forwardRef((props, ref) => {
	const emailInfo = useRef(null);
	const checkMark = useRef(null);

	function openInNewTab(url) {
		window.open(url, '_blank').focus();
	}

	function showInfo() {
		emailInfo.current.style.display = 'flex';
	}

	function hideInfo() {
		emailInfo.current.style.display = 'none';
		checkMark.current.style.display = 'none';
	}

	function copyMailToClipboard() {
		navigator.clipboard.writeText('rzadzinski.maciej@gmail.com');
		checkMark.current.style.display = 'block';
	}

	return (
		<div className='Footer' ref={ref}>
			<div
				className='email'
				onMouseEnter={showInfo}
				onMouseLeave={hideInfo}
				onClick={copyMailToClipboard}
			>
				<div id='email-info' ref={emailInfo}>
					Copy email to clipboard &nbsp;
					<img
						id='check-mark-icon'
						src={checkMarkIcon}
						alt='check-mark-icon'
						ref={checkMark}
					/>
				</div>
				rzadzinski.maciej@gmail.com
			</div>
			<div className='github'>
				<a
					href='https://github.com/mRzadzinski'
					target='_blank'
					rel='noreferrer'
				>
					<img
						className='social-media-icons'
						src={githubIcon}
						alt='github-icon'
					/>
				</a>
			</div>
			<div className='linkedin'>
				<a
					href='https://www.linkedin.com/in/maciej-rzadzinski-28450420b/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						id='linkedin-icon'
						className='social-media-icons'
						src={linkedinIcon}
						alt='linkedin-icon'
					/>
				</a>
			</div>
		</div>
	);
});

export default Footer;

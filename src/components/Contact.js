import React from 'react';
import '../styles/Contact.scss';
import arrowIcon from '../img/arrow-down.png';

const Contact = () => {
	return (
		<div className='Contact'>
			<div className='arrow-container'>
				<img id='arrow-down' src={arrowIcon} alt='arrow-down' />
			</div>
		</div>
	);
};

export default Contact;

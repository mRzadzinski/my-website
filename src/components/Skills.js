import React from 'react';
import '../styles/Skills.scss';
import { Icon } from '@iconify/react';
import jestIcon from '../img/jest-icon.png';

const Skills = () => {
	return (
		<div className='Skills'>
			<div className='skill-title'>Technologies</div>
			<div className='skills-container'>
				<Icon
					icon='dashicons:html'
					color='rgb(174 83 83)'
					width='60'
					height='60'
				/>
				<Icon icon='vaadin:css' color='#1f72b6' width='60' height='60' />
				<Icon icon='logos:sass' width='60' height='60' />
				<Icon icon='logos:javascript' width='60' height='60' />
				<Icon icon='devicon:react-wordmark' width='70' height='70' />
				<Icon icon='logos:git' width='70' height='70' />
				<Icon icon='logos:github' width='70' height='70' />
				<Icon
					id='webpack-icon'
					icon='devicon:webpack-wordmark'
					width='130'
					height='130'
				/>
				<img id='jest-icon' src={jestIcon} alt='jest' />
			</div>

			<div className='skill-title'>Languages</div>
			<ul>
				<li>English C1</li>
				<li>Polish Native</li>
			</ul>

			<div className='skill-title'>Bonus</div>
			<ul>
				<li>Visual Studio Code</li>
				<li>Slack 2.5 years of remote work</li>
				<li>Microsoft Teams 3 months</li>
				<li>Touch typing</li>
			</ul>
		</div>
	);
};

export default Skills;

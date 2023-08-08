import React from 'react';
import '../styles/Skills.scss';
import { Icon } from '@iconify/react';
import jestIcon from '../img/jest-icon.png';

const Skills = () => {
	return (
		<article className='Skills'>
			<h1 className='skill-title'>Technologies</h1>
			<p className='skills-container'>
				<Icon
					icon='dashicons:html'
					color='rgb(174 83 83)'
					width='50'
					height='50'
				/>
				<Icon icon='vaadin:css' color='#1f72b6' width='45' height='45' />
				<Icon icon='logos:sass' width='45' height='45' />
				<Icon icon='logos:javascript' width='45' height='45' />
				<Icon icon='devicon:react-wordmark' width='45' height='46' />
				<Icon icon='logos:git' width='55' height='70' />
				<Icon icon='logos:github' width='55' height='67' />
				<img id='jest-icon' src={jestIcon} alt='jest' />
				<Icon
					id='webpack-icon'
					icon='devicon:webpack-wordmark'
					width='130'
					height='130'
				/>				
			</p>

			<h1 className='skill-title'>Languages</h1>
			<ul>
				<li>English C1</li>
				<li>Polish Native</li>
			</ul>

			<h1 className='skill-title'>Bonus</h1>
			<ul>
				<li>Visual Studio Code</li>
				<li>Slack 2.5 years of remote work</li>
				<li>Microsoft Teams 3 months</li>
				<li>Touch typing</li>
			</ul>
		</article>
	);
};

export default Skills;

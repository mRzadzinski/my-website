import React from 'react';
import '../styles/Skills.scss';
import { Icon } from '@iconify/react';
import jestIcon from '../img/jest-icon.png';
import polishFlag from '../img/polish-flag.webp';
import englishFlag from '../img/english-flag.png';

const Skills = () => {
	return (
		<div className='Skills'>
			<div className='skills-title'>Skills</div>

			<div className='skill-title'>Technologies</div>
			<div className='skills-container'>
				<Icon
					icon='dashicons:html'
					color='rgb(174 83 83)'
					width='70'
					height='70'
				/>
				<Icon icon='vaadin:css' color='#1f72b6' width='70' height='70' />
				<Icon icon='logos:sass' width='70' height='70' />
				<Icon icon='logos:javascript' width='70' height='70' />
				<Icon icon='devicon:react-wordmark' width='70' height='70' />
			</div>
			<div className='skills-container' id='last-tech-row'>
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

			<div className='skill-title'>Human languages</div>
			<div className='languages-container'>
				<div className='language'>
					<img className='flag' src={polishFlag} alt='polish-flag' />
					<div className='language-name'>Polish</div>
					<div className='language-level'>native</div>
				</div>
				<div className='language'>
					<img className='flag' src={englishFlag} alt='english-flag' />
					<div className='language-name'>English</div>
					<div className='language-level'>C1</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

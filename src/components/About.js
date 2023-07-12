import React from 'react';
import '../styles/About.scss';
import myFace from '../img/my-face.jpg';

const About = () => {
	return (
		<div className='About'>
			<div className='all-about-me'>
				<div className='about-content'>
					Challenges have always excited me - I cycled <nobr>a distance</nobr>{' '}
					of 240 km (149 mi) in a single day, ran a half marathon{' '}
					<nobr>(1 h 44 min)</nobr> and can do some weird yoga asanas. But it
					turned out that solving logical, programmatic problems can be as
					addictive as post-heavy-workout high.
					<br />
					<br />
					So I embarked on an exciting journey and decided to become a software
					developer.
					<br />
					<br />
					Let's look at some recent facts:
					<br />
					<ul>
						<li>
							In my last job I was promoted twice, up to project coordinator.
						</li>
						<li>
							I finished the intermediate JS path from The Odin Project Course.
						</li>
						<li>Improved my English from B2 to C1.</li>
						<li>Learned touch typing.</li>
						<li>Practice playing guitar five days a week.</li>
					</ul>
					All of these things require effort, good organization and consistent
					execution <nobr>- that’s what you can expect of me.</nobr>
				</div>

				<img
					id='my-face'
					src={myFace}
					alt='my-face'
				/>
			</div>
		</div>
	);
};

export default About;

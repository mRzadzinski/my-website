import React from 'react';
import '../styles/About.scss';
import myFaceLg from '../img/my-face-lg.jpg';
import myFaceMd from '../img/my-face-md.jpg';
import myFaceSm from '../img/my-face-sm.jpg';

const About = () => {
	return (
		<article className='About all-about-me'>
			<picture>
				<source media='(max-width: 480px)' srcSet={myFaceSm} width={250} height={308} />
				<source media='(max-width: 950px)' srcSet={myFaceMd} width={400} height={418} />
				<source media='(min-width: 951px)' srcSet={myFaceLg} width={400} height={520} />
				<img id='my-face' src='' alt='my-face' />
			</picture>

			<p className='about-content'>
				Challenges have always excited me - I cycled <nobr>a distance</nobr>{' '}
				of 240 km (149 mi) in a single day, ran a half marathon{' '}
				<nobr>(1 h 44 min)</nobr> and can do some weird yoga asanas. To my amusement it
				turned out that solving logical, programmatic problems can be as
				addictive as post workout endorphins rush.
				<br />
				<br />
				So I embarked on an exciting journey and decided to become a software
				developer.
				<br />
				<br />
				Let's look at some things I've been doing recently:
				<br />
				<ul>
					<li>Started learning Backend Development</li>
					<li>Completed Frontend part of The Odin Project Course</li>
					<li>Completed Harvard CS50 Course</li>
					<li>Improved my English from B2 to C1</li>
					<li>Learned touch typing</li>
				</ul>
				Each of the above points require effort, good organization and consistent
				execution <nobr>- that’s what you can expect of me.</nobr>
			</p>
		</article>
	);
};

export default About;

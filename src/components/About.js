import React from 'react';
import '../styles/About.scss';

const About = () => {
	return (
		<div className='About'>
			<div className='about-title'>About</div>
			<img src='' alt='my-face' />
			<div className='my-name'>Maciej Rzadzinski</div>
			<div className='about-content'>
				Maybe I covered a distance <nobr>of 240 km (149 mi)</nobr> on a bike{' '}
				<nobr>in a single day,</nobr> run a half marathon{' '}
				<nobr>in 1 h 44 min</nobr> and do some weird yoga asanas, but deep in my
				heart I have always been <nobr>a geek.</nobr> Looking from the time
				perspective, the majority of my school friendships were based on
				computer related interests, and my cheeks have always been turning red
				when reading about <nobr>the newest</nobr> tech related achievements.
				<br />
				<br />
				So I embarked on an exciting journey to face my destiny and began to
				learn to code.
				<br />
				<br />
				Now, sentiments aside: I am the man who does the job.
				<br />
				<ul>
					<li>
						At my most recent workplace I was promoted twice, up to project
						coordinator.
					</li>
					<li>
						I finished the intermediate JS path from The Odin Project Course.
					</li>
					<li>Improved my English from shaky B2 to usable C1.</li>
					<li>Learned touch typing.</li>
					<li>Practice playing guitar five days a week - it’s scheduled.</li>
				</ul>
				All of these things require effort, good organization and consistent
				execution <nobr>- that’s what you can expect of me.</nobr>
			</div>

		</div>
	);
};

export default About;

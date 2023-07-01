import React from 'react';
import '../styles/About.scss';

const About = () => {
	return (
		<div className='About'>
			<div className='all-about-me'>
				<div className='about-content'>
					Maybe I covered a distance of 240 km (149 mi) on a bike
					in a single day, run a half marathon
					in 1 h 44 min and do some weird yoga asanas,
					but deep in my heart I have always been
					a geek. Looking from the time perspective, the majority
					of my school friendships were based on computer related interests, and
					my cheeks have always been turning red when reading about
					the newest tech related achievements.
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

				<img
					id='my-face'
					src='https://images.squarespace-cdn.com/content/v1/606e351a4a03ce5964baba18/2d5189da-edc4-4495-9bf3-f98d1d63789d/20210406_MelissaKelly-39.jpg'
					alt='my-face'
				/>
			</div>
		</div>
	);
};

export default About;

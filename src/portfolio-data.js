import tasksImgSm from './img/tasks-sm.png';

const projects = [
	{
		id: 1,
		name: 'Guitar-Gear online store',
		img: 'https://github.com/mRzadzinski/music-store/raw/main/src/img/screenshot.png',
		imgWidth: 1000,
		imgHeight: 583,
		description: (
			<div>
				What melts my heart are thick, slightly overdriven, electric blues solos
				from the 60s. That’s why the choice of what to offer in my mockup online
				store was easy.
				<br />
				<br />
				Thought process:
				<br />
				How to render a particular component on the url change? Oh, it's called
				React Router... No problem.
				<br />
				React Testing Library? Just give me a moment…
			</div>
		),
		liveLink: 'https://mrzadzinski.github.io/music-store/',
		githubLink: 'https://github.com/mRzadzinski/music-store',
	},
	{
		id: 2,
		name: 'Music Album Memo',
		img: 'https://github.com/mRzadzinski/music-album-memo/blob/main/src/img/screenshot.png?raw=true',
		imgWidth: 1000,
		imgHeight: 779,
		description: (
			<div>
				For this project I had to face a major challenge - namely, pick 30 of my
				favorite music albums. And it was a fun way to practice React functional
				components with hooks.
				<br />
				<br />
				Yes, I do use Spotify, how did you know that?
			</div>
		),
		liveLink: 'https://mrzadzinski.github.io/music-album-memo/',
		githubLink: 'https://github.com/mRzadzinski/music-album-memo',
	},
	{
		id: 3,
		name: 'Google Tasks',
		img: tasksImgSm,
		imgWidth: 300,
		imgHeight: 617,
		description: (
			<div>
				I resolved to make a replica of my favorite to-do list app and couldn’t
				stop until it looked and worked (roughly) like the archetype. Back then
				I didn't know any framework, so it's all done with vanilla JS.
			</div>
		),
		liveLink: 'https://mrzadzinski.github.io/to-do-list/',
		githubLink: 'https://github.com/mRzadzinski/to-do-list',
	},
	{
		id: 4,
		name: 'Knights Travails',
		img: null,
		description: (
			<div>
				There’s no UI to show, however this project required plenty of brain
				work to apply newly learned CS skills.
				<br />
				Utilizing the Binary Tree concept, the program finds the shortest way
				for a chess knight from one square to another.
			</div>
		),
		liveLink: null,
		githubLink: 'https://github.com/mRzadzinski/knights-travails',
	},
];

export default projects;

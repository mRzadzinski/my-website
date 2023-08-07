import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Main from './components/Main';
import { useRef } from 'react';

function App() {
	const footer = useRef(null);

	return (
		<div className='App'>
			<Header footer={footer} />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
				</Routes>
			</div>
			<Footer ref={footer} />
		</div>
	);
}

export default App;

import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

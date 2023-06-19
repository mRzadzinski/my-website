import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Portfolio />} />
					<Route path='/about' element={<About />} />
					<Route path='/resume' element={<Resume />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

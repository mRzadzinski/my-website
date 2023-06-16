import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<MainPage />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

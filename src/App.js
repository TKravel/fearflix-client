import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchMovies } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from './data';

function App() {
	const dispatch = useDispatch();
	// const [movies, setMovies] = useState();
	// useEffect(() => {
	// 	dispatch(fetchMovies());
	// }, []);
	console.log(movieData);
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

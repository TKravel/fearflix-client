import logo from './logo.svg';
import './sass/app.css';
import { useEffect, useState } from 'react';
import { fetchMovies } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from './data';
import { Nav } from './pages/home/Nav';
import { Hero } from './pages/home/Hero';
import { MovieDisplayContainer } from './pages/home/movie-display/MovieDisplayContainer';

function App() {
	const dispatch = useDispatch();
	const [movies, setMovies] = useState();
	// useEffect(() => {
	// 	dispatch(fetchMovies());
	// }, []);
	console.log(movieData);
	return (
		<div className='App'>
			<Nav />
			<Hero />
			<MovieDisplayContainer />
		</div>
	);
}

export default App;

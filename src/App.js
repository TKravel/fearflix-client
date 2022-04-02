import logo from './logo.svg';
import './sass/app.css';
import { useEffect, useState } from 'react';
import { fetchMovies } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from './data';
import { Nav } from './pages/home/Nav';
import { Hero } from './pages/home/Hero';
import { Footer } from './pages/home/Footer';
import { MovieDisplayContainer } from './pages/home/movie-display/MovieDisplayContainer';
import { HoverModal } from './pages/home/modals/HoverModal';

function App() {
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchMovies());
	// }, []);

	return (
		<div className='App'>
			<Nav />
			<Hero />
			<MovieDisplayContainer />
			<Footer />
			<HoverModal />
		</div>
	);
}

export default App;

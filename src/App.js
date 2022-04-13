import './sass/app.css';
import { useEffect, useState } from 'react';
import { fetchMovies, loadMovies } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from './data';
import { Nav } from './pages/navbar/Nav';
import { Hero } from './pages/home/Hero';
import { Footer } from './pages/home/Footer';
import { MovieDisplayContainer } from './pages/home/movie-display/MovieDisplayContainer';
import { HoverModal } from './pages/home/modals/HoverModal';
import { FullPageModal } from './pages/home/modals/FullPageModal';
import { LoadingScreen } from './pages/home/LoadingScreen';

function App() {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movie.movies);
	const [isLoading, setIsLoading] = useState(true);

	// load redux from local data.js file to save on API calls
	useEffect(() => {
		dispatch(loadMovies(movieData));
	}, []);

	// fetch movies from server

	// useEffect(() => {
	// 	dispatch(fetchMovies());
	// }, []);

	// toggle loading state
	useEffect(() => {
		if (movies.length === 0) {
			return;
		} else {
			setIsLoading(false);
		}
	}, [movies]);

	return (
		<div className='App'>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<>
					<Nav />
					<Hero />
					<MovieDisplayContainer />
					<Footer />
					<HoverModal />
					<FullPageModal />
				</>
			)}
		</div>
	);
}

export default App;

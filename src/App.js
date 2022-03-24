import logo from './logo.svg';
import './sass/app.css';
import { useEffect, useState } from 'react';
import { fetchMovies } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { movieData } from './data';
import { Nav } from './pages/home/Nav';

function App() {
	const dispatch = useDispatch();
	// const [movies, setMovies] = useState();
	// useEffect(() => {
	// 	dispatch(fetchMovies());
	// }, []);
	console.log(movieData);
	return (
		<div className='App'>
			<Nav />
		</div>
	);
}

export default App;

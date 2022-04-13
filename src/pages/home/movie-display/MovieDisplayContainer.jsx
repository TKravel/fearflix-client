import { Carousel } from './Carousel';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MobileCarousel } from './MobileCarousel';

export const MovieDisplayContainer = () => {
	const movies = useSelector((state) => state.movie.movies);
	const [movieLists, setMovieLists] = useState([]);
	const [loading, setLoading] = useState(true);

	// create movie lists for carousels
	useEffect(() => {
		const data = [];

		// create 3 arrays of unique items with a length of 28
		for (let i = 0; i < 3; i++) {
			let state = [];

			while (state.length < 28) {
				let randomNum = Math.ceil(Math.random() * movies.length - 1);
				if (!state.includes(randomNum)) {
					state.push(randomNum);
				}
			}
			data.push(state);
			state = [];
		}
		setMovieLists(data);
		setLoading(false);
	}, []);

	return (
		<>
			{loading ? null : window.innerWidth > 500 ? (
				<div id='movie-display-container'>
					<Carousel
						id='carousel1'
						title='Thrilling horrors'
						movieList={movieLists[0]}
					/>
					<Carousel
						id='carousel2'
						title='Cheap scares'
						movieList={movieLists[1]}
					/>
					<Carousel
						id='carousel3'
						title='Classics'
						movieList={movieLists[2]}
					/>
				</div>
			) : (
				<div id='movie-display-container'>
					<MobileCarousel
						id='carousel1'
						title='Thrilling horrors'
						movieList={movieLists[0]}
					/>
					<MobileCarousel
						id='carousel2'
						title='Cheap scares'
						movieList={movieLists[1]}
					/>
					<MobileCarousel
						id='carousel3'
						title='Classics'
						movieList={movieLists[2]}
					/>
				</div>
			)}
		</>
	);
};

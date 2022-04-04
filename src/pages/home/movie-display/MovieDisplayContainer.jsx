import { Carousel } from './Carousel';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { movieData } from '../../../data';

export const MovieDisplayContainer = () => {
	const [movieLists, setMovieLists] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const data = [];
		for (let i = 0; i < 3; i++) {
			let state = [];

			while (state.length < 28) {
				let randomNum = Math.ceil(Math.random() * movieData.length - 1);
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
			{!loading ? (
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
			) : null}
		</>
	);
};

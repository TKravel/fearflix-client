import { useState } from 'react';
import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';
import { movieData } from '../../../data';

export const Carousel = () => {
	const [carouselData, setCarouselData] = useState([]);
	const carouselList = [];

	for (let i = carouselData.length; i < 20; i++) {
		let randomNum = Math.ceil(Math.random() * 130);

		if (carouselData.includes() !== true) {
			carouselData.push(randomNum);
		}
	}

	movieData.forEach((movie) => {
		console.log(movie.title);
	});

	console.log(carouselData);

	const handleClick = (e) => {
		console.log('click');
		const direction = e.target.id;
		console.log(direction);

		if (direction === 'next') {
			setCarouselData((prevValue) => {
				const card = prevValue.pop();
				return [card, ...prevValue];
			});
			// const card = carouselList.shift();

			// carouselList.push(card);
			// console.log(carouselList);
		}
	};

	return (
		<div className='carousel-wrapper'>
			<button id='prev' className='carousel-button'>
				<PrevArrowIcon />
			</button>
			<div className='carousel'>
				{carouselData.map((value, index) => {
					return <MovieCard key={index} movieIdx={value} />;
				})}
			</div>
			<button id='next' className='carousel-button' onClick={handleClick}>
				<NextArrowIcon />
			</button>
		</div>
	);
};

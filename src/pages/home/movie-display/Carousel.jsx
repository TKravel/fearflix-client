import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';

export const Carousel = () => {
	return (
		<div className='carousel-wrapper'>
			<button className='carousel-button'>
				<PrevArrowIcon />
			</button>
			<div className='carousel'>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
			<button className='carousel-button'>
				<NextArrowIcon />
			</button>
		</div>
	);
};

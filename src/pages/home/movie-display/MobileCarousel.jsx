import { useEffect, useState } from 'react';
import { MobileMovieCard } from './MobileMovieCard';

export const MobileCarousel = ({ id, title, movieList }) => {
	const [carouselData, setCarouselData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (carouselData.length === 0) {
			setCarouselData(movieList);
			setLoading(false);
		}
	}, [carouselData]);

	return (
		<>
			{!loading ? (
				<div className='mobile-carousel-conatiner'>
					<h3>{title}</h3>
					<div className='mobile-carousel-wrapper'>
						<div id={`carousel${id}`} className='mobile-carousel'>
							{carouselData.map((value, index) => {
								return (
									<MobileMovieCard
										key={index}
										movieIdx={value}
									/>
								);
							})}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

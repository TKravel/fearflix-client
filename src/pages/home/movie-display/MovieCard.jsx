import { useEffect, useState } from 'react';
import { movieData } from '../../../data';
import { useDispatch } from 'react-redux';
import { openHover, closeHover } from '../../../features/modals/modalSlice';
import { getPos } from '../../../utils/carouselUtils';

export const MovieCard = ({ idx, movieIdx }) => {
	const dispatch = useDispatch();
	// const [isHovered, setIsHovered] = useState(false);
	const card = document.getElementById(movieIdx);

	console.log('rendered');

	const handleMouseEnter = (e) => {
		if (card === null) {
			return;
		}
		console.log(e.target.id);
		console.log('enter');
		const cardHovered = { id: e.currentTarget.id };
		const pos = getPos(e.target);
		cardHovered.pos = pos;
		setTimeout(() => {
			dispatch(openHover(cardHovered));
		}, 200);
		// setIsHovered(true);
	};

	return (
		<div className='movie-card-wrapper'>
			<div
				className='movie-card'
				id={movieIdx}
				onPointerOver={handleMouseEnter}
				// onMouseLeave={handleMouseLeave}
			>
				{movieIdx !== null && (
					<>
						<img
							className='movie-card-img'
							src={movieData[movieIdx].posterURLs[342]}
						/>

						<div className='card-anchor'></div>
					</>
				)}
			</div>
		</div>
	);
};

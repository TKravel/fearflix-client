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

	// useEffect(() => {
	// 	if (card === null) {
	// 		return;
	// 	}

	// 	const handleMouseEnter = (e) => {
	// 		console.log('Hovered');
	// 		const cardHovered = { id: e.target.id };
	// 		const pos = getPos(e.target);
	// 		cardHovered.pos = pos;
	// 		dispatch(openHover(cardHovered));
	// 		setIsHovered(true);
	// 	};

	// 	card.addEventListener('mouseenter', (e) => handleMouseEnter(e));

	// 	return function cleanUp() {
	// 		card.removeEventListener('mouseenter', handleMouseEnter);
	// 	};
	// }, []);

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

	// useEffect(() => {
	// 	if (card === null) {
	// 		return;
	// 	}
	// const handleMouseLeave = () => {
	// 	console.log('not hovered');
	// 	dispatch(closeHover());
	// 	setIsHovered(false);
	// };

	// 	card.addEventListener('mouseleave', handleMouseLeave);
	// 	return function clean() {
	// 		card.removeEventListener('mouseleave', handleMouseLeave);
	// 	};
	// }, []);
	// const handleMouseLeave = () => {
	// 	if (card === null) {
	// 		return;
	// 	}
	// 	console.log('not hovered');
	// 	dispatch(closeHover({ pos: {} }));
	// 	// setIsHovered(false);
	// };
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
						<div>
							<img
								className='movie-card-img'
								src={movieData[movieIdx].posterURLs[342]}
							/>
						</div>
						<div className='card-anchor'></div>
					</>
				)}
			</div>
		</div>
	);
};

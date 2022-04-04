import { useEffect, useState } from 'react';
import { movieData } from '../../../data';
import { useDispatch } from 'react-redux';
import {
	openHover,
	openFullPageModal,
} from '../../../features/modals/modalSlice';
import { getPos } from '../../../utils/carouselUtils';

export const MovieCard = ({ idx, movieIdx }) => {
	const dispatch = useDispatch();

	const handleMouseEnter = (e) => {
		const card = document.getElementById(movieIdx);
		const cardToExpand = { id: e.currentTarget.id };
		if (card === null) {
			return;
		}
		const pos = getPos(e.target);
		cardToExpand.pos = pos;
		if (window.innerWidth < 501) {
			dispatch(openFullPageModal(cardToExpand));
			return;
		} else {
			setTimeout(() => {
				dispatch(openHover(cardToExpand));
			}, 200);
		}
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

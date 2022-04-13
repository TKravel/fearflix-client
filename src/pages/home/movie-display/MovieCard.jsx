import { useDispatch, useSelector } from 'react-redux';
import {
	openHover,
	setHoverStatus,
	openFullPageModal,
} from '../../../features/modals/modalSlice';
import { getPos, getCardWidth } from '../../../utils/carouselUtils';

export const MovieCard = ({ idx, movieIdx, carouselShifting }) => {
	const dispatch = useDispatch();
	const isTransitioning = useSelector(
		(state) => state.modal.hoverModal.isTransitioning
	);
	const movies = useSelector((state) => state.movie.movies);

	const handleMouseMove = (e) => {
		// exit conditons to cancel mouse move function
		if (carouselShifting || isTransitioning || window.innerWidth < 501) {
			return;
		}

		const cardToExpand = {
			id: e.currentTarget.id,
			index: idx,
			pos: getPos(e.target),
		};

		setTimeout(() => {
			dispatch(setHoverStatus(true));
			dispatch(openHover(cardToExpand));
		}, 200);
	};

	const handleClick = (e) => {
		const card = document.getElementById(movieIdx);
		// exit conditons to cancel onClick function
		if (card === null || window.innerWidth > 501) {
			return;
		}

		const cardToExpand = { id: e.currentTarget.id, pos: getPos(e.target) };
		dispatch(openFullPageModal(cardToExpand));
	};

	return (
		<div
			className='movie-card-wrapper'
			style={{ width: getCardWidth(window.innerWidth) }}
		>
			<div
				className='movie-card'
				id={movieIdx}
				onMouseMove={!isTransitioning ? handleMouseMove : null}
				onClick={handleClick}
			>
				{movieIdx !== null && (
					<>
						<img
							className='movie-card-img'
							src={movies[movieIdx].posterURLs[342]}
						/>

						<div className='card-anchor'></div>
					</>
				)}
			</div>
		</div>
	);
};

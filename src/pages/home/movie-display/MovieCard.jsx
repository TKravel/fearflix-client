import { movieData } from '../../../data';
import { useDispatch, useSelector } from 'react-redux';
import {
	openHover,
	setHoverStatus,
	openFullPageModal,
} from '../../../features/modals/modalSlice';
import { getPos, getCardWidth } from '../../../utils/carouselUtils';

export const MovieCard = ({ idx, movieIdx }) => {
	const dispatch = useDispatch();
	const isTransitioning = useSelector(
		(state) => state.modal.hoverModal.isTransitioning
	);

	const handleMouseEnter = (e) => {
		const card = document.getElementById(movieIdx);
		const cardToExpand = { id: e.currentTarget.id };
		if (card === null || isTransitioning === true) {
			return;
		}
		const pos = getPos(e.target);
		cardToExpand.pos = pos;
		if (window.innerWidth < 501) {
			return;
		} else {
			setTimeout(() => {
				dispatch(setHoverStatus(true));
				dispatch(openHover(cardToExpand));
			}, 200);
		}
	};

	const handleClick = (e) => {
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
		}
	};

	return (
		<div
			className='movie-card-wrapper'
			style={{ width: getCardWidth(window.innerWidth) }}
		>
			<div
				className='movie-card'
				id={movieIdx}
				onMouseMove={!isTransitioning ? handleMouseEnter : null}
				onClick={handleClick}
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

import { movieData } from '../../../data';
import { useDispatch } from 'react-redux';
import { openFullPageModal } from '../../../features/modals/modalSlice';

export const MobileMovieCard = ({ idx, movieIdx }) => {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		const card = document.getElementById(movieIdx);
		const cardToExpand = { id: e.currentTarget.id };
		if (card === null) {
			return;
		}
		cardToExpand.pos = {};
		if (window.innerWidth < 501) {
			dispatch(openFullPageModal(cardToExpand));
			return;
		}
	};

	return (
		<div className='movie-card-wrapper'>
			<div className='movie-card' id={movieIdx} onClick={handleClick}>
				<img
					className='movie-card-img'
					src={movieData[movieIdx].posterURLs[342]}
				/>
			</div>
		</div>
	);
};

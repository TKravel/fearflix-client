import { movieData } from '../../data';
import { useDispatch } from 'react-redux';
import { openFullPageModal } from '../../features/modals/modalSlice';

export const NotificationCard = ({ header, movieIdx, date }) => {
	const dispatch = useDispatch();

	const handleClick = (e) => {
		const card = {};
		card.id = e.currentTarget.id;
		card.pos = { y: 500 };
		dispatch(openFullPageModal(card));
	};

	return (
		<a id={movieIdx} className='notification-card' onClick={handleClick}>
			<div>
				<img
					className='movie-card-img'
					src={movieData[movieIdx].posterURLs[342]}
				/>
			</div>
			<div>
				<h1>{header}</h1>
				<p>{movieData[movieIdx].title}</p>
				<p className='notification-date'>{date}</p>
			</div>
		</a>
	);
};

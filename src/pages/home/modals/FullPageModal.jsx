import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFrame } from './IFrame';
import { ModalButton } from './ModalButton';
import { PlayIcon } from '../../../svg/PlayIcon';
import { PlusIcon } from '../../../svg/PlusIcon';
import { getRating, displayRuntime, getCast } from '../../../utils/movieUtils';
import { CloseIcon } from '../../../svg/CloseIcon';
import { closeFullPageModal } from '../../../features/modals/modalSlice';
import { LikeModal } from './LikeModal';

export const FullPageModal = () => {
	const modalStatus = useSelector((state) => state.modal.fullPageModal);
	const movies = useSelector((state) => state.movie.movies);
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = (e) => {
		setIsOpen(false);
		dispatch(closeFullPageModal());
	};

	// control isOpen state on load
	useEffect(() => {
		if (modalStatus.open !== true) {
			if (isOpen === true) {
				setIsOpen(false);
			}
			return;
		}
		setIsOpen(true);
	}, [modalStatus.open, isOpen]);

	return (
		<>
			{isOpen && (
				<div className='full-page-modal-wrapper'>
					<div
						className='full-page-modal-container'
						style={
							modalStatus.coords.y
								? { top: modalStatus.coords.y }
								: {}
						}
					>
						<button
							className='modal-close-button'
							onClick={handleClose}
						>
							<div>
								<CloseIcon styles='modal-close-icon' />
							</div>
						</button>
						<IFrame
							styles='full-page-iframe'
							vidURL={movies[modalStatus.id].video}
						/>
						<div className='hover-modal-btn-container'>
							<ModalButton
								styles='modal-play'
								buttonIcon={
									<PlayIcon styles='modal-play-icon' />
								}
							/>
							<ModalButton
								styles='modal-button'
								buttonIcon={<PlusIcon styles='modal-icon' />}
							/>
							<LikeModal />
						</div>
						<p className='full-page-modal-description'>
							<span className='movie-score'>
								{movies[modalStatus.id].imdbRating}% IMDb rating
							</span>
							<span className='movie-rating'>
								{' '}
								{getRating(movies[modalStatus.id].age)}{' '}
							</span>
							<span>
								{displayRuntime(movies[modalStatus.id].runtime)}
							</span>
						</p>
						<div className='full-page-modal-details'>
							<h1>{movies[modalStatus.id].title}</h1>
							<p>{movies[modalStatus.id].overview}</p>
						</div>
						<div className='full-page-modal-people'>
							<p>
								<span>Cast: </span>
								{getCast(movies[modalStatus.id].cast)}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

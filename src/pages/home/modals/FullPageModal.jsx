import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFrame } from './IFrame';
import { movieData } from '../../../data';
import { ModalButton } from './ModalButton';
import { PlayIcon } from '../../../svg/PlayIcon';
import { PlusIcon } from '../../../svg/PlusIcon';
import { ThumbUpIcon } from '../../../svg/ThumbUpIcon';
import { getRating, displayRuntime } from '../../../utils/movieUtils';
import { CloseIcon } from '../../../svg/CloseIcon';
import { closeFullPageModal } from '../../../features/modals/modalSlice';

export const FullPageModal = () => {
	const modalStatus = useSelector((state) => state.modal.fullPageModal);
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = (e) => {
		setIsOpen(false);
		dispatch(closeFullPageModal());
	};

	useEffect(() => {
		if (modalStatus.open !== true) {
			if (isOpen === true) {
				setIsOpen(false);
			}
			return;
		}
		setIsOpen(true);
	}, [modalStatus.open]);
	return (
		<>
			{isOpen && (
				<div className='full-page-modal-wrapper'>
					<div
						className='full-page-modal-container'
						style={{ top: modalStatus.coords.y }}
					>
						<button
							className='modal-close-button'
							onClick={handleClose}
						>
							<CloseIcon styles='modal-close-icon' />
						</button>
						<IFrame
							styles='full-page-iframe'
							vidURL={movieData[modalStatus.id].video}
						/>
						<div className='hover-modal-btn-container'>
							<ModalButton
								styles='modal-play'
								buttonIcon={<PlayIcon styles='modal-icon' />}
							/>
							<ModalButton
								styles='modal-button'
								buttonIcon={<PlusIcon styles='modal-icon' />}
							/>
							<ModalButton
								styles='modal-button'
								buttonIcon={<ThumbUpIcon styles='modal-icon' />}
							/>
							{/* <ModalButton
							styles='modal-button'
							buttonIcon={<DownArrowIcon styles='modal-icon' />}
						/> */}
						</div>
						<div className='hover-modal-description'>
							<span className='movie-score'>
								{movieData[modalStatus.id].imdbRating}% IMDb
								rating
							</span>
							<span className='movie-rating'>
								{' '}
								{getRating(movieData[modalStatus.id].age)}{' '}
							</span>
							<span>
								{displayRuntime(
									movieData[modalStatus.id].runtime
								)}
							</span>
						</div>
						<h1>{movieData[modalStatus.id].title}</h1>
						<p>{movieData[modalStatus.id].overview}</p>
					</div>
				</div>
			)}
		</>
	);
};

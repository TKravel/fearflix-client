import { useDispatch, useSelector } from 'react-redux';
import { closeHover } from '../../../features/modals/modalSlice';
import { movieData } from '../../../data';
import { useEffect, useState } from 'react';
import { ModalButton } from './ModalButton';
import { getRating, displayRuntime } from '../../../utils/movieUtils';
import { PlayIcon } from '../../../svg/PlayIcon';
import { PlusIcon } from '../../../svg/PlusIcon';
import { ThumbUpIcon } from '../../../svg/ThumbUpIcon';
import { DownArrowIcon } from '../../../svg/DownArrowIcon';
import { IFrame } from './IFrame';

export const HoverModal = () => {
	const dispatch = useDispatch();
	const modalStatus = useSelector((state) => state.modal.hoverModal);
	const [isOpen, setIsOpen] = useState(false);
	const [completedTransition, setCompletedTransition] = useState(false);

	useEffect(() => {
		if (modalStatus.open !== true) {
			if (isOpen === true) {
				setIsOpen(false);
			}
			return;
		}
		setIsOpen(true);
	}, [modalStatus.open]);

	useEffect(() => {
		const modal = document.getElementsByClassName('hover-modal')[0];
		if (modal !== undefined) {
			setTimeout(() => {
				modal.classList.add('hover-modal-fade-in');
			}, 200);
			setTimeout(() => {
				setCompletedTransition(true);
			}, 2000);
		}
	}, [isOpen]);

	const mouseLeave = () => {
		console.log('leave');
		dispatch(closeHover({ pos: {} }));
		setIsOpen(false);
		setCompletedTransition(false);
	};

	return (
		<>
			{isOpen && (
				<>
					<div
						className='hover-modal'
						onMouseLeave={mouseLeave}
						style={{
							left: `${modalStatus.details.x}px`,
							top: `${modalStatus.details.y}px`,
						}}
					>
						<div>
							{!completedTransition ? (
								<img
									className='movie-card-img'
									src={
										movieData[modalStatus.id]
											.backdropURLs[300]
									}
								/>
							) : (
								<IFrame
									styles='hover-iframe'
									vidURL={movieData[modalStatus.id].video}
								/>
							)}
						</div>
						<div className='card-details'>
							<div className='hover-modal-btn-container'>
								<ModalButton
									styles='modal-play'
									buttonIcon={
										<PlayIcon styles='modal-icon' />
									}
								/>
								<ModalButton
									styles='modal-button'
									buttonIcon={
										<PlusIcon styles='modal-icon' />
									}
								/>
								<ModalButton
									styles='modal-button'
									buttonIcon={
										<ThumbUpIcon styles='modal-icon' />
									}
								/>
								<ModalButton
									styles='modal-button'
									buttonIcon={
										<DownArrowIcon styles='modal-icon' />
									}
								/>
							</div>
							<div className='hover-modal-description'>
								<span>
									{movieData[modalStatus.id].imdbRating}% IMDb
									rating
								</span>
								<span>
									{' '}
									{getRating(
										movieData[modalStatus.id].age
									)}{' '}
								</span>
								<span>
									{displayRuntime(
										movieData[modalStatus.id].runtime
									)}
								</span>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

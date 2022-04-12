import { useDispatch, useSelector } from 'react-redux';
import {
	closeHover,
	setHoverStatus,
	openFullPageModal,
} from '../../../features/modals/modalSlice';
import { movieData } from '../../../data';
import { useEffect, useState } from 'react';
import { ModalButton } from './ModalButton';
import { getRating, displayRuntime } from '../../../utils/movieUtils';
import { PlayIcon } from '../../../svg/PlayIcon';
import { PlusIcon } from '../../../svg/PlusIcon';
import { ThumbUpIcon } from '../../../svg/ThumbUpIcon';
import { DownArrowIcon } from '../../../svg/DownArrowIcon';
import { IFrame } from './IFrame';
import { getAnimationDirection } from '../../../utils/carouselUtils';

export const HoverModal = () => {
	const dispatch = useDispatch();
	const modalStatus = useSelector((state) => state.modal.hoverModal);
	const [isOpen, setIsOpen] = useState(false);
	const [completedTransition, setCompletedTransition] = useState(false);

	// watch redux for modal open call / set state to render component
	useEffect(() => {
		if (modalStatus.open !== true) {
			return;
		}
		// allow 200ms delay for state to catch up
		setTimeout(() => {
			setIsOpen(true);
		}, 200);
	}, [modalStatus.open]);

	// on open determine cards animation / track mouse during anination
	useEffect(() => {
		const modal = document.getElementsByClassName('hover-modal')[0];
		if (modal !== undefined) {
			if (isOpen) {
				modal.style.animationName = getAnimationDirection(
					modalStatus.index
				);
				// compare mouse coords to element coords during animation
				const getMouseCoords = (e) => {
					const elCoords = modal.getBoundingClientRect();
					if (
						e.clientY < elCoords.top ||
						e.clientY > elCoords.bottom ||
						e.clientX < elCoords.left ||
						e.clientX > elCoords.right
					) {
						// fire mouse leave event if outside of animation
						handleMouseLeave();
					}
				};
				// pin event listener to document on modal open
				document.addEventListener('mousemove', getMouseCoords);

				// clean up event listener
				return () =>
					document.removeEventListener('mousemove', getMouseCoords);
			}
		}
	}, [isOpen]);

	// determine fade out animation by movie index / reset card to movie poster
	const handleMouseLeave = () => {
		console.log('leave');
		const modal = document.getElementsByClassName('hover-modal')[0];
		if (modal !== undefined) {
			const animationDirection =
				getAnimationDirection(modalStatus.index) !== 'fade-in'
					? `${getAnimationDirection(modalStatus.index)}-out`
					: 'fade-out';
			modal.style.animationName = animationDirection;
			setCompletedTransition(false);
		}
	};

	const handleTransitionEnd = (e) => {
		if (
			e.animationName === 'fade-in' ||
			e.animationName === 'fade-left' ||
			e.animationName === 'fade-right'
		) {
			// switch from movie poster to iframe and details
			setCompletedTransition(true);
		} else {
			// reset hover states and close modal
			dispatch(closeHover({ pos: {} }));
			dispatch(setHoverStatus(false));
			setIsOpen(false);
		}
	};

	const openMoreInfoModal = () => {
		const movieInfo = {};
		movieInfo.id = modalStatus.id;
		movieInfo.pos = modalStatus.details;
		dispatch(openFullPageModal(movieInfo));
	};

	return (
		<>
			{isOpen && (
				<>
					<div
						className='hover-modal'
						onMouseLeave={handleMouseLeave}
						onAnimationEnd={handleTransitionEnd}
						style={{
							animationName: 'none',
							left: `${modalStatus.details.x}px`,
							top: `${modalStatus.details.y}px`,
						}}
					>
						{!completedTransition ? (
							<img
								className='movie-card-img'
								src={movieData[modalStatus.id].posterURLs[342]}
							/>
						) : (
							<>
								<IFrame
									styles='hover-iframe'
									vidURL={movieData[modalStatus.id].video}
								/>

								<div className='card-details'>
									<div className='hover-modal-btn-container'>
										<ModalButton
											styles='modal-play'
											buttonIcon={
												<PlayIcon styles='modal-play-icon' />
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
										<div onClick={openMoreInfoModal}>
											<ModalButton
												styles='modal-button'
												buttonIcon={
													<DownArrowIcon styles='modal-icon' />
												}
											/>
										</div>
									</div>
									<div className='hover-modal-description'>
										<span className='movie-score'>
											{
												movieData[modalStatus.id]
													.imdbRating
											}
											% IMDb rating
										</span>
										<span className='movie-rating'>
											{' '}
											{getRating(
												movieData[modalStatus.id].age
											)}{' '}
										</span>
										<span>
											{displayRuntime(
												movieData[modalStatus.id]
													.runtime
											)}
										</span>
									</div>
								</div>
							</>
						)}
					</div>
				</>
			)}
		</>
	);
};

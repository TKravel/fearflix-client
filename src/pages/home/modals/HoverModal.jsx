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
		setIsOpen(true);
	}, [modalStatus.open]);

	// on state open start fade in animation
	useEffect(() => {
		const modal = document.getElementsByClassName('hover-modal')[0];
		if (modal !== undefined) {
			if (isOpen) {
				setTimeout(() => {
					modal.style.animationName = getAnimationDirection(
						modalStatus.index
					);
				}, 200);
			}
		}
	}, [isOpen]);

	// start fade out transition / set state to render iframe
	const mouseLeave = () => {
		const modal = document.getElementsByClassName('hover-modal')[0];
		const animationDirection =
			getAnimationDirection(modalStatus.index) !== 'fade-in'
				? `${getAnimationDirection(modalStatus.index)}-out`
				: 'fade-out';
		// modal.classList.remove(getAnimationDirection());
		modal.style.animationName = animationDirection;
		// modal.classList.add('fade-out');
		setCompletedTransition(false);
	};

	const handleTransitionEnd = (e) => {
		if (
			e.animationName === 'fade-in' ||
			e.animationName === 'fade-left' ||
			e.animationName === 'fade-right'
		) {
			setCompletedTransition(true);
		} else {
			document.getElementsByClassName(
				'hover-modal'
			)[0].style.animationName = '';
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
						onMouseLeave={mouseLeave}
						onAnimationEnd={handleTransitionEnd}
						style={{
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

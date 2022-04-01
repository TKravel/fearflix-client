import { useDispatch, useSelector } from 'react-redux';
import { closeHover } from '../../../features/modals/modalSlice';
import { movieData } from '../../../data';
import { useEffect, useState } from 'react';

export const HoverModal = () => {
	const dispatch = useDispatch();
	const modalStatus = useSelector((state) => state.modal.hoverModal);
	const [isOpen, setIsOpen] = useState(false);

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
		}
	}, [isOpen]);

	const mouseLeave = () => {
		console.log('leave');
		dispatch(closeHover({ pos: {} }));
		setIsOpen(false);
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
							<img
								className='movie-card-img'
								src={
									movieData[modalStatus.id].backdropURLs[300]
								}
							/>
						</div>
						<div className='card-details'>
							<h1>{movieData[modalStatus.id].title}</h1>
						</div>
					</div>
				</>
			)}
		</>
	);
};

import { ModalButton } from './ModalButton';
import { ThumbUpIcon } from '../../../svg/ThumbUpIcon';
import { SuperLikeIcon } from '../../../svg/SuperLikeIcon';

export const LikeModal = () => {
	const expandLikeModal = () => {
		const likeModal = document.getElementsByClassName('like-modal')[0];

		likeModal.classList.add('like-modal-active');
	};

	const exitLikeModal = () => {
		const likeModal = document.getElementsByClassName('like-modal')[0];

		likeModal.classList.remove('like-modal-active');
	};
	return (
		<div className='like-button-wrapper' onMouseEnter={expandLikeModal}>
			<ModalButton
				styles='modal-button'
				buttonIcon={<ThumbUpIcon styles='modal-icon' />}
			/>
			<div className='like-modal' onMouseLeave={exitLikeModal}>
				<div>
					<p>Not for me</p>
					<ModalButton
						styles='like-modal-button'
						buttonIcon={<ThumbUpIcon styles='dislike-icon' />}
					/>
				</div>
				<div>
					<p>I like this</p>
					<ModalButton
						styles='like-modal-button'
						buttonIcon={<ThumbUpIcon styles='modal-icon' />}
					/>
				</div>
				<div>
					<p>Take my thumb!</p>
					<ModalButton
						styles='like-modal-button'
						buttonIcon={<SuperLikeIcon styles='modal-icon' />}
					/>
				</div>
			</div>
		</div>
	);
};

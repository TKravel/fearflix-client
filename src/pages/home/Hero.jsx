import { movieData } from '../../data';
import { InfoIcon } from '../../svg/InfoIcon';
import { PlayIcon } from '../../svg/PlayIcon';
import { getRating } from '../../utils/movieUtils';
import { openFullPageModal } from '../../features/modals/modalSlice';
import { useDispatch } from 'react-redux';

export const Hero = () => {
	const dispatch = useDispatch();
	const randomNum = Math.ceil(Math.random() * 130);
	const imageURL = movieData[randomNum].backdropURLs[1280];

	const handleMoreInfo = () => {
		const modalData = {};
		modalData.id = randomNum;
		modalData.pos = { y: 500 };
		dispatch(openFullPageModal(modalData));
	};
	return (
		<section
			className='hero'
			style={{
				backgroundImage: `url(${imageURL})`,
			}}
		>
			<div className='hero-details'>
				<h1>{movieData[randomNum].title}</h1>
				<p>{movieData[randomNum].overview}</p>
				<div className='hero-btn-container'>
					<button className='hero-play-btn'>
						<div className='hero-btn-text'>
							<PlayIcon styles='hero-play-icon' />
							Play
						</div>
					</button>
					<button
						className='hero-more-info-btn'
						onClick={handleMoreInfo}
					>
						<div className='hero-btn-text'>
							<InfoIcon styles='hero-more-info-icon' />
							More info
						</div>
					</button>
				</div>
			</div>
			<div className='rating-container'>
				<p>{getRating(movieData[randomNum].age)}</p>
			</div>
		</section>
	);
};

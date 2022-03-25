import { movieData } from '../../data';
import { InfoIcon } from '../../svg/InfoIcon';
import { PlayIcon } from '../../svg/PlayIcon';

export const Hero = () => {
	const imageURL = movieData[3].backdropURLs[1280];
	console.log(imageURL);
	return (
		<section
			className='hero'
			style={{
				backgroundImage: `url(${imageURL})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
			}}
		>
			<div className='hero-details'>
				<h1>{movieData[3].title}</h1>
				<p>{movieData[3].overview}</p>
				<div className='hero-btn-container'>
					<button className='hero-play-btn'>
						<div className='hero-btn-text'>
							<PlayIcon styles='hero-play-icon' />
							Play
						</div>
					</button>
					<button className='hero-more-info-btn'>
						<div className='hero-btn-text'>
							<InfoIcon styles='hero-more-info-icon' />
							More info
						</div>
					</button>
				</div>
			</div>
			<div className='rating-container'>
				<p>Rating</p>
			</div>
		</section>
	);
};

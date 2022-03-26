import { movieData } from '../../../data';
export const MovieCard = () => {
	let randomNum = Math.ceil(Math.random() * 130);
	return (
		<div className='movie-card'>
			<div>
				<img
					className='movie-card-img'
					src={movieData[randomNum].backdropURLs[300]}
				/>
			</div>
			<div></div>
		</div>
	);
};

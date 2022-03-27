import { movieData } from '../../../data';
export const MovieCard = ({ movieIdx }) => {
	// let randomNum = Math.ceil(Math.random() * 130);
	return (
		<div className='movie-card'>
			<div>
				<img
					className='movie-card-img'
					src={movieData[movieIdx].posterURLs[342]}
				/>
			</div>
			<div></div>
		</div>
	);
};

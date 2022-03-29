import { movieData } from '../../../data';
export const MovieCard = ({ movieIdx }) => {
	return (
		<>
			{movieIdx === null ? (
				<div className='movie-card'></div>
			) : (
				<div className='movie-card'>
					<div>
						<img
							className='movie-card-img'
							src={movieData[movieIdx].posterURLs[342]}
						/>
					</div>
					<div></div>
				</div>
			)}
		</>
	);
};

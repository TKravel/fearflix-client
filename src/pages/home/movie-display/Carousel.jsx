import { useEffect, useState } from 'react';
import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';

export const Carousel = ({ id, title, movieList }) => {
	const [loading, setLoading] = useState(true);
	const [carouselData, setCarouselData] = useState([]);
	const [hasShifted, setHasShifted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const cardsVisible = Math.floor((window.innerWidth - 64) / 206);

	useEffect(() => {
		if (carouselData.length === 0) {
			setCarouselData(movieList);
			console.log(carouselData);
			setLoading(false);
		}
	}, [carouselData]);

	const carouselTrack = document.getElementById(`carousel${id}`);

	const shiftCards = (direction) => {
		if (direction === 'next') {
			setCarouselData((prevValue) => {
				let arr = [...prevValue];
				const cards = arr.slice(0, cardsVisible);
				const shiftedArr = arr.filter((movie, index) => {
					return index >= cardsVisible;
				});
				return [...shiftedArr, ...cards];
			});
		} else if (direction === 'prev') {
			setCarouselData((prevValue) => {
				let arr = [...prevValue];
				const cards = arr.slice(arr.length - cardsVisible, arr.length);
				const shiftedArr = arr.filter((movie, index) => {
					return index <= arr.length - cardsVisible - 1;
				});
				return [...cards, ...shiftedArr];
			});
		}
	};

	const toggleShift = (direction) => {
		if (carouselTrack === undefined) {
			return;
		}
		if (direction === 'next') {
			if (!carouselTrack.style.transform) {
				carouselTrack.style.setProperty(
					'transform',
					`translateX( ${-Math.abs(cardsVisible * 206)}px )`
				);
				carouselTrack.style.setProperty('transition-duration', '1s');
			} else {
				carouselTrack.style.removeProperty('transform');
				carouselTrack.style.removeProperty('transition-duration');
			}
		} else if (direction === 'prev') {
			if (!carouselTrack.style.transform) {
				carouselTrack.style.setProperty(
					'transform',
					`translateX(${cardsVisible * 206}px )`
				);
				carouselTrack.style.setProperty('transition-duration', '1s');
			} else {
				carouselTrack.style.removeProperty('transform');
				carouselTrack.style.removeProperty('transition-duration');
			}
		}
	};

	const handleClick = (e) => {
		const direction = e.currentTarget.id;
		setIsDisabled(true);
		toggleShift(direction);
		setTimeout(() => toggleShift(direction), 1000);
		setTimeout(() => shiftCards(direction), 1000);
		setTimeout(() => setIsDisabled(false), 1000);
		setHasShifted(true);
	};

	const hovered = () => {
		setIsHovered(true);
	};

	const notHovered = () => {
		setIsHovered(false);
	};

	return (
		<>
			{!loading ? (
				<div className='carousel-container'>
					<h3>{title}</h3>
					<div
						className='carousel-wrapper'
						onMouseOver={hovered}
						onMouseLeave={notHovered}
					>
						<button
							id='prev'
							className='carousel-button'
							onClick={handleClick}
							style={
								!hasShifted
									? { opacity: '0' }
									: isHovered
									? { opacity: '1' }
									: { opacity: '0' }
							}
							disabled={isDisabled ? true : false}
						>
							<PrevArrowIcon />
						</button>
						<div id={`carousel${id}`} className='carousel'>
							{hasShifted === false
								? carouselData.map((value, index) => {
										if (
											index <=
											Math.round(
												carouselData.length / 2 -
													cardsVisible / 2 +
													1
											)
										) {
											return (
												<MovieCard
													key={index}
													index={index}
													movieIdx={null}
												/>
											);
										} else {
											return (
												<MovieCard
													key={index}
													idx={index}
													movieIdx={value}
												/>
											);
										}
								  })
								: carouselData.map((value, index) => {
										return (
											<MovieCard
												key={index}
												idx={index}
												movieIdx={value}
											/>
										);
								  })}
						</div>
						<button
							id='next'
							className='carousel-button'
							onClick={handleClick}
							style={
								isHovered ? { opacity: '1' } : { opacity: '0' }
							}
							disabled={isDisabled ? true : false}
						>
							<NextArrowIcon />
						</button>
					</div>
				</div>
			) : null}
		</>
	);
};

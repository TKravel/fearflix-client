import { useEffect, useState } from 'react';
import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';
import { getCardsVisible, getCardWidth } from '../../../utils/carouselUtils';

export const Carousel = ({ id, title, movieList }) => {
	const [loading, setLoading] = useState(true);
	const [carouselData, setCarouselData] = useState([]);
	const [hasShifted, setHasShifted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const arrShiftAmount = getCardsVisible(window.innerWidth);
	const cardWidth = getCardWidth(window.innerWidth);
	const cardsVisible =
		arrShiftAmount * ((window.innerWidth / 100) * cardWidth);
	const carouselLength = (window.innerWidth / 100) * cardWidth * 28;
	const buttonWidth = (window.innerWidth / 100) * 5;

	useEffect(() => {
		if (carouselData.length === 0) {
			setCarouselData(movieList);
			console.log(carouselData);
			setLoading(false);
		}
	}, [carouselData]);

	const shiftCards = (direction) => {
		if (direction === 'next') {
			setCarouselData((prevValue) => {
				let arr = [...prevValue];
				const cards = arr.slice(0, arrShiftAmount);
				const shiftedArr = arr.filter((movie, index) => {
					return index >= arrShiftAmount;
				});
				return [...shiftedArr, ...cards];
			});
		} else if (direction === 'prev') {
			setCarouselData((prevValue) => {
				let arr = [...prevValue];
				const cards = arr.slice(
					arr.length - arrShiftAmount,
					arr.length
				);
				const shiftedArr = arr.filter((movie, index) => {
					return index <= arr.length - arrShiftAmount - 1;
				});
				return [...cards, ...shiftedArr];
			});
		}
	};

	const toggleShift = (direction) => {
		const carouselTrack = document.getElementById(`carousel${id}`);
		if (carouselTrack === null) {
			console.log('returned');
			return;
		}
		if (direction === 'next') {
			if (carouselTrack.style.transform) {
				carouselTrack.style.removeProperty('transition-duration');
				carouselTrack.style.removeProperty('transform');
			} else {
				carouselTrack.style.setProperty('transition-duration', '1s');
				carouselTrack.style.setProperty(
					'transform',
					`translateX( ${-Math.abs(cardsVisible)}px )`
				);
			}
		} else if (direction === 'prev') {
			if (!carouselTrack.style.transform) {
				carouselTrack.style.setProperty('transition-duration', '1s');
				carouselTrack.style.setProperty(
					'transform',
					`translateX(${cardsVisible}px )`
				);
			} else {
				carouselTrack.style.removeProperty('transition-duration');
				carouselTrack.style.removeProperty('transform');
			}
		}
	};

	const handleClick = (e) => {
		const direction = e.currentTarget.id;
		setIsDisabled(true);
		toggleShift(direction);
		setTimeout(() => shiftCards(direction), 1000);
		setTimeout(() => toggleShift(direction), 1000);
		setTimeout(() => setIsDisabled(false), 1000);
		setHasShifted(true);
	};

	return (
		<>
			{!loading ? (
				<div className='carousel-container'>
					<h3>{title}</h3>
					<div className='carousel-wrapper'>
						<button
							id='prev'
							className='carousel-button'
							onClick={handleClick}
							style={!hasShifted ? { opacity: '0' } : {}}
							disabled={
								!hasShifted ? true : isDisabled ? true : false
							}
						>
							<PrevArrowIcon />
						</button>
						<div
							id={`carousel${id}`}
							className='carousel'
							style={{
								transitionDuration: `1s`,
								left: `${
									-Math.abs(carouselLength / 2) +
									buttonWidth -
									7
								}px`,
							}}
						>
							{hasShifted === false
								? carouselData.map((value, index) => {
										if (
											index <=
											Math.round(
												carouselData.length / 2 -
													arrShiftAmount / 2 +
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

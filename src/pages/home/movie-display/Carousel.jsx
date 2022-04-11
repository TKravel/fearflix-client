import { useEffect, useState } from 'react';
import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';
import {
	getButtonWidth,
	getCardsVisible,
	getCardWidth,
	getViewportWithoutScrollbar,
} from '../../../utils/carouselUtils';

export const Carousel = ({ id, title, movieList }) => {
	const [loading, setLoading] = useState(true);
	const [carouselData, setCarouselData] = useState([]);
	const [hasShifted, setHasShifted] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	const [windowWidth, setWindowWidth] = useState(
		getViewportWithoutScrollbar()
	);
	let arrShiftAmount = getCardsVisible(windowWidth);
	let cardWidth = getCardWidth(windowWidth);
	let cardsVisible = arrShiftAmount * cardWidth;
	let carouselLength = cardWidth * 28 + 28 * 6;
	let buttonWidth = getButtonWidth();

	const carouselStyle = {
		left: `${
			-Math.abs(carouselLength / 2) +
			(arrShiftAmount * (cardWidth + 6)) / 2 -
			3
		}px`,
	};

	const setWindow = () => {
		setWindowWidth(getViewportWithoutScrollbar());
		arrShiftAmount = getCardsVisible(getViewportWithoutScrollbar());
		cardWidth = getCardWidth(getViewportWithoutScrollbar());
		cardsVisible = arrShiftAmount * cardWidth;
		carouselLength = Math.round(cardWidth * 28) + 28 * 6;
		buttonWidth = getButtonWidth();
	};

	useEffect(() => {
		window.addEventListener('resize', setWindow);

		setWindow();

		return () => window.removeEventListener('resize', setWindow);
	}, []);

	useEffect(() => {
		if (carouselData.length === 0) {
			setCarouselData(movieList);
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
					`translateX( ${
						-Math.abs(cardsVisible) + -Math.abs(arrShiftAmount * 6)
					}px )`
				);
			}
		} else if (direction === 'prev') {
			if (!carouselTrack.style.transform) {
				carouselTrack.style.setProperty('transition-duration', '1s');
				carouselTrack.style.setProperty(
					'transform',
					`translateX(${cardsVisible + arrShiftAmount * 6}px )`
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
							<PrevArrowIcon styles='carousel-button-icon' />
						</button>
						<div
							id={`carousel${id}`}
							className='carousel'
							style={carouselStyle}
						>
							{hasShifted === false
								? carouselData.map((value, index) => {
										if (
											index <
											carouselData.length / 2 -
												arrShiftAmount / 2
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
							<NextArrowIcon styles='carousel-button-icon' />
						</button>
					</div>
				</div>
			) : null}
		</>
	);
};

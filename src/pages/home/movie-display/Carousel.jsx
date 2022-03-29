import { useEffect, useState } from 'react';
import { NextArrowIcon } from '../../../svg/NextArrowIcon';
import { PrevArrowIcon } from '../../../svg/PrevArrowIcon';
import { MovieCard } from './MovieCard';
import { movieData } from '../../../data';

export const Carousel = () => {
	const [carouselData, setCarouselData] = useState([]);
	const [hasShifted, setHasShifted] = useState(false);
	const cardsVisible = Math.floor((window.innerWidth - 64) / 202);

	useEffect(() => {
		const state = [];
		for (let i = carouselData.length; i < 28; i++) {
			let randomNum = Math.ceil(Math.random() * movieData.length - 1);

			if (!carouselData.includes(randomNum)) {
				state.push(randomNum);
			}
		}
		console.log(state);
		setCarouselData(state);
		const carouselEl =
			document.getElementsByClassName('carousel-wrapper')[0];

		if (carouselEl !== undefined) {
			carouselEl.addEventListener('pointerover', () => {
				console.log('over');
			});
		}
	}, []);

	const carouselTrack = document.getElementById('carousel');

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
			// carouselTrack.classList.add('carousel-slide');
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
					`translateX( ${-Math.abs(cardsVisible * 202)}px )`
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
					`translateX(${cardsVisible * 202}px )`
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
		toggleShift(direction);
		setTimeout(() => toggleShift(direction), 1000);
		setTimeout(() => shiftCards(direction), 1000);
		setHasShifted(true);
	};

	return (
		<div className='carousel-container'>
			<h3>Cheap scares</h3>
			<div className='carousel-wrapper'>
				<button
					id='prev'
					className='carousel-button'
					onClick={handleClick}
					style={!hasShifted ? { opacity: '0' } : { opacity: '1' }}
				>
					<PrevArrowIcon />
				</button>
				<div id='carousel' className='carousel'>
					{hasShifted === false
						? carouselData.map((value, index) => {
								if (index <= carouselData.length / 2 - 1) {
									return (
										<MovieCard
											key={index}
											movieIdx={null}
										/>
									);
								} else {
									return (
										<MovieCard
											key={index}
											movieIdx={value}
										/>
									);
								}
						  })
						: carouselData.map((value, index) => {
								return (
									<MovieCard key={index} movieIdx={value} />
								);
						  })}
				</div>
				<button
					id='next'
					className='carousel-button'
					onClick={handleClick}
				>
					<NextArrowIcon />
				</button>
			</div>
		</div>
	);
};

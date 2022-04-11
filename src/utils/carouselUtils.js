// returns postion of movie card element
export const getPos = (el) => {
	let pos = el.getBoundingClientRect();
	return { x: pos.left, y: getElementYOffset(el) };
};

// gets postion of card element from top of page
const getElementYOffset = (element) => {
	const scrollOnWindow =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (
					document.documentElement ||
					document.body.parentNode ||
					document.body
			  ).scrollTop;
	const rect = element.getBoundingClientRect();
	let distanceFromTopOfPage = rect.top;
	if (scrollOnWindow !== 0) {
		distanceFromTopOfPage = rect.top + scrollOnWindow;
	}

	return distanceFromTopOfPage;
};

export const getCardsVisible = (width) => {
	if (width < 500) {
		return 2;
	} else if (width < 900) {
		return 4;
	} else {
		return 6;
	}
};

export const getCardWidth = (vw) => {
	if (vw < 500) {
		return Math.round((getViewportWithoutScrollbar() / 100) * 40);
	} else if (vw < 900) {
		return Math.round((getViewportWithoutScrollbar() / 100) * 22.5);
	} else {
		return Math.round((getViewportWithoutScrollbar() / 100) * 15);
	}
};

export const getButtonWidth = () => {
	return Math.round((getViewportWithoutScrollbar() / 100) * 5);
};

export const getViewportWithoutScrollbar = () => {
	const scrollbarWidth =
		window.innerWidth -
		document.getElementsByTagName('html')[0].clientWidth;
	return window.innerWidth - scrollbarWidth;
};

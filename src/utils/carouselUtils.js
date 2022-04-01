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

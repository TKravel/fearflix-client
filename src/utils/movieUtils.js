export const getRating = (age) => {
	let rating = '';

	if (age >= 0 && age <= 7) {
		rating = 'G';
	} else if (age > 7 && age <= 10) {
		rating = 'PG';
	} else if (age > 10 && age <= 13) {
		rating = 'PG-13';
	} else if (age > 13) {
		rating = 'R';
	} else {
		rating = 'NA';
	}

	return rating;
};

export const displayRuntime = (num) => {
	console.log(typeof num);
	const hours = Math.floor(num / 60);
	const mins = num % 60;
	return `${hours}h ${mins}m`;
};

export const getCast = (arr) => {
	let displayableCastString = '';

	for (let i = 0; i <= arr.length - 1; i++) {
		if (i === arr.length - 1) {
			displayableCastString += ` ${arr[i]}.`;
		} else {
			displayableCastString += ` ${arr[i]},`;
		}
	}
	return displayableCastString;
};

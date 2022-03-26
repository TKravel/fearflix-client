export const getRating = (age) => {
	console.log(typeof age);
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

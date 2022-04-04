export const IFrame = ({ styles, vidURL }) => {
	const handleError = () => {
		console.log('error');
	};
	return (
		<iframe
			id='player'
			onError={handleError}
			className={styles}
			src={`https://www.youtube.com/embed/${vidURL}?autoplay=1&mute=1&controls=0`}
		></iframe>
	);
};

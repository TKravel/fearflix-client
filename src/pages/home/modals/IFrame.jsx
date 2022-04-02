export const IFrame = ({ styles, vidURL }) => {
	return (
		<iframe
			className={styles}
			height='200'
			width='300'
			src={`https://www.youtube.com/embed/${vidURL}?autoplay=1&mute=1&controls=0`}
		></iframe>
	);
};

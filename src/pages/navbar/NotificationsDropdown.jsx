import { NotificationCard } from './NotificationCard';

const fakeDates = [
	'2 days ago',
	'5 days ago',
	'1 week ago',
	'2 weeks ago',
	'2 weeks ago',
	'1 month ago',
	'1 month ago',
	'1 month ago',
];
export const NotificationsDropdown = () => {
	const randomMovies = [];
	const headers = [];

	for (let i = 0; i < 8; i++) {
		let randomNum = Math.floor(Math.random() * 125);
		randomMovies.push(randomNum);
	}
	for (let i = 0; i < 8; i++) {
		const headerData = ['Coming soon', 'New arrival', 'Continue watching'];
		let randomNum = Math.floor(Math.random() * 2);
		headers.push(headerData[randomNum]);
	}

	return (
		<ul>
			{randomMovies.map((value, index) => {
				return (
					<li key={`${value}notification`}>
						<NotificationCard
							header={headers[index]}
							movieIdx={value}
							date={fakeDates[index]}
						/>
					</li>
				);
			})}
		</ul>
	);
};

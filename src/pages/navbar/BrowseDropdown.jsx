import { DownArrowSolidIcon } from '../../svg/DownArrowSolidIcon';

export const BrowseDropdown = () => {
	return (
		<ul className='browse-dropdown-list'>
			<li>Home</li>
			<li>TV Shows</li>
			<li className='active'>Movies</li>
			<li>New & Popular</li>
			<li>My List</li>
		</ul>
	);
};

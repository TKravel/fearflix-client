import { useEffect } from 'react';
import { BellIcon } from '../../svg/BellIcon';
import { DownArrowSolidIcon } from '../../svg/DownArrowSolidIcon';
import { SearchIcon } from '../../svg/SearchIcon';
import { UserDropdown } from './UserDropdown';

export const Nav = () => {
	useEffect(() => {
		const navbar = document.querySelector('nav');

		window.onscroll = function () {
			// pageYOffset or scrollY
			if (window.pageYOffset > 0) {
				navbar.classList.add('nav-scrolled');
			} else {
				navbar.classList.remove('nav-scrolled');
			}
		};
	});
	return (
		<nav>
			<ul className='left-nav'>
				<li className='nav-main-li-item'>
					<img className='main-logo' src='/fearflix-logo.png' />
				</li>
				<li className='nav-li-item'>Home</li>
				<li className='nav-li-item'>TV Shows</li>
				<li className='nav-li-item'>Movies</li>
				<li className='nav-li-item'>New & Popular</li>
				<li className='nav-li-item'>My List</li>
			</ul>
			<ul className='right-nav'>
				<li>
					<SearchIcon styles='nav-search-icon' />
				</li>
				<li>
					<BellIcon styles='nav-alerts-icon' />
				</li>
				<li>
					<div className='account-settings'>
						<div>
							<span>Profile</span>
						</div>
						<div>
							<DownArrowSolidIcon />
						</div>
						<div className='user-dropdown'>
							<UserDropdown />
						</div>
					</div>
				</li>
			</ul>
		</nav>
	);
};

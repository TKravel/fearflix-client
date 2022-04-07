import { useEffect } from 'react';
import { BellIcon } from '../../svg/BellIcon';
import { DownArrowSolidIcon } from '../../svg/DownArrowSolidIcon';
import { SearchIcon } from '../../svg/SearchIcon';
import { NotificationsDropdown } from './NotificationsDropdown';
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

	const notificationMouseOver = () => {
		const notficationDropdown = document.getElementsByClassName(
			'notification-dropdown'
		)[0];
		const activeIndicator = document.getElementsByClassName(
			'navigation-menu-active-indicator'
		)[0];
		activeIndicator.classList.remove('hide-indicator');
		notficationDropdown.classList.add('dropdown-active');
	};
	const notificationMouseLeave = () => {
		const notficationDropdown = document.getElementsByClassName(
			'notification-dropdown'
		)[0];
		const activeIndicator = document.getElementsByClassName(
			'navigation-menu-active-indicator'
		)[0];
		activeIndicator.classList.add('hide-indicator');
		notficationDropdown.classList.remove('dropdown-active');
	};

	const avatarMouseOver = () => {
		const indicatorIcon = document.getElementsByClassName(
			'nav-avatar-indicator-closed'
		)[0];
		const userDropdown =
			document.getElementsByClassName('user-dropdown')[0];
		const bottomIndicatorIcon = document.getElementsByClassName(
			'user-menu-active-indicator'
		)[0];
		indicatorIcon.classList.add('indicator-active');
		userDropdown.classList.add('dropdown-active');
		bottomIndicatorIcon.classList.remove('hide-indicator');
	};

	const avatarMouseLeave = () => {
		const indicatorIcon = document.getElementsByClassName(
			'nav-avatar-indicator-closed'
		)[0];
		const userDropdown =
			document.getElementsByClassName('user-dropdown')[0];
		const bottomIndicatorIcon = document.getElementsByClassName(
			'user-menu-active-indicator'
		)[0];
		indicatorIcon.classList.remove('indicator-active');
		userDropdown.classList.remove('dropdown-active');
		bottomIndicatorIcon.classList.add('hide-indicator');
	};
	return (
		<nav>
			<ul className='left-nav'>
				<li className='nav-main-li-item'>
					<img
						className='main-logo'
						src='/fearflix-logo.png'
						alt='Fearflix logo'
					/>
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
					<div
						className='notification-menu-container'
						onMouseOver={notificationMouseOver}
						onMouseLeave={notificationMouseLeave}
					>
						<BellIcon styles='nav-alerts-icon' />
						<div className='navigation-menu-active-indicator hide-indicator'>
							<DownArrowSolidIcon styles='open-dropdown-indicator' />
						</div>
						<div className='notification-dropdown'>
							<NotificationsDropdown />
						</div>
					</div>
				</li>
				<li>
					<div
						className='account-settings'
						onMouseOver={avatarMouseOver}
						onMouseLeave={avatarMouseLeave}
					>
						<div>
							<img
								className='avatar-img'
								src='/img/avatar2.png'
								alt='avatar icon'
							/>
							<div className='user-menu-active-indicator hide-indicator'>
								<DownArrowSolidIcon styles='open-dropdown-indicator' />
							</div>
						</div>
						<div>
							<DownArrowSolidIcon styles='nav-avatar-indicator-closed' />
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

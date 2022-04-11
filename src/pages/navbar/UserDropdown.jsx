import { BlankUserIcon } from '../../svg/BlankUserIcon';
import { HelpIcon } from '../../svg/HelpIcon';
import { PencilIcon } from '../../svg/PencilIcon';

export const UserDropdown = () => {
	return (
		<>
			<ul>
				<li>
					<div className='user-menu-item-flex-container'>
						<img
							className='avatar-img'
							src='/img/avatar1.png'
							alt='avatar icon'
						/>
						<span>Parents</span>
					</div>
				</li>
				<li>
					<div className='user-menu-item-flex-container'>
						<img
							className='avatar-img'
							src='/img/avatar4.png'
							alt='avatar icon'
						/>
						<span>Neighbors</span>
					</div>
				</li>
				<li>
					<div className='user-menu-item-flex-container'>
						<img
							className='avatar-img'
							src='/img/avatar3.png'
							alt='avatar icon'
						/>
						<span>Friends</span>
					</div>
				</li>
				<li>
					<div className='user-menu-item-flex-container'>
						<PencilIcon styles='dropdown-item-icon' />
						<span>Manage Accounts</span>
					</div>
				</li>
			</ul>
			<ul>
				<li>DVD</li>
			</ul>
			<ul>
				<li>
					<div>
						<a className='user-menu-item-flex-container'>
							<BlankUserIcon styles='dropdown-item-icon' />
							Account
						</a>
					</div>
				</li>
				<li>
					<div>
						<a className='user-menu-item-flex-container'>
							<HelpIcon styles='dropdown-item-icon' />
							Help Center
						</a>
					</div>
				</li>
			</ul>
			<ul>
				<li>Sign out of Fearflix</li>
			</ul>
		</>
	);
};

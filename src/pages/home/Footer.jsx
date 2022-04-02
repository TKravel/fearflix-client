import { FacebookIcon } from '../../svg/FacebookIcon';
import { InstagramIcon } from '../../svg/InstagramIcon';
import { TwitterIcon } from '../../svg/TwitterIcon';
import { YoutubeIcon } from '../../svg/YoutubeIcon';

export const Footer = () => {
	return (
		<footer>
			<div className='footer-container'>
				<div className='footer-social'>
					<span>
						<FacebookIcon styles='footer-social-icon' />
					</span>
					<span>
						<InstagramIcon styles='footer-social-icon' />
					</span>
					<span>
						<TwitterIcon styles='footer-social-icon' />
					</span>
					<span>
						<YoutubeIcon styles='footer-social-icon' />
					</span>
				</div>
				<ul>
					<li>
						<a>Audio Description</a>
					</li>
					<li>
						<a>Help Center</a>
					</li>
					<li>
						<a>Gift Cards</a>
					</li>
					<li>
						<a>Media Center</a>
					</li>
					<li>
						<a>Investor Relations</a>
					</li>
					<li>
						<a>Jobs</a>
					</li>
					<li>
						<a>Terms of Use</a>
					</li>
					<li>
						<a>Privacy</a>
					</li>
					<li>
						<a>Legal Notices</a>
					</li>
					<li>
						<a>Cookie Preferences</a>
					</li>
					<li>
						<a>Corporate Information</a>
					</li>
					<li>
						<a>Contact Us</a>
					</li>
				</ul>
				<div>
					<button className='footer-button'>Service Code</button>
				</div>
				<div className='copyright-info'>
					<span>&copy; 1997-2022 Fearflix, Inc.</span>
				</div>
			</div>
		</footer>
	);
};

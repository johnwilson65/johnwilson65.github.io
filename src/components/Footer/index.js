import React from 'react';
import Container from '../Container';
import theme from '../../theme';
import Link from 'gatsby-link';
import { MdEmail, MdLocationOn, MdPhone, MdPhoneAndroid } from 'react-icons/lib/md';

const Footer = ({ services }) =>
	<footer>
		<div className="footer-content">
			<Container>
				<div className="footer-content-inner">
					<nav className="flex-item">
						<h4>Navigate</h4>
						<ul>
							<li><Link to={'/'}>Home</Link></li>
							<li><Link to={'/about'}>About</Link></li>
							<li><Link to={'/contact'}>Contact</Link></li>
						</ul>
					</nav>
					<nav className="flex-item">
						<h4>Services</h4>
						<ul>{services}</ul>
					</nav>
					<div className="flex-item">
						<h4>Contact Details</h4>
						<address>
							Castle Electrical Services Ltd<br />
	            43 Chestnut Hill<br/>
	            Eaton<br/>
	            Norwich<br/>
	            NR4 6NL<br/>
	          </address>
	          <p><MdEmail />Email: <a href="mailto:castle.electrical@btconnect.com">castle.electrical@btconnect.com</a></p>
		        <p><MdPhone />Landline: <a href="tel:01603507222">01603 507222</a></p>
		        <p><MdPhoneAndroid />Mobile: <a href="tel:07771512876">07771 512876</a></p>
					</div>
				</div>
			</Container>
			<Container>
				<p className="copy-info">Copyright &copy;{(new Date().getFullYear())} Castle Electrical Services Ltd (Reg No. 7027862). All Rights Reserved.</p>
			</Container>
		</div>
		<div className="site-attribution">
			<Container>
				<p>Site By: <a href="https://www.castle-electrical.org.uk">Castle Electrical Services Ltd</a></p>
			</Container>
		</div>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(
				{
					"@context":"http://schema.org",
					"@type":"LocalBusiness",
					"name":"Castle Electrical Services Ltd",
					"url":"https://www.castle-electrical.org.uk",
					"logo":"https://www.castle-electrical.org.uk/logos/logo-1024.png",
					"image":"https://www.castle-electrical.org.uk/logos/logo-1024.png",
					"telephone":"+44 (0)1603 507222",
					"email":"castle.electrical@btconnect.com",
					"address":{"@type":"PostalAddress","streetAddress":"43 Chestnut Hill",
					"addressLocality":"Norwich",
					"addressRegion":"Norfolk",
					"postalCode":"NR4 6NL",
					"addressCountry":"United Kingdom"
				},
				"sameAs":[]
				}
			)}}
		/>
		<style jsx>{`
			.footer-content {
				padding: 3em 0;
				overflow: hidden;
				color: ${theme.colors.white};
				background-color: ${theme.colors.grey};
			}

			.flex-item {
				margin-bottom: 2em;
			}

			.flex-item:last-child {
				margin-bottom: 0;
			}

			address {
				font-style: normal;
			}

			h4, a {
				color: white;
			}

			h4 {
				margin-bottom: .5em;
			}
			.footer-content-inner {
				display: flex;
				flex-direction: column;
				font-size: 14px;
				color: #ddd;
			}

			.copy-info {
				text-align: center;
				margin-top: 2em;
				margin-bottom: 0;
				font-size: 14px;
			}

			.footer-content-inner nav :global(a) {
				text-decoration: none;
				color: #ddd;
			}

			.footer-content-inner nav :global(a:hover) {
				color: white;
			}

			.footer-content-inner nav ul, .footer-content-inner nav :global(ul) {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.footer-content-inner nav ul li, .footer-content nav ul li :global(ul li), .footer-content-inner nav :global(ul li)  {
				padding: .2em 0;
				margin-bottom: 0;
			}

			.footer-content nav ul li :global(ul) {
				padding-left: .5em;
			}

			.footer-content-inner nav ul li:last-child {
				border-bottom: none;
			}

			.site-attribution {
				padding: .4em 0;
				text-align: center;
				overflow: hidden;
				background-color: ${theme.colors.black};
				color: ${theme.colors.white};
			}

			.site-attribution p {
				font-size: 12px;
				margin: 0;
			}

			.site-attribution a {
				text-decoration: none;
				color:${theme.colors.white};
			}

			h2 {
				margin-top: 1.45rem;
				text-align: center;
				color: ${theme.colors.red}
			}

			@media(min-width:${theme.breakpoints.lg}px) {
				.footer-content-inner {
					flex-direction: row;
					justify-content:space-between;
				}
				.flex-item {
					width: 30%;
				}
			}
		`}</style>
	</footer>

export default Footer;
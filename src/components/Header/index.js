import React, { Component } from 'react';
import Link from 'gatsby-link';
import theme from '../../theme';
import { Logo } from './logo';
import NavToggle from './NavToggle';
import Container from '../Container';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			navHeight: 0
		};

		this.toggle = this.toggle.bind(this);
		this.onMediaChangeToMedium = this.onMediaChangeToMedium.bind(this);
	}

	onMediaChangeToMedium(e) {
		if(e.matches) {
			this.setState({
				navHeight: this.list.offsetHeight
			});
		}
	}

	componentDidMount() {
		const mediaQueryMedium = window.matchMedia(`(max-width: ${theme.breakpoints.lg}px)`);

		this.setState({
			navHeight: this.list.offsetHeight
		});

		mediaQueryMedium.addListener(this.onMediaChangeToMedium);

	}

	toggle() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		return (
			<header className={`main-header ${this.state.open ? 'opened' : ''}`}>
				<Container>
				<div className="main-header__inner">
					<div className="logo">
						<Link to={'/'}>
							<h2><Logo /></h2>
						</Link>
					</div>
					<div className="call">
						<p><span>Call us on:{' '}</span>
						<a title="Call us on Landline" href="tel:01603 507222">01603 507222</a><span>{' '}or{' '}</span>
						<a title="Call us on Mobile" href="tel:07771512876">07771512876</a>
						</p>
					</div>
					<nav>
						<ul ref={(ref) => { this.list = ref}}>
							<li><Link activeClassName="active" onClick={this.toggle} exact to={'/'}>Home</Link></li>
							<li><Link activeClassName="active" onClick={this.toggle} exact to={'/about'}>About</Link></li>
							<li><Link activeClassName="active" onClick={this.toggle} to={'/services'}>Services</Link>
								<ul>{this.props.services(this.toggle)}</ul>
							</li>
							<li><Link activeClassName="active" onClick={this.toggle} exact to={'/contact'}>Contact</Link></li>
						</ul>
					</nav>
					<NavToggle open={this.state.open} toggle={this.toggle} />
				</div>
				</Container>
				<style jsx>{`
					.main-header {
						position: relative;
						background-color: ${theme.colors.red};
						transition: background-color 0.25s ease-in-out;
						margin-bottom: 33px;
					}

					.main-header :global(button) {
						position: absolute;
						top: 0;
						right: 0;
					}

					nav {
						display: block;
						margin-left: -1em;
						margin-right: -1em;
						overflow: hidden;
						height: 0;
						background-color: ${theme.colors.grey};
						transition: height 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
					}

					nav ul {
						display: block;
						padding: 0;
						margin: 0;
					}

					nav ul li {
						display: block;
						border-bottom: 1px solid ${theme.colors.black};
						margin: 0;
					}

					nav ul li :global(a) {
						display: block;
						padding: 1em 1em 1em 2em;
						color: ${theme.colors.white};
						text-transform: uppercase;
						text-decoration: none;
						
					}

					nav ul li ul :global(li) {
						margin-bottom: 0;
						text-indent: 1em;
					}

					nav ul li :global(a.active) {
						//color: ${theme.colors.red};
						background-color: ${theme.colors.red};
					}

					.main-header.opened nav {
						height: ${this.state.navHeight}px;
					}

					.logo {
						display: block;
						width: 180px;
						height: auto;
						position: relative;
						transition: width 0.25s ease-in-out;
					}

					.logo h2 {
						margin-bottom: 0;
					}

					.logo :global(svg) {
						width: 100%;
					}

					.logo p {
						display: block;
						position: relative;
						line-height: 1.2;
						margin-top: .5em;
						z-index: 2;
						background-color: ${theme.colors.white};
						margin-bottom: 0;
					}
					.logo :global(a) {
						display: block;
						font-weight: bolder;
						color: black;
						text-decoration: none;
					}
					.call {
						position: absolute;
						margin-left: -1em;
						display: block;
						top: 100%;
						width: 100%;
						border-top: 1px solid ${theme.colors.grey};
						background-color: ${theme.colors.red};
						padding: .5em 0;
					}
					.call p {
						text-align: center;
						font-size: 0.875em;
						color: ${theme.colors.white};
						margin-bottom: 0;
					}
					.call a {
						background-color: ${theme.colors.grey};
						text-decoration: none;
						padding: .2em .5em;
						color: ${theme.colors.white};
					}

					@media(min-width: ${theme.breakpoints.md}px) {
						.main-header {
							margin-bottom: 0;
						}

						.call {
							font-size: 1.2em;
							border-top: none;
							background-color: transparent;
							top: 6px;
						}
					}

					@media(min-width: ${theme.breakpoints.lg}px) and ( max-height: 650px) {
					  .main-header {
							position: relative !important;
						}
					}

					@media(min-width: ${theme.breakpoints.lg}px) {
						.logo {
							order: 1;
							width: 280px;
						}

						.logo :global(a) {
							position: relative;
							top: 50%;
							transform: translateY(-50%);
						}

						nav {
							order: 2;
							height: auto;
							background-color: transparent;
							overflow: visible;
						}

						nav ul {
							display: flex;
							align-items: center;
							justify-content: center;
							height: 100%;
							flex-direction: row;

						}

						nav ul li {
							position: relative;
							border-bottom: none;
						}

						nav ul li :global(a) {
							padding: 1em 1.5em;
							color: ${theme.colors.grey};
							transition: all .2s ease-in-out;
						}

						nav ul li :global(a:hover) {
							background-color: ${theme.colors.grey};
							color: ${theme.colors.white};

						}

						nav ul li :global(a.active) {
							background-color: ${theme.colors.red};
							color: ${theme.colors.white};
						}

						nav ul li ul {
							position: absolute;
							display: none;
							background-color: ${theme.colors.white};
							z-index: 1000;
							list-style: none;
							box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
						}

						nav ul li:hover ul {
							display: block;
							height: auto;
						}

						nav ul li ul :global(li) {
							display: block;
							white-space: nowrap;
							margin-bottom: 0;
							text-indent: 0;
						}

						.call {
							font-size: 1em;
							width: 150px;
							padding: .5em;
							background-color: transparent;
							order: 3;
							position: relative;
							top: 0;
						}

						.call p {
							display: flex;
							flex-direction: column;
							color: ${theme.colors.grey};
						}

						.call a {
							
						}

						.main-header.opened nav {
							height: auto;
						}

						.main-header {
							position: fixed;
							z-index: 100;
							width: 100%;
							border-top: 1px solid ${theme.colors.red};
							border-bottom: 1px solid ${theme.colors.red};
							background-color: #eee;
						}

						.main-header__inner {
							display: flex;
							margin-left: -1em;
							margin-right: -1em;
							flex-direction: row;
							justify-content: space-between;
						}
					}

				`}</style>
			</header>
		);
	}
}

export default Header;
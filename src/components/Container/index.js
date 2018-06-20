import React from 'react';
import theme from '../../theme';

const Container = (props) =>
	<div className="container">
		{props.children}
		<style jsx>{`
			.container {
				display block;
				padding: 0 1em;
			}

			@media(min-width: ${theme.breakpoints.lg}px) {
				.container {
					margin: 0 auto;
					max-width: 972px;
				}
			}

			@media(min-width: ${theme.breakpoints.xl}px) {
				.container {
					max-width: 1180px;
				}
			}
		`}</style>
	</div>

export default Container;
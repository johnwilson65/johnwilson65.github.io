import React, { Component } from 'react';
import theme from '../../theme';

const NavToggle = (props) =>
	<button onClick={props.toggle}
		className={`menu-toggle ${props.open ? 'opened' : ''}`} 
		aria-expanded={props.open ? 'true' : 'false'}>
		<span className="screen-reader-text">Menu</span>
	  <svg className="icon icon-menu-toggle" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100">
	      <g className="svg-menu-toggle">
	          <path className="line line-1" d="M5 13h90v14H5z"/>
	          <path className="line line-2" d="M5 43h90v14H5z"/>
	          <path className="line line-3" d="M5 73h90v14H5z"/>
	      </g>
	  </svg>
	  <style jsx>{`
	  	button {
	  		border: none;
	  		border-radius: 0;
	  		background: ${theme.colors.darkRed};
	  		color: ${theme.colors.white};
	  		cursor: pointer;
	  		display: inline-block;
	  		text-transform: uppercase;
	  		transition: all 0.25s ease-in-out;
	  	}

	  	.menu-toggle {
	  		font-size: 0.875em;
	  		padding: .5em;
	  	}

	  	.menu-toggle:focus {
	  		outline:thin dotted ${theme.colors.white};
	  		outline-offset: -2px;
	  	}

	  	.icon {
	  		display: inline-block;
	  		fill: currentColor;
	  		height: 1em;
	  		width: 1em;
	  		vertical-align: middle;
	  		position: relative;
	  		top: -0.0625em;
	  	}

	  	.icon-menu-toggle {
	  		width: 2.9em;
	  		height: 2.9em;
	  		top: 0;
	  	}

	  	.svg-menu-toggle .line {
	  		opacity: 1;
	  		transform: rotate(0) translateY(0) translateX(0);
	  		transform-origin: 1em 1em;
	  		transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
	  	}

	  	.svg-menu-toggle .line-1 {
	  		transform-origin: 1em 2.5em;
	  	}

	  	.svg-menu-toggle .line-3 {
	  		transform-origin: 1em 4.5em;
	  	}

	  	.menu-toggle.opened .svg-menu-toggle .line-1 {
	  		transform: rotate(45deg) translateY(0) translateX(0);
	  	}

	  	.menu-toggle.opened .svg-menu-toggle .line-2 {
	  		opacity: 0;
	  	}

	  	.menu-toggle.opened .svg-menu-toggle .line-3 {
	  		transform: rotate(-45deg) translateY(0) translateX(0);
	  	}

	  	@media(min-width:${theme.breakpoints.lg}px) {
	  		button {
	  			display: none;
	  		}
	  	}
	  `}</style>
	</button>

export default NavToggle;

import React from 'react';
import Img from '../ImageWrap';
import theme from '../../theme';
import Container from '../Container';
import { MdArrowDropDown as Arrow } from 'react-icons/lib/md';

export const Featured = ({ title, sizes}) => 
    <div className="featured">
        <Img
            alt={title}
            sizes={sizes}
            style={{
                position: "absolute",
                left:0,
                top: 0,
                width: "100%",
                height: "100%"
            }}
        />
        <div className="content">
            <Container>
                <h1>{ title }</h1>
            </Container>
        </div>
        <style jsx>{`
            .featured {
                display: block;
                position: relative;
                height: 450px;
                line-height: 1.5;
                margin-bottom: 2em;
            }
            .content {
                position: absolute;
                bottom: 0;
                width: 100%;
                z-index: 2;
                color: ${theme.colors.white};
                background-color: ${theme.colors.red};
            }

            .content h1 {
                font-size: 1.5em;
                line-height: 2em;
                margin-bottom: 0;
            }

            @media(min-width: ${theme.breakpoints.md}px) {
                .content h1 {
                    font-size: 2em;
                }
            }
            @media(min-width: ${theme.breakpoints.lg}px) {
                .content {
                    background-color: #eee;
                    color: ${theme.colors.grey};
                }
            }
        `}</style>
    </div>


const Hero = (props) =>
	<div className="hero">
  	<Img 
  		alt="Norwich Castle"
  		sizes={props.sizes}
  		style={{
		    position: "absolute",
		    left: 0,
		    top: 0,
		    width: "100%",
		    height: "100%"
		  }}
  	/>
  	<div className="content">
        <h2>Castle Electrical Services Ltd</h2>
    	<h1>Norwich Electrical Contractors</h1>
    	<p>Qualified Electricians based in Eaton, Norwich. Carrying out all types of Electrical Wiring, Electrical Testing, covering Norwich, Norfolk, Suffolk and East Anglia.</p>
    	<button onClick={props.scrollHandler}><Arrow /></button>
    </div>
    <style jsx>{`
    	.hero {
    		display: block;
    		position: relative;
    		height: 400px;
    		line-height: 1.5;
    	}

    	button {
    		display: none;
    		cursor: pointer;
    		background-color: ${theme.colors.red};
    		padding: 0;
    		line-height: 0;
    		outline: none;
    		border: none;
    		margin-top: 6rem;
    		font-size: 6rem;
    		border-radius: 3rem;
    	}

    	button :global(svg) {
    		margin: 0;
    		padding: 0;
    		line-height: 0;
    		fill: ${theme.colors.white};
    	}

    	.hero:after {
    		display: block;
    		position: absolute;
    		content: '';
    		left: 0;
    		right: 0;
    		top: 0;
    		bottom: 0;
    		z-index: 1;
    		background-color: rgba(0,0,0,0.4);
    	}
    	.content {
    		position: absolute;
    		z-index: 3;
    		min-width: 250px;
    		color: ${theme.colors.white};
    		left: 50%;
    		top: 50%;
    		transform: translate(-50%,-50%);
    	}

    	.content h1 {
    		text-transform: uppercase;
    		font-size: 1.5em;
    		line-height: 1;
    		margin: 0;
    	}

        .content h2 {
            font-size: 1em;
            display: inline-block;
            padding: .5em .4em;
            border-radius: .4em;
            background-color: rgba(255,255,255,0.5);
            color:${theme.colors.red};
            margin-bottom: 1em;
        }

    	.content p {
    		font-weight: normal;
    		margin-top: 1em;
    		font-size: 14px;
    	}

    	@media(min-width: ${theme.breakpoints.md}px) {
    		.content h1 {
    			font-size: 2em;
    		}

    		.content p {
    			font-size: 1em;
    		}
    	}

    	@media(min-width: ${theme.breakpoints.lg}px) {
    		button {
    			display: block;
    		}
    		.hero {
    			height: 100vh;
    		}
    		.content h1 {
    			font-size: 3.5em;
    		}

    		.content p {
    			font-size: 1.2em;
    		}
    	}
    `}</style>
  </div>

export default Hero;
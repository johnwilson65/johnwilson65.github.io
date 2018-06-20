import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import theme from '../../theme';

const ServicesBlock = ({ data }) => {
	
	const serviceInfo = data.map((data) => 
		<Link key={data.node.id} to={data.node.frontmatter.path} className="service">
			<div className="service-image">
				<Img 
					alt={data.node.frontmatter.title}
					sizes={data.node.frontmatter.featuredImage.childImageSharp.sizes}
				/>
			</div>
			<div className="service-excerpt">
				<h4>{data.node.frontmatter.title}</h4>
				<div className="service-excerpt-content">
					{data.node.excerpt + "Read More"}
				</div>
			</div>
			<style jsx>{`
				.service-image {
					position: relative;
				}
				.service-excerpt {
					position: absolute;
					background-color: rgba(0,0,0,0.3);
					transition: top 0.2s ease-in-out;
					top: calc(100% - 32px);
					left: 0;
					right: 0;
					bottom: 0;
					z-index: 2;
				}
				.service-excerpt-content {
					position: relative;
					top: 50%;
					width: 80%;
					display: block;
					font-size: 14px;
					padding: 1em;
					color: ${theme.colors.white};
				}
				h4 {
					color: white;
					padding: .5em;
					margin: 0;
					background-color: ${theme.colors.red};
					bottom: 0;
				}
				@media(min-width:${theme.breakpoints.lg}px) {
				 :global(.service:hover) .service-excerpt {
						top: 0;
					}
				}
			`}</style>
		</Link>);

	return (
		<div className="services-block">
			{serviceInfo}
			<style jsx>{`
				.services-block {
					display: flex;
					flex-flow: row wrap;
				}

				.services-block :global(.service) {
					display: block;
					position: relative;
					overflow: hidden;
					width: 100%;
					margin-bottom: 2em;
				}

				@media(min-width:${theme.breakpoints.md}px) {
					.services-block {
						justify-content: space-between;
					}
					.services-block :global(.service) {
						width: calc(50% - 1em);
					}
				}

				
			`}</style>
		</div>
	);
}

export default ServicesBlock;


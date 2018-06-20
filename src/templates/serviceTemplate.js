import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import theme from '../theme';
import { Featured } from '../components/Hero';
import Container from '../components/Container';
import Accreditations from '../components/Accreditations';


export default function Template({ data, transition }) {
	const { markdownRemark } = data;
	const { frontmatter, html, excerpt } = markdownRemark;

	return (
		<div className="service" style={ transition && transition.style }>
			<Helmet
      title={`${frontmatter.title} | Castle Electrical Services Ltd`}
      meta={[
        { name: 'description', content: excerpt },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: excerpt },
        { property: 'og:url', content: `${process.env.SITE_URL}/services/${frontmatter.navtitle}` },
        { property: 'og:site_name', content: 'Castle Electrical Services Ltd'},
        { property: 'og:image', content: `${process.env.SITE_URL}/logos/logo-1024.png`}
      ]}
    	/>
			<Featured title={frontmatter.title} sizes={frontmatter.featuredImage.childImageSharp.sizes} />
			<Accreditations data={data} />
			
			<Container>
				<div 
					className="service-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</Container>
			<style jsx>{`
				.service {
					line-height: 1.5;
					padding-bottom: 2em;
				}
				.service h1, .service h2 {
					color: ${theme.colors.grey};
          padding-bottom: .5rem;
          border-bottom: 2px solid ${theme.colors.red};
				}

				@media(min-width: ${theme.breakpoints.lg}px) {
					.service {
						padding-top: 93px;
					}
				}
			`}</style>
		</div>
	);
};

export const pageQuery = graphql`
	query ServicePageByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			excerpt(pruneLength: 149)
			frontmatter {
				path
				title
				navtitle
				featuredImage {
					childImageSharp{ 
						sizes(maxWidth: 1800) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
		chas: imageSharp(id: { regex: "/chas-accredited-758x403/" }) {
      resolutions(width: 100, height: 53) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicApproved: imageSharp(id: { regex: "/nic-approved-245x141/" }) {
      resolutions(width: 100, height: 57) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicDomestic: imageSharp(id: { regex: "/nic-domestic-283x144/" }) {
      resolutions(width: 100, height: 51) {
        ...GatsbyImageSharpResolutions
      }
    }
    trustedTrader: imageSharp(id: { regex: "/norfolk-trusted-trader-398x188/" }) {
      resolutions(width: 100, height: 47) {
        ...GatsbyImageSharpResolutions
      }
    }
    competentPerson: imageSharp(id: { regex: "/reg-competent-person/" }) {
      resolutions(width: 200, height: 67) {
        ...GatsbyImageSharpResolutions
      }
    }
	}
`;
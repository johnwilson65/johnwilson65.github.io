import React from 'react';
import Helmet from 'react-helmet';
import pageStyles from '../components/Styles/Page';
import Accreditations from '../components/Accreditations';
import Container from '../components/Container';
import Services from '../components/Services';

const pageTitle = "Services";
const pageDesc = `Castle Electrical Services Ltd are able to carry out all your Electrical contracting needs, be it in a commercial or domestic setting`;

const ServicePage = ({ data, transition }) => (
  <main id="about" style={ transition && transition.style }>
    <Helmet
      title={`${pageTitle} | Castle Electrical Services Ltd`}
      meta={[
        { name: 'description', content: pageDesc },
        { property: 'og:title', content: `${pageTitle}`},
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: pageDesc },
        { property: 'og:url', content: `${process.env.SITE_URL}/services` },
        { property: 'og:site_name', content: 'Castle Electrical Services Ltd'},
        { property: 'og:image', content: `${process.env.SITE_URL}/logos/logo-1024.png`},
        { name: 'robots', content: 'noindex, nofollow'}
      ]}
    />
    <Accreditations data={ data } />
    <Container>
        <h1 className="title">Our Services</h1>

        <p>Castle Electrical Services Ltd are able to carry out all Electrical work be it in a Commercial or Domestic setting.</p>
        
        
        <Services data={ data.allMarkdownRemark.edges } />
    </Container>
    <style jsx>{ pageStyles }</style>
    </main>
)

export default ServicePage;

export const pageQuery = graphql`
  query ServicesPageQuery {
  	chas: imageSharp(id: { regex: "/chas-accredited-758x403/" }) {
      resolutions(width: 200, height: 106, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicApproved: imageSharp(id: { regex: "/nic-approved-245x141/" }) {
      resolutions(width: 200, height: 114, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicDomestic: imageSharp(id: { regex: "/nic-domestic-283x144/" }) {
      resolutions(width: 200, height: 102, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
    trustedTrader: imageSharp(id: { regex: "/norfolk-trusted-trader-398x188/" }) {
      resolutions(width: 200, height: 94, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
    competentPerson: imageSharp(id: { regex: "/reg-competent-person/" }) {
      resolutions(width: 400, height: 134, quality: 90) {
        ...GatsbyImageSharpResolutions
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 149)
          frontmatter {
            path
            title
            navtitle
            featuredImage {
              childImageSharp{ 
                sizes(maxWidth: 768, maxHeight: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
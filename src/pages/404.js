import React from 'react'
import Helmet from 'react-helmet';
import pageStyles from '../components/Styles/Page';
import Accreditations from '../components/Accreditations';
import Container from '../components/Container';

const NotFoundPage = ({ data }) => (
  <main id="not-found">
    <Helmet
      title={`404 Not Found | Castle Electrical Services Ltd`}
      meta={[
        { name: 'description', content: "404 page not found" },
        { name: 'robots', content: 'noindex, nofollow'}
      ]}
    />
    <Accreditations data={ data } />
    <Container>
    <h1 className="title">404 - Page not found.</h1>
    <p>The page you were trying to reach does not exist.</p>
    </Container>
    <style jsx>{ pageStyles }</style>
  </main>
)

export default NotFoundPage

export const notFoundQuery = graphql`
  query NotFoundPageQuery {
    chas: imageSharp(id: { regex: "/chas-accredited-758x403/" }) {
      resolutions(width: 200, height: 106, quality: 90, toFormat: WEBP) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicApproved: imageSharp(id: { regex: "/nic-approved-245x141/" }) {
      resolutions(width: 200, height: 114, quality: 90, toFormat: WEBP) {
        ...GatsbyImageSharpResolutions
      }
    }
    nicDomestic: imageSharp(id: { regex: "/nic-domestic-283x144/" }) {
      resolutions(width: 200, height: 102, quality: 90, toFormat: WEBP) {
        ...GatsbyImageSharpResolutions
      }
    }
    trustedTrader: imageSharp(id: { regex: "/norfolk-trusted-trader-398x188/" }) {
      resolutions(width: 200, height: 94, quality: 90, toFormat: WEBP) {
        ...GatsbyImageSharpResolutions
      }
    }
    competentPerson: imageSharp(id: { regex: "/reg-competent-person/" }) {
      resolutions(width: 400, height: 134, quality: 90, toFormat: WEBP) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`
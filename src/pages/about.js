import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import pageStyles from '../components/Styles/Page';
import Accreditations from '../components/Accreditations';
import Container from '../components/Container';
import { MdCheck } from 'react-icons/lib/md';

const pageTitle = "About";
const pageDesc = `A well established company, we provide the very best in electrical, fire & security systems supplying only the best quality products and services. 
Established for over 20 years, with over 30 years experience, our success is based on referrals from our great many satisfied customers.`;

const SecondPage = ({ data, transition }) => (
  <main id="about" style={ transition && transition.style }>
    <Helmet
      title={`${pageTitle} | Castle Electrical Services Ltd`}
      meta={[
        { name: 'description', content: pageDesc },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: pageDesc },
        { property: 'og:url', content: `${process.env.SITE_URL}/about` },
        { property: 'og:site_name', content: 'Castle Electrical Services Ltd'},
        { property: 'og:image', content: `${process.env.SITE_URL}/logos/logo-1024.png`},
        { name: 'robots', content: 'noindex, nofollow'}
      ]}
    />
    <Accreditations data={ data } />
    <Container>
        <h1 className="title">About Castle Electrical Services Ltd</h1>

        <p>A well established company, we provide the very best in electrical, fire & security systems supplying only the best quality products and services.{' '}
        Established for over 20 years, with over 30 years experience, our success is based on referrals from our great many satisfied customers.</p>
        
        <p>At Castle Electrical Services Ltd, our experience, expertise and efficient approach have ensured that we have become an established and trusted name throughout the Norfolk and Suffolk area with a reputation for courteous and professional service.</p>
        <hr className="rule" />

        <h2 className="title">Our Objectives</h2>
        <p>To provide you, our customer, with quality service first time and every time.</p>
        <hr className="rule" />

        <h2 className="title">Our Code of Values</h2>
        <p>We believe...</p>
        <ul className="tick-list">
            <li><MdCheck/>In superior service to all our customers</li>
            <li><MdCheck/>Success is the result of clear, cooperative, positive thinking</li>
            <li><MdCheck/>Management is about recognising what people are doing right and treating all with equal respect</li>
            <li><MdCheck/>Challenges should be used as learning experiences</li>
        </ul>
    </Container>
    <style jsx>{ pageStyles }</style>
    </main>
)

export default SecondPage

export const aboutQuery = graphql`
  query AboutPageQuery {
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
`

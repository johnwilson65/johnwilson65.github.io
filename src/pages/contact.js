import React from 'react';
import Helmet from 'react-helmet';
import pageStyles from '../components/Styles/Page';
import Accreditations from '../components/Accreditations';
import Container from '../components/Container';
import theme from '../theme';
import { MdEmail, MdLocationOn, MdPhone, MdPhoneAndroid } from 'react-icons/lib/md';

const pageTitle = "Contact";
const pageDesc = `A well established company, we provide the very best in electrical, fire & security systems supplying only the best quality products and services. Established for over 20 years, with over 30 years experience, our success is based on referrals from our great many satisfied customers.`;

const Contact = ({ data, transition }) =>
	<main id="contact" style={ transition && transition.style }>
		<Helmet
      title={`${pageTitle} | Castle Electrical Services Ltd`}
      meta={[
        { name: 'description', content: pageDesc },
        { property: 'og:title', content: `${pageTitle}`},
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: pageDesc },
        { property: 'og:url', content: `${process.env.SITE_URL}/contact` },
        { property: 'og:site_name', content: 'Castle Electrical Services Ltd'},
        { property: 'og:image', content: `${process.env.SITE_URL}/logos/logo-1024.png`},
        { name: 'robots', content: 'noindex, nofollow'}
      ]}
    />
    <Accreditations data={ data } />
    <Container>
    	<h1 className="title">Contact Us</h1>
      <p>Need a free no obligation quotation or advice, please use any of the following contact methods below to get in touch.</p>

      <div className="contact">
        <h3><MdEmail />Email: <a href="mailto:castle.electrical@btconnect.com">castle.electrical@btconnect.com</a></h3>
        <h3><MdPhone />Landline: <a href="tel:01603507222">01603 507222</a></h3>
        <h3><MdPhoneAndroid />Mobile: <a href="tel:0777151876">0777151876</a></h3>
      </div>

      <h3><MdLocationOn/>Address:</h3>
      <div className="map">
        <div className="address">
          <address>
            43 Chestnut Hill<br/>
            Eaton<br/>
            Norwich<br/>
            NR4 6NL<br/>
          </address>
        </div>
        <div className="map-detail">
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.808067528319!2d1.2517475162300398!3d52.60924003736351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e158659f4a71%3A0x97256c26bc893bca!2sCastle+Electrical+Services+Ltd!5e0!3m2!1sen!2suk!4v1528968771729" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
          </div>
        </div>
      </div>

    </Container>
    <style jsx>{ pageStyles }</style>
    <style jsx>{`
      .map-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height:0;
      }
      .map-responsive iframe {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .map {
        display: flex;
        flex-flow: column;
        padding: 0 1em;
      }

      address {
        font-style: normal;
      }

      h3 {
        font-weight: normal;
      }

      h3 a {
        color: ${theme.colors.red};
        text-decoration: none;
      }
      h3 :global(svg) {
        width: 2em;
        height: 2em;
        margin-right: .2em;
        fill: ${theme.colors.red};
      }

      .address {
        min-width: 180px;
      }

      .map .map-detail {
        width: 100%;
      }

      @media(min-width: ${theme.breakpoints.md}px) {
        .map {
          flex-flow: row;
        }
      }
    `}</style>
	</main>


export default Contact;

export const aboutQuery = graphql`
  query ContactPageQuery {
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
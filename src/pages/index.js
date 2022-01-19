import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import pageStyles from '../components/Styles/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Accreditations from '../components/Accreditations';
import Services from '../components/Services';
import { MdCheck } from 'react-icons/lib/md';
import scrollTo from '../util/scrollToY';

const pageTitle = "Norwich Electrical Contractors";
const pageDesc = "We are your premier electrical contractors based in Eaton, covering Norwich and surrounding areas. At Castle Electrical Services Ltd, we pride ourselves on providing complete customer satisfaction and security which is assured by our experience of over 20 years in the Electrical Contracting Industry."

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.scrollHandler = this.scrollHandler.bind(this);
    
  }

  scrollHandler() {
    scrollTo(this.scrollEl.offsetTop - 94);
  }

  render() {

    const { data } = this.props

    return (
        <main id="home">
            <Helmet
              title={`${pageTitle} | Castle Electrical Services Ltd`}
              meta={[
                { name: 'description', content: pageDesc },
                { property: 'og:title', content: `${pageTitle}`},
                { property: 'og:type', content: 'article' },
                { property: 'og:description', content: pageDesc },
                { property: 'og:url', content: `${process.env.SITE_URL}/}` },
                { property: 'og:site_name', content: 'Castle Electrical Services Ltd'},
                { property: 'og:image', content: `${process.env.SITE_URL}/logos/logo-1024.png`}
              ]}
              htmlAttributes={{'lang': 'en'}}
            />
            <Hero scrollHandler={this.scrollHandler} sizes={data.headerImage.sizes} />
            <span ref={(ref) => this.scrollEl = ref} />
            <Accreditations id="to-here" data={ data } />
            <Container>
                <h2 className="title">Electrical Contractors with over 20 years experience.</h2>
                <p>We are your premier electrical contractors based in Eaton, covering Norwich and surrounding areas.{' '} 
                At Castle Electrical Services Ltd, we pride ourselves on providing complete customer satisfaction and security{' '} 
                which is assured by our experience of over 20 years in the Electrical Contracting Industry.</p>
                
                <p>We serve most electrical installation needs and our customers include homeowners, landlords, architects, designers, offices, shops and factories.</p>

                <p>Anyone requiring quality electrical work can call our expert electrical contractors for help. We can work with you in building efficient facilities for home, work, education, and other purposes.</p>

                <p>All our electricians are directly employed by us. For added confidence we are in the Norfolk Trusted Trader scheme run by Norfolk trading standards, Please see our testimonials in the referenceline box above.{' '} 
                We have a broad range of electrical services covering all <Link to={'/services/domestic'}>domestic</Link> and <Link to={'/services/commercial'}>commercial</Link> requirements.</p>

                <p>Of course, the most important thing for you to know is that we are honest and reliable; this is backed up by our membership of the NICEIC which effectively guarantees our work for 2 years{' '} 
                and few companies nowadays offer such a level of guarantee. Our long experience in the industry and our growing number of clients are proof of the quality work we provide.</p>

                <p>We place great effort and emphasis on our client relationships and pride{' '}
                ourselves on our ability to respond rapidly in an effecient and cost effective way.{' '}
                All our electricians are City & Guilds trained to current 18th edition regulations.</p>
                
                <ul className="tick-list">
                    <li><MdCheck/>NICEIC approved contractors and domestic installers</li>
                    <li><MdCheck/>Norfolk Trusted Trader Member</li>
                    <li><MdCheck/>Electrical Part P Qualified</li>
                    <li><MdCheck/>All work covered by a 2 year warranty</li>
                </ul>
                
                <hr className="rule"/>
                <h2 className="title">All Electrical Work Undertaken</h2>

                <ul className="tick-list">
                 <li><MdCheck />Testing, Inspection & Electrical Landlord Reports.</li>
                 <li><MdCheck />Electrical Rewires, extra sockets and lights.</li>
                 <li><MdCheck />Electrical Showers, Heated Towel Rails.</li>
                 <li><MdCheck />City Centre shops serviced.</li>
                 <li><MdCheck />Low energy lighting, LED lights.</li>
                 <li><MdCheck />Cooker Installation, Extra Kitchen Sockets</li>
                 <li><MdCheck />Dual RCD Metal Consumer units installed. 18th edition.</li>
                 <li><MdCheck />Electric economy 7 storage heaters, panel heaters.</li>
                 <li><MdCheck />Emergency lighting & Alarm systems.</li>
                 <li><MdCheck />Fault finding, maintenance.</li>
                 <li><MdCheck />Kitchen & Bathroom Extractor Fans.</li>
                 <li><MdCheck />Repairs & Upgrades</li>
                 <li><MdCheck />Industrial Power & lighting trunking systems.</li>
                </ul>
                <hr className="rule"/>
                <h2 className="title">See Our Services</h2>
                <Services data={ data.allMarkdownRemark.edges } />
            </Container>
            <style jsx>{ pageStyles }</style>
        </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query FrontPageQuery {
    headerImage: imageSharp(id: { regex: "/norwich-castle/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
    safeContractor: imageSharp(id: { regex: "/safecontractor-480x480/" }) {
      resolutions(width: 57, height: 57, quality: 100) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    nicApproved: imageSharp(id: { regex: "/nic-approved-245x141/" }) {
      resolutions(width: 100, height: 57, quality: 100) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    nicDomestic: imageSharp(id: { regex: "/nic-domestic-283x144/" }) {
      resolutions(width: 100, height: 51, quality: 100) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    trustedTrader: imageSharp(id: { regex: "/norfolk-trusted-trader-398x188/" }) {
      resolutions(width: 100, height: 47, quality: 100) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    competentPerson: imageSharp(id: { regex: "/reg-competent-person/" }) {
      resolutions(width: 200, height: 67, quality: 100) {
        ...GatsbyImageSharpResolutions_withWebp
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

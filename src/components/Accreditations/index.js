import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container';

const Accreditations = ({ data }) =>
	<aside>
    <Container>
        <a href="https://www.chas.co.uk" rel="noopener">
            <Img
                alt="Chas accredited contractor"
                resolutions={data.chas.resolutions}
            />
        </a>
        <a href="https://www.niceic.com/" rel="noopener">
        <Img
            alt="NIC Approved"
            resolutions={data.nicApproved.resolutions}
        />
        </a>
        <a href="https://www.niceic.com/" rel="noopener">
        <Img
            alt="NIC Domestic"
            resolutions={data.nicDomestic.resolutions}
        />
        </a>
        <a href="https://www.norfolk.gov.uk/business/trading-standards/trusted-trader" rel="noopener">
            <Img
                alt="Norfolk Trusted Trader"
                resolutions={data.trustedTrader.resolutions}
            />
        </a>
        <a href="https://www.niceic.com/" rel="noopener">
        <Img
            alt="Competent Person"
            resolutions={data.competentPerson.resolutions}
        />
        </a>
        <a href="https://www.referenceline.com/32381" rel="noopener">
            <img src="https://www.referenceline.com/promote-your-reputation/referenceline-promote.asp?s=468x60&amp;fn=32381&amp;l=-b" width="468" height="60" alt="Click here to see the track record of customer ratings and reviews for Castle Electrical Services Ltd at Referenceline, where reputations count" title="Click here to see the track record of customer ratings and reviews for Castle Electrical Services Ltd at Referenceline, where reputations count" />
        </a>
    </Container>
    <style jsx>{`
    	aside :global(.container) {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
      }

      aside a {
          display: block;
          padding: 1em;
      }

      aside img {
          width: 100%;
          height: auto;
          max-width: 100%;
          margin-top: 0;
          margin-bottom: 0;
      }
    `}</style>
  </aside>

export default Accreditations;
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Header from '../components/Header/';
import Footer from '../components/Footer';

import './index.css'

const Layout = ({ 
  children, 
  data: {
    allMarkdownRemark: { edges },
  }
}) => {

  const ServiceLinks = edges
    .map(edge => <li key={edge.node.id}><Link activeClassName="active" exact to={edge.node.frontmatter.path}>{edge.node.frontmatter.navtitle}</Link></li>);

  const HeaderLinks = (clickHandler) => {
    return edges.map(edge => <li key={edge.node.id}><Link activeClassName="active" onClick={clickHandler} exact to={edge.node.frontmatter.path}>{edge.node.frontmatter.navtitle}</Link></li>)
  }

  return (
    <div>
      <Header services={HeaderLinks} />
      {children()}
      <Footer services={ServiceLinks} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const layoutQuery = graphql`
  query layoutQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            navtitle
          }
        }
      }
    }
  }
`;
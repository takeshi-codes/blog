import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Globals from './globals';

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 50%;
  padding: 1.45rem 1.0875rem 1.45rem;
  /* background: #dfdde0; */
  margin-bottom: 5vh;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Globals />
      <Header />
      <MainWrapper
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </MainWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

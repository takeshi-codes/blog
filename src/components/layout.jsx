import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Globals from './globals';
import Image from '../components/image';

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 75%;
  padding: 1.45rem 1.0875rem 1.45rem;
  margin-bottom: 5vh;
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
  grid-gap: 3vw;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

const BodyWrapper = styled.section`
  margin-top: 3vh;
`;

// TODO: just make an h2 class instead of copy/pasta
const HomeLink = styled(props => <Link {...props} />)`
  margin-bottom: 1.45rem;
  margin-top: 0;
  color: #dfdfe1;
  font-family: 'Cabana';
  font-weight: bold;
  font-size: 2.75rem;
  line-height: 1.1;
  letter-spacing: 0.1rem;
  text-decoration: none;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Globals />
      <Header />
      <MainWrapper>
        <aside>
          <Image />
          <HomeLink to="/">Hey, I&apos;m Dylan</HomeLink>
          <p>I like to make things, welcome to my corner of the internet</p>
        </aside>
        <BodyWrapper>{children}</BodyWrapper>
      </MainWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

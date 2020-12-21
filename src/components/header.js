import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #626e60;
  margin-bottom: 1.45rem;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledDiv>
      <StyledH1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          &#60;CtrlAltDylan&#47;&#62;
        </Link>
      </StyledH1>
    </StyledDiv>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 3vh;
  width: 100%;
  height: 7vh;
  @media (max-width: 768px) {
    margin-bottom: 0;
    padding-top: 3vh;
  }
`;

const StyledRightSection = styled.section`
  float: right;
  padding-top: 2.5vh;
  margin-right: 2vw;
  @media (max-width: 768px) {
    float: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
  }
`;

const NavLink = styled(props => <Link {...props} />)`
  color: #f8f6f9;
  text-decoration: none;
  margin-left: 2vw;
  @media (max-width: 768px) {
    margin-left: 4.5vw;
    flex-grow: 1;
  }
`;

const StyledSVG = styled.svg`
  height: 2.5vh;
  fill: #f8f6f9;
`;

const Header = () => (
  <StyledHeader>
    <StyledRightSection>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink
        to="https://thisisdylan.github.io/"
        rel="noreferrer"
        target="_blank"
      >
        CV
      </NavLink>
      <NavLink
        to="https://twitter.com/thisisdylandev"
        rel="noreferrer"
        target="_blank"
      >
        <span className="screen-reader-only">Twitter</span>
        {/* Twitter logo from https://gist.github.com/mbostock/3094619 */}
        <StyledSVG viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
          <path
            d="
              M 630, 425
              A 195, 195 0 0 1 331, 600
              A 142, 142 0 0 0 428, 570
              A  70,  70 0 0 1 370, 523
              A  70,  70 0 0 0 401, 521
              A  70,  70 0 0 1 344, 455
              A  70,  70 0 0 0 372, 460
              A  70,  70 0 0 1 354, 370
              A 195, 195 0 0 0 495, 442
              A  67,  67 0 0 1 611, 380
              A 117, 117 0 0 0 654, 363
              A  65,  65 0 0 1 623, 401
              A 117, 117 0 0 0 662, 390
              A  65,  65 0 0 1 630, 425
              Z"
          />
        </StyledSVG>
      </NavLink>
    </StyledRightSection>
  </StyledHeader>
);

export default Header;

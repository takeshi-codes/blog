import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProjectWrapper = styled.article`
  padding: 1vh 1.5vw 2vh;
  position: relative;
`;

const TitleLink = styled.a`
  color: #dfdfe1;
  text-decoration: none;
`;

const GithubLink = styled.a`
  color: #dfdfe1;
  text-decoration: none;
  margin-left: 1.5vw;
  left: 0;
  bottom: 1vh;
  position: absolute;
`;

const Project = ({ title, link, description, github }) => {
  return (
    <ProjectWrapper>
      <TitleLink href={link ? link : github} rel="noreferrer" target="_blank">
        <h2>&#60;{title}&#47;&#62;</h2>
      </TitleLink>
      <p>{description}</p>
      <GithubLink href={github} rel="noreferrer" target="_blank">
        Github &#8594;
      </GithubLink>
    </ProjectWrapper>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string,
};

export default Project;

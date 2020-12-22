import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.article`
  background: #f9f9f9;
  padding: 1vh 1.5vw 2vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: relative;
`;

const TitleLink = styled.a`
  color: #945d60;
  text-decoration: none;
`;

const GithubLink = styled.a`
  color: #945d60;
  text-decoration: none;
  margin-left: 1.5vw;
  left: 0;
  bottom: 1vh;
  position: absolute;
`;

const Project = ({ title, link, description }) => {
  return (
    <ProjectWrapper>
      <TitleLink href={link} rel="noreferrer" target="_blank"><h2>&#60;{title}&#47;&#62;</h2></TitleLink>
      <p>{description}</p>
      <GithubLink href={link} rel="noreferrer" target="_blank">
        Github &#8594;
      </GithubLink>
    </ProjectWrapper>
  );
};

export default Project;

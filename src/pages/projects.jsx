import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

const ProjectContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vh;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>&#60;My Projects&#47;&#62;</h1>
    <p>
      Here's a list of some of the projects I've worked on, all can be found in my Github. 
      Some projects are maintained, and some aren't... it just be like that sometimes 🤷
    </p>
    <ProjectContainer>
      <Project
        title="That's Farfetch'd"
        description="Gatsby site built for the Pokemon podcast That's Farfetch'd!"
        link="https://github.com/its-dgreen/thats-farfetchd"
      />
      <Project
        title="Galar5e"
        description="React & Firebase app for making & using Character Sheets for the D&D 5e homebrew module Pokemon 5e"
        link="https://github.com/its-dgreen/galar5e"
      />
      <Project
        title="RegiVGC"
        description="Express app for creating Pokemon VGC events, and for players to locate and register for events with their teams"
        link="https://github.com/its-dgreen/regivgc"
      />
      <Project
        title="Leaky Toad"
        description="Quick Vue app using Open Brewery DB API for finding breweries"
        link="https://github.com/its-dgreen/leakytoad"
      />
    </ProjectContainer>
  </Layout>
);

export default ProjectsPage;

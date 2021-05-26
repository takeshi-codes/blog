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
      Here&apos;s a list of some of the projects I&apos;ve worked on, all can be
      found in my Github. Some projects are maintained, and some aren&apos;t...
      it just be like that sometimes 🤷
    </p>
    <ProjectContainer>
      <Project
        title="Our Groceries"
        description="Hotwire app for sharing grocery lists, updated in real time"
        github="https://github.com/thisisdylandev/ourgroceries"
        link="https://our-groceries.herokuapp.com"
      />
      <Project
        title="Tweet Scheduler"
        description="Ruby on Rails app for scheduling tweets, created from GoRails"
        github="https://github.com/thisisdylandev/gorails-tweeter"
      />
      <Project
        title="RegiVGC"
        description="Express app for creating Pokemon VGC events, and for players to locate and register for events with their teams"
        github="https://github.com/thisisdylandev/regivgc"
      />
      <Project
        title="Galar5e"
        description="React & Firebase app for making & using Character Sheets for the D&D 5e homebrew module Pokemon 5e"
        github="https://github.com/thisisdylandev/galar5e"
        link="https://galar5e.com/"
      />
      <Project
        title="Hiragana Flashcards"
        description="Next.js app made for learning hiragana with flashcards"
        github="https://github.com/thisisdylandev/hiragana-flashcards"
        link="https://hiragana-flashcards.vercel.app"
      />
    </ProjectContainer>
  </Layout>
);

export default ProjectsPage;

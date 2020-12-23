import React from 'react';

import Header from '../components/Header';
import Globals from '../components/globals';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <Globals />
    <Header />
      <SEO title="Home" />
      <h1>Hi, I'm Dylan</h1>
      <p>I like to make things. Welcome to my corner of the Internet.</p>
  </>
);

export default IndexPage;

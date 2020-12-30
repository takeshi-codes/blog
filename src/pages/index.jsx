import React from 'react';

import Layout from '../components/layout';
import Blogs from '../components/blogs';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <Layout>
      <SEO title='JS Dev && Synthesizer Enthusiast'/>
      <Image />
      <h1>Hey, I'm Dylan</h1>
      <p>I like to make things, welcome to my corner of the internet</p>
      <Blogs />
  </Layout>
  </>
);

export default IndexPage;

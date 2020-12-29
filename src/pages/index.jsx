import React from 'react';

import Layout from '../components/layout';
import Blogs from '../components/blogs';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Blog" />
      <h1>Hey, I'm Dylan</h1>
      <p>I like to make things, welcome to my corner of the internet</p>
      <h2>&#60;Blogs&#47;&#62;</h2>
      <Blogs />
  </Layout>
  </>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/layout';
import Blogs from '../components/blogs';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Web Dev && Synthesizer Enthusiast" />
    <Layout>
      <Blogs />
    </Layout>
  </>
);

export default IndexPage;

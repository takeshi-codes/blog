import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blogs from '../components/blogs';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>&#60;Blogs&#47;&#62;</h1>
    <Blogs/>
  </Layout>
);

export default BlogPage;

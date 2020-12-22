import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import SEO from './seo';

const PostLayout = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <h1>&#60;{data.markdownRemark.frontmatter.title}&#47;&#62;</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query MarkdownPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

export default PostLayout;

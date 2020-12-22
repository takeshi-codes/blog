import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArticleLayout = styled.main`
  margin-bottom: 5vh;
`;

const BlogLink = styled(props => <Link {...props} />)`
  color: #945d60;
  text-decoration: none;
`;

const Listing = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges.map(edge => (
    <ArticleLayout key={edge.node.slug}>
      <BlogLink to={`/posts/${edge.node.frontmatter.slug}`}>
        <h2>{edge.node.frontmatter.title}</h2>
      </BlogLink>
      <p>{edge.node.excerpt}</p>
      <BlogLink to={`/posts/${edge.node.frontmatter.slug}`}>Read More &#8594;</BlogLink>
    </ArticleLayout>
  ));
};

export default Listing;

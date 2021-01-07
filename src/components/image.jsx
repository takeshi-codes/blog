import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageContainer = styled(props => <Img {...props} />)`
  max-width: 15vw;
  border-radius: 50%;
  margin: 3vh auto;
  @media (max-width: 768px) {
    max-width: 50vw;
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <ImageContainer fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;

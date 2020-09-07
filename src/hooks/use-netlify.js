import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const useNetlify = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { description: { ne: null } } }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              description
              path
              terms
              thumbnail {
                childImageSharp {
                  fluid {
                    srcWebp
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(scholarship => ({
    body: scholarship.node.rawMarkdownBody,
    description: scholarship.node.frontmatter.description,
    path: scholarship.node.frontmatter.path,
    terms: scholarship.node.frontmatter.terms,
    frontmatter:
      scholarship.node.frontmatter.thumbnail.childImageSharp.fluid.srcWebp,
    title: scholarship.node.frontmatter.title,
  }));
};

export default useNetlify;

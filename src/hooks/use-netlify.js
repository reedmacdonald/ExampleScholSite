import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "hello" } } }) {
        edges {
          node {
            rawMarkdownBody
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges[0].node.rawMarkdownBody;
};

export default ComponentName;

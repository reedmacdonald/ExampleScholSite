import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const Scholarships = props => {
  return (
    <Layout>
      <h1>{props.pageContext.blogpost}</h1>
      <p>by: {props.pageContext.writer}</p>
      <div>
        {documentToReactComponents(props.pageContext.body.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={`${node.data.target.fields.file['en-US'].url}?w=300`} />
            ),
          },
        })}
      </div>
      <small>Tag: {props.pageContext.tag}</small>
      <br />
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default Scholarships;

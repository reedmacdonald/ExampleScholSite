import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const Terms = props => {
  return (
    <Layout>
      <h1>{props.pageContext.title} Terms and Conditions</h1>
      <div>
        {documentToReactComponents(props.pageContext.terms.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={`${node.data.target.fields.file['en-US'].url}?w=300`} />
            ),
          },
        })}
      </div>

      <Link to="/">&larr; back to all exclusives</Link>
    </Layout>
  );
};

export default Terms;

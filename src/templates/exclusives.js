import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const Exclusives = props => {
  return (
    <Layout>
      <div>SWelcome to the Exclusives Page</div>
      <h1>{props.pageContext.title}</h1>
      <h4>{props.pageContext.description}</h4>
      <div style={{ maxWidth: '200px' }}>
        <img
          style={{ maxWidth: '300px' }}
          src={`https:${props.pageContext.image}`}
        />
      </div>
      <div>
        {documentToReactComponents(props.pageContext.body.json, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
              <img src={`${node.data.target.fields.file['en-US'].url}?w=300`} />
            ),
          },
        })}
      </div>

      <br />
      <Link to="/">&larr; back to all exclusives</Link>
      <br />
      <Link to="terms">Or see the terms and consitions</Link>
    </Layout>
  );
};

export default Exclusives;

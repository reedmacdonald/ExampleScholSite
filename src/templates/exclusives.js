import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Form from '../components/form';

const Exclusives = props => {
  return (
    <Layout title={props.pageContext.title}>
      <h1>{props.pageContext.title}</h1>
      <h4>{props.pageContext.description}</h4>
      <div style={{ width: '100%' }}>
        <img
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
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
      <Form title={props.pageContext.title} />
      <br />
      <Link to="terms">Terms and Conditions</Link>
      <br />
      <Link to="/">&larr; back to all scholarships</Link>
      <br />
    </Layout>
  );
};

export default Exclusives;

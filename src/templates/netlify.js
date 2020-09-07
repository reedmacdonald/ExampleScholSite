import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Form from '../components/form';
import Markdown from 'markdown-to-jsx';

const Exclusives = props => {
  return (
    <Layout
      title={props.pageContext.title}
      image={`https:${props.pageContext.image}`}
      description={props.pageContext.description}
      article
      url={`https://priceless-williams-4cc72b.netlify.app/exclusive/${props.pageContext.slug}`}
    >
      <h1>{props.pageContext.title}</h1>
      <h4>{props.pageContext.description}</h4>
      <div style={{ width: '100%' }}>
        <img
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          src={props.pageContext.image}
        />
      </div>

      <Markdown>{props.pageContext.body}</Markdown>
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
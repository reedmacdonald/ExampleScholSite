import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Markdown from 'markdown-to-jsx';

const Terms = props => {
  //console.log(document.cookie, '<---document.cookie');
  return (
    <Layout title="Terms">
      <h1>{props.pageContext.title} Terms and Conditions</h1>
      <Markdown>{props.pageContext.terms}</Markdown>

      <Link to="/">&larr; back to all exclusives</Link>
    </Layout>
  );
};

export default Terms;

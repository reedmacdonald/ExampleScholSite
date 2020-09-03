import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = props => {
  const { title, description } = useSiteMetadata();
  console.log(props, '<---props');
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 14px;
            line-height: 1.4;

            @media (min-width: calc(550px + 10vw)) {
              font-size: 18px;
            }

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{props.title || title}</title>
        <meta name="description" content={props.description || description} />
        <meta name="image" content={props.image || null} />
        <meta property="og:title" content={props.title || title} />
        <meta
          property="og:description"
          content={props.description || description}
        />
        <meta property="og:type" content={props.article ? 'article' : null} />
        <meta property="og:image" content={props.image || null} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title || title} />
        <meta
          name="twitter:description"
          content={props.description || description}
        />
        <meta property="og:url" content={props.url || 'https://google.com'} />
        <meta name="twitter:image" content={props.image || null} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {props.children}
      </main>
    </>
  );
};

export default Layout;

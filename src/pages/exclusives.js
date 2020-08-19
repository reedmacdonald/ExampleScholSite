import React from 'react';
import Layout from '../components/layout';
import useExclusives from '../hooks/use-exclusives';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';
import { Link } from 'gatsby';

export default () => {
  const exclusives = useExclusives();
  return (
    <>
      <Hero />
      <Layout>
        <h2 style={{ textAlign: 'center' }}>Read my blog</h2>
        {exclusives.map(exclusive => (
          //<PostPreview key={post.slug} post={post} />
          <div
            style={{
              maxWidth: '200px',
              textAlign: 'center',
              textDecoration: 'none',
              border: '5px solid black',
              borderRadius: '20px',
            }}
          >
            <Link
              style={{ textDecoration: 'none' }}
              to={`/exclusive/${exclusive.slug}`}
            >
              <h3>{exclusive.title}</h3>
              <p style={{ textAlign: 'center' }}>{exclusive.description}</p>
              <img style={{ width: '100%' }} src={`http:${exclusive.image}`} />
            </Link>
            <br />
          </div>
        ))}
      </Layout>
    </>
  );
};

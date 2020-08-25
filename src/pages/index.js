import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';

import { Link } from 'gatsby';
import useExclusives from '../hooks/use-exclusives';

export default () => {
  const posts = usePosts();
  const exclusives = useExclusives();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Exclusive Scholarships</h2>
        {exclusives.map(exclusive => (
          //<PostPreview key={post.slug} post={post} />
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              textDecoration: 'none',
              border: '2px solid black',
              borderRadius: '20px',
            }}
          >
            <Link
              style={{ textDecoration: 'none', color: 'black' }}
              to={`/exclusive/${exclusive.slug}`}
            >
              <h3>{exclusive.title}</h3>
              <p style={{ textAlign: 'center' }}>{exclusive.description}</p>
              <img
                style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                src={`http:${exclusive.image}`}
              />
            </Link>
            <br />
          </div>
        ))}
      </Layout>
    </>
  );
};

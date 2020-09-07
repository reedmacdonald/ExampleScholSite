import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import { Link } from 'gatsby';
import useExclusives from '../hooks/use-exclusives';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageGrid from '../components/imageGrid';
import Markdown from 'markdown-to-jsx';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useNetlify from '../hooks/use-netlify';

export default () => {
  const posts = usePosts();
  const exclusives = useExclusives();
  console.log(useNetlify(), 'useNetlify');
  return (
    <>
      <Hero />
      <Layout title="Welcome">
        <h2>Exclusive Scholarships</h2>
        <Markdown>{useNetlify()}</Markdown>
        <Carousel>
          {exclusives.map(exclusive => (
            <Link to={`/exclusive/${exclusive.slug}`}>
              <div>
                <p className="legend">{exclusive.title}</p>
                <img
                  alt="random background image"
                  src={`https:${exclusive.image}`}
                />

                <br />
              </div>
            </Link>
          ))}
        </Carousel>
        <ImageGrid />
      </Layout>
    </>
  );
};

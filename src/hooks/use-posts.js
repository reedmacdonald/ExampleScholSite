import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          writer
          blogpost {
            blogpost
          }
          body {
            json
            body
          }
          tag
          slug
        }
      }
    }
  `);

  return data.allContentfulBlogPost.nodes.map(post => ({
    writer: post.writer,
    blogpost: post.blogpost.blogpost,
    body: post.body.json,
    tag: post.tag,
    slug: post.slug,
  }));
};

export default usePosts;

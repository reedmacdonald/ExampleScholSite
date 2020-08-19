import { graphql, useStaticQuery } from 'gatsby';

const useExclusives = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExclusive {
        nodes {
          body {
            json
          }
          dateClosed
          createdAt
          title
          description
          dripId
          slug
          headerImage {
            description
            file {
              url
            }
            title
          }
        }
      }
    }
  `);

  return data.allContentfulExclusive.nodes.map(post => ({
    slug: post.slug,
    title: post.title,
    body: post.body,
    image: post.headerImage.file.url,
    description: post.description,
  }));
};

export default useExclusives;

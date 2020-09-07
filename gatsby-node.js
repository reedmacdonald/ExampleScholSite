exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
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
          termsAndConditions {
            json
          }
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

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allContentfulExclusive.nodes;

  posts.forEach((post, index) => {
    actions.createPage({
      path: `exclusive/${post.slug}`,
      component: require.resolve('./src/templates/exclusives.js'),
      context: {
        slug: post.slug,
        title: post.title,
        body: post.body,
        image: post.headerImage.file.url,
        description: post.description,
      },
    });
    actions.createPage({
      path: `exclusive/${post.slug}/terms`,
      component: require.resolve('./src/templates/terms.js'),
      context: {
        slug: post.slug,
        title: post.title,
        body: post.body,
        image: post.headerImage.file.url,
        terms: post.termsAndConditions,
      },
    });
  });
};

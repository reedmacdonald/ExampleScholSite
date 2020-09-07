const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { description: { ne: null } } }
      ) {
        edges {
          node {
            rawMarkdownBody
            frontmatter {
              description
              path
              terms
              thumbnail {
                childImageSharp {
                  fluid {
                    srcWebp
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    console.log(post, '<---post');
    actions.createPage({
      path: `exclusive/netlify/${post.node.frontmatter.path}`,
      component: require.resolve('./src/templates/netlify.js'),
      context: {
        slug: post.node.frontmatter.path,
        title: post.node.frontmatter.title,
        body: post.node.rawMarkdownBody,
        image: post.node.frontmatter.thumbnail.childImageSharp.fluid.srcWebp,
        description: post.node.frontmatter.description,
      },
    });
    actions.createPage({
      path: `exclusive/netlify/${post.node.frontmatter.path}/terms`,
      component: require.resolve('./src/templates/netlifyTerms.js'),
      context: {
        slug: post.node.frontmatter.path,
        title: post.node.frontmatter.title,
        body: post.node.rawMarkdownBody,
        image: post.node.frontmatter.thumbnail.childImageSharp.fluid.srcWebp,
        terms: post.node.frontmatter.terms,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    console.log(posts, '<---posts');
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { slug: { eq: "hlist" } } }) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: `list/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
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
          slug
          tag
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allContentfulBlogPost.nodes;

  posts.forEach((post, index) => {
    actions.createPage({
      path: `posts/${post.slug}`,
      component: require.resolve('./src/templates/scholarships.js'),
      context: {
        slug: post.slug,
        blogpost: post.blogpost.blogpost,
        body: post.body,
        writer: post.writer,
        tag: post.tag,
      },
    });
  });
};

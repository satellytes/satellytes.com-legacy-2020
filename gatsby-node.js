const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const QUERY_PAGES = `
{
  allContentfulPage {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`;


const QUERY_BLOG = `
{
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`;
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(QUERY_PAGES)
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      // Create Product pages
      const pageTemplate = path.resolve(`./src/templates/page.js`)
      _.each(result.data.allContentfulPage.edges, edge => {
        createPage({
          path: `/page/${edge.node.slug}/`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id
          },
        })
      })

    })
    .then(() => {
      graphql(QUERY_BLOG).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const blogPost = path.resolve('./src/templates/blog-post.js')
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })

        resolve();
      })
    })
  })
}

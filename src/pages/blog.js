import React from 'react'

import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/blog/article-preview'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout light="true">
        <Helmet title={siteTitle} />
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
          heroImage {
            fluid(maxWidth: 1280) {
              ...GatsbyContentfulFluid
            }
            fluidTraced: fluid(maxWidth: 1280)
            {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

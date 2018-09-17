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
          <h1 className="section-headline">Blog</h1>
          {posts.map(({ node }) => {
            return (
              <ArticlePreview  key={node.slug} article={node} />
            )
          })}
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
          createdAt(formatString: "DD.MMM YYYY")
          updatedAt(formatString: "DD.MMM YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            fluid(maxWidth: 3000, maxHeight: 1000){
              ...GatsbyContentfulFluid
            }
            fluidTraced: fluid(maxWidth: 1200, maxHeight: 400)
            {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

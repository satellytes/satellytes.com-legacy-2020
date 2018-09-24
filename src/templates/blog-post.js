import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageLayout>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </PageLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

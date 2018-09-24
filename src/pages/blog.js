import React from 'react'

import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/blog/article-preview'
import PageLayout from '../components/page-layout'
import { HeadlineContent } from '../components/shared/headline';
import styled from 'styled-components';

import { Content, Section, Grid, Column } from '../components/layout';
const Headline = styled(HeadlineContent)`
  margin-bottom: 40px;
`
class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <PageLayout light="true">
        <Helmet title={siteTitle} />
        <Content>
          <Section>
            <Headline>Blog</Headline>

            {posts.map(({ node }) => {
              return (
                <ArticlePreview  key={node.slug} article={node} />
              )
            })}
          </Section>
        </Content>

      </PageLayout>
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
              htmlAst, html
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

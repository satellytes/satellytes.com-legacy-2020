import React from 'react'

import get from 'lodash/get'
import ArticlePreview from '../components/blog/article-preview'
import PageLayout from '../components/layout/page-layout'
import { HeadlineContent } from '../components/typography/headline';
import styled from 'styled-components';

import { Content, Section} from '../components/layout/layout';
import { graphql } from 'gatsby';
import PageMeta from '../components/page-meta';
const Headline = styled(HeadlineContent)`
  margin-bottom: 40px;
`
class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <PageLayout light="true">
        <PageMeta title='Blog' {...this.props}/>
        <Content>
          <Section>
            <Headline>Blog</Headline>

            {posts.map(({ node }) => {
              return (
                <ArticlePreview  key={node.slug} article={node}  {...this.props}/>
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "DD.MMM YYYY")
          updatedAt(formatString: "DD.MMM YYYY")
          description {
            childMarkdownRemark {
              htmlAst
            }
          }
          heroImage {
            fluid(maxWidth: 600, maxHeight: 200){
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

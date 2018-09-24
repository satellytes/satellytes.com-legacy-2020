import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"

import { HeadlineContent } from '../components/shared/headline';
import Img from "gatsby-image"
import { Content, Section} from '../components/layout';
import DateInfo from '../components/blog/date-info';
import Separator from '../components/blog/separator';

import ArticleFooter from '../components/blog/article-footer';
import MarkdownContentful from '../components/shared/markdown-contentful';

const Header = ({article}) => (
  <header>
    <HeadlineContent>{article.title}</HeadlineContent>
  </header>
)

const HeroImage = ({article}) => (
  <Img
      alt={article.title}
      key={article.heroImage.src}
      fluid={article.heroImage.fluid}
    />
)

class BlogPostTemplate extends React.Component {
  render() {
    const article = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageLayout light="true">
        <Helmet title={`${article.title} | ${siteTitle}`} />

        <article>
          <HeroImage article={article}/>

          <Content>
            <Section>
              <Header article={article}/>
              <MarkdownContentful markdown={article.body.childMarkdownRemark} />
              <DateInfo article={article}/>
              <Separator/>
              <ArticleFooter article={article}/>

            </Section>
          </Content>

        </article>
      </PageLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      createdAt(formatString: "DD.MMM YYYY")
      updatedAt(formatString: "DD.MMM YYYY")
      body {
        childMarkdownRemark {
          htmlAst
        }
      }
      heroImage {
        fluid(maxWidth: 1180, maxHeight: 480){
          ...GatsbyContentfulFluid
        }
      }

      author {
        name
        role
        image {
          fixed(width: 55, height: 55){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

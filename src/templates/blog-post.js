import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"


import rehypeReact from "rehype-react"
import Copy from '../components/shared/copy';
import { HeadlineSection, HeadlineParagraph, HeadlineContent } from '../components/shared/headline';
import Img from "gatsby-image"
import { Content, Section, Grid, Column } from '../components/layout';
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "p": Copy,
    "h1": HeadlineSection,
    "h2": HeadlineParagraph
  }
}).Compiler

const MarkdownContent = ({markdown}) => (
  <div>{renderAst(markdown.htmlAst)}</div>
);

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
    console.log(article)
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageLayout light="true">
        <Helmet title={`${article.title} | ${siteTitle}`} />

        <article>
          <HeroImage article={article}/>
          <Content>
            <Section>
              <Header article={article}/>
              <MarkdownContent markdown={article.body.childMarkdownRemark} />
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
    }
  }
`

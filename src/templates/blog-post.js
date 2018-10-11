import React from 'react'
import get from 'lodash/get'
import PageLayout from "../components/layout/page-layout"
import { graphql } from "gatsby"
import { HeadlineContent } from '../components/typography/headline';
import { Content, Section} from '../components/layout/layout';
import ArticleFooter from '../components/blog/article-footer';
import MarkdownContentful from '../components/typography/markdown-contentful';
import PageMeta from '../components/page-meta';
import { HeroImage } from '../components/hero-image/hero-image';

const Header = ({article}) => (
  <header>
    <HeadlineContent>{article.title}</HeadlineContent>
  </header>
)

class BlogPostTemplate extends React.Component {
  render() {
    const article = get(this.props, 'data.contentfulBlogPost')

    return (
      <PageLayout light="true">
        <PageMeta
          {...this.props}
          article={article}
          title={article.title}/>

        <article>
        <HeroImage image={article.heroImage}/>

          <Content>
            <Section>
              <Header article={article}/>
              <MarkdownContentful markdown={article.body.childMarkdownRemark} />
              <ArticleFooter {...this.props} article={article}/>
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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      createdAt(formatString: "DD.MMM YYYY")
      updatedAt(formatString: "DD.MMM YYYY")
      body {
        childMarkdownRemark {
          htmlAst
          excerpt
        }
      }

      heroImage {
        ...HeroImage
      }

      ...BlogPostAuthor
    }
  }
`

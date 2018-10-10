import React from "react"
import PageLayout from "../components/layout/page-layout"
import { graphql } from "gatsby"

import { Content, Section} from '../components/layout/layout';
import MarkdownContentful from '../components/typography/markdown-contentful';
import { HeadlineContent } from "../components/typography/headline";
import { ContentFooter } from "../components/content-footer/content-footer";
import PageMeta from "../components/page-meta";
import { HeroImage } from '../components/hero-image/hero-image';

const PageHeadline = ({title}) => (
  <header>
    <HeadlineContent>{title}</HeadlineContent>
  </header>
)



class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    return (
      <PageLayout light="true">
        <PageMeta title={page.title} page={page} {...this.props}/>

        <article>
          <HeroImage image={page.heroImage}/>
          <Content>
            <Section>
              <PageHeadline title={page.title} alt={page.title} />
              <MarkdownContentful
                markdown={page.body.childMarkdownRemark} />
              <ContentFooter
                showShare={true}
                createdAt={page.createdAt}
                updatedAt={page.updatedAt}
                {...this.props}/>
            </Section>
          </Content>
        </article>
      </PageLayout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulPage(id: { eq: $id }) {
      title

      createdAt(formatString: "DD.MMM YYYY")
      updatedAt(formatString: "DD.MMM YYYY")
      body {
        childMarkdownRemark {
          htmlAst
        }
        childMarkdownRemark {
          excerpt
        }
      }

      heroImage {
        ...HeroImage
      }
    }
  }
`

import React from "react"
import PageLayout from "../components/layout/page-layout"
import { graphql } from "gatsby"

import { Content, Section} from '../components/layout/layout';
import MarkdownContentful from '../components/typography/markdown-contentful';
import { HeadlineContent } from "../components/typography/headline";
import Img from "gatsby-image"

import { ContentFooter } from "../components/content-footer/content-footer";
import PageMeta from "../components/page-meta";

const PageHeadline = ({title}) => (
  <header>
    <HeadlineContent>{title}</HeadlineContent>
  </header>
)


const HeroImage = ({image, alt}) => {
  if(!image) { return null }

  return (
    <Img
      alt={alt}
      key={image.src}
      fluid={image.fluid}
    />
  )
};


class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    return (
      <PageLayout light="true">
        <PageMeta title={page.title} {...this.props}/>

        <article>
          <HeroImage image={page.heroImage}/>
          <Content>
            <Section>
              <PageHeadline title={page.title} alt={page.title} />
              <MarkdownContentful markdown={page.body.childMarkdownRemark} />
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
      }

      heroImage {
        fluid(maxWidth: 1180, maxHeight: 480){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

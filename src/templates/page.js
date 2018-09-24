import React from "react"
import get from 'lodash/get'
import Helmet from 'react-helmet'
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"

import { Content, Section} from '../components/layout';
import MarkdownContentful from '../components/shared/markdown-contentful';
import { HeadlineContent } from "../components/shared/headline";
import DateInfo from "../components/blog/date-info";
import Img from "gatsby-image"

const Header = ({title}) => (
  <header>
   <HeadlineContent>{title}</HeadlineContent>
  </header>
)


const HeroImage = ({image, alt}) => (
  <Img
      alt={alt}
      key={image.src}
      fluid={image.fluid}
    />
)


class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <PageLayout light="true">
        <Helmet title={`${page.title} | ${siteTitle}`} />

        <article>
          <HeroImage image={page.heroImage}/>
          <Content>
            <Section>
              <Header title={page.title} alt={page.title} />
              <MarkdownContentful markdown={page.body.childMarkdownRemark} />
              <DateInfo article={page}/>
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

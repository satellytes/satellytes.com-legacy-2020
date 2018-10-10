import position from 'polished/lib/shorthands/position';
import React from "react"
import PageLayout from "../components/layout/page-layout"
import { graphql } from "gatsby"

import { Content, Section} from '../components/layout/layout';
import MarkdownContentful from '../components/typography/markdown-contentful';
import { HeadlineContent } from "../components/typography/headline";
import Img from "gatsby-image"

import { ContentFooter } from "../components/content-footer/content-footer";
import PageMeta from "../components/page-meta";
import styled from "styled-components";

const PageHeadline = ({title}) => (
  <header>
    <HeadlineContent>{title}</HeadlineContent>
  </header>
)

const Credits = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  font-size: 1rem;
  opacity: 0.5;
`

const HeroImageLayer = styled.div`
  position: relative;
`
const HeroImage = (data) => {
  const { image, alt } = data;
  console.log('data', data)
  if(!image) { return null }

  return (
    <HeroImageLayer>
      <Img
        alt={alt}
        key={image.src}
        fluid={image.fluid}
      />
      <Credits>
        <a target='_blank' href={image.description}>{image.title}</a>
      </Credits>
    </HeroImageLayer>
  )
};


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
        title,
        description,
        fluid(maxWidth: 2000, maxHeight: 600){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

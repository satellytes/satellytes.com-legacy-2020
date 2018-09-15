import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.contentfulPage

    return (
      <Layout>
        <h1>{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.body.childMarkdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}


export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

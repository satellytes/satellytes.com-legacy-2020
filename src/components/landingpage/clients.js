import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import breakpoint from 'styled-components-breakpoint';
import Img from "gatsby-image";

export const Clients = () => (
  <StaticQuery
    query={graphql`
      query {
        reddImageMobile: file(relativePath: { eq: "clients-1.png" }) {
          childImageSharp {
            fixed(width: 126) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
      <div>
        <Img
          fixed={data.reddImageMobile.childImageSharp.fixed}
          backgroundColor
          title={`Photo by Ken Treloar on Unsplash`}
        />
      </div>
    )}}
  />
)
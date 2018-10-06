import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const ClientImage = styled.div`
  flex: 0 1 50%;
  align-items: flex-end;

  display: flex;

  > * {
    flex: 0 0 100%;
  }

  margin-bottom: 40px;
  padding: 0 15px;
`

const ClientsLayout = styled.div`
  ${breakpoint('sm')`
    display: flex;
    flex-flow: row wrap;
  `}
`
export const Clients = () => (
  <StaticQuery
    query={graphql`
      query ClientImagesQuery {
        contentfulLandingpage {
          clients {
            title
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      return (
      <ClientsLayout>
         {
          data.contentfulLandingpage.clients.map((client, index) => (
            <ClientImage key={index}>
              <Img
                fluid={client.fluid}
                title={client.title}
              />
            </ClientImage>
         ))}
      </ClientsLayout>
    )}}
  />
)

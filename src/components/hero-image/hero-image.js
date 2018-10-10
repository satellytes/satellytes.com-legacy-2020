import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";
import { graphql } from "gatsby";


export const HERO_IMAGE_FRAGMENT = graphql`
  fragment HeroImage on ContentfulAsset {
    title
    description
    fluid(maxWidth: 2000, maxHeight: 600){
      ...GatsbyContentfulFluid
    }
  }
`
const CreditStyles = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  font-size: 1rem;
  opacity: 0.5;
`
const Credits = ({title, url}) => {
  if(!title) { return null }

  return (
    <CreditStyles>
      <a target='_blank' href={url} rel="noopener noreferrer">{title}</a>
    </CreditStyles>
  )
};

const HeroImageLayer = styled.div`
position: relative;
`

export const HeroImage = (data) => {
const { image, alt } = data;
if(!image) { return null }

return (
  <HeroImageLayer>
    <Img
      alt={alt}
      key={image.src}
      fluid={image.fluid}
    />

    <Credits title={image.title} url={image.description}/>
  </HeroImageLayer>
)
};
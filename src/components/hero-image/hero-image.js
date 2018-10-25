import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";

const CreditStyles = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  font-size: 1rem;
  opacity: 0.5;
  padding: 0.1em 0.4em;
`

const Credits = ({title, url}) => {
  if(!title) { return null }

  return (
    <CreditStyles>
      {
        url ? <a target='_blank' href={url} rel="noopener noreferrer">{title}</a> : title
      }
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
export const HERO_IMAGE_FRAGMENT = graphql`
fragment HeroImage on ContentfulAsset {
  title
  description
  fluid(maxWidth: 2000, maxHeight: 600){
    ...GatsbyContentfulFluid
  }

  share:resize(width: 2000, height: 1000){
    src
  }
}
`

export const AUTHOR_POST_FRAGEMENT = graphql`
fragment BlogPostAuthor on ContentfulBlogPost {
  author {
    name
    email
    xing
    role
    image {
      fixed(width: 55, height: 55){
        ...GatsbyContentfulFixed
      }
    }
  }
}
`
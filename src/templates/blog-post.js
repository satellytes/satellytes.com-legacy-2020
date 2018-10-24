import React from 'react'
import get from 'lodash/get'
import PageLayout from "../components/layout/page-layout"
import { graphql } from "gatsby"
import { HeadlineContent } from '../components/typography/headline';
import { Content, Section} from '../components/layout/layout';
import ArticleFooter from '../components/blog/article-footer';
import MarkdownContentful from '../components/typography/markdown-contentful';
import PageMeta from '../components/page-meta';
import { HeroImage } from '../components/hero-image/hero-image';

const Header = ({article}) => (
  <header>
    <HeadlineContent>{article.title}</HeadlineContent>
  </header>
)

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'codepen': false
    };
  }

  componentDidMount() {
    // Add Codepen script to <body> if we detect a Codepen embed
    const codepen = document.getElementsByClassName('codepen');
    if (codepen.length > 0) {
      // Check if we've already embedded the script
      if (!document.getElementById('codepen-script') || !this.state.codepen) {
        // Create script element with Codepen embed JS lib
        const s = document.createElement('script')
        s.async = s.defer = true
        s.src = `//static.codepen.io/assets/embed/ei.js`
        s.id = 'codepen-script'
        const body = document.body
        if (body) {
          body.appendChild(s)
        }

        // Set state to true so the process doesn't run again
        this.setState({
          'codepen': true
        });
      }
    }
  }

  render() {
    const article = get(this.props, 'data.contentfulBlogPost')

    return (
      <PageLayout light="true">
        <PageMeta
          {...this.props}
          article={article}
          title={article.title}/>

        <article>
        <HeroImage image={article.heroImage}/>

          <Content>
            <Section>
              <Header article={article}/>
              <MarkdownContentful markdown={article.body.childMarkdownRemark} />
              <ArticleFooter {...this.props} article={article}/>
            </Section>
          </Content>

        </article>
      </PageLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      createdAt(locale: "de", formatString: "DD.MMM YYYY")
      updatedAt(locale: "de", formatString: "DD.MMM YYYY")
      body {
        childMarkdownRemark {
          htmlAst
          excerpt
        }
      }

      heroImage {
        ...HeroImage
      }

      author {
        ...BlogPostAuthor
      }
    }
  }
`

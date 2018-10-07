import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {HeadlineContent} from '../typography/headline';
import Copy from '../typography/copy';

import rehypeReact from "rehype-react"
import { ContentFooter } from '../content-footer/content-footer';



const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "p": Copy }
}).Compiler


const Layout = styled.div`
  margin-bottom: 40px;
`

const Category = styled.span`
  font-family: ${ ({theme}) => theme.fontFamily.roboto };
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  color: ${ ({theme}) => theme.colors.light};
  font-size: 1.5rem;
`

const TeaserLayout = styled.div`
  margin-bottom: 20px;
`

const TeaserImage = ({article}) => (
  <TeaserLayout>
    <Link to={`/blog/${article.slug}`}>
      <Img
        alt={article.title}
        key={article.heroImage.src}
        fluid={article.heroImage.fluid}
      />
    </Link>
  </TeaserLayout>
);

const HeaderLayout = styled.header`
  margin-bottom: 20px;
`

const Header = ({article}) => (
  <HeaderLayout>
    <Category>UX/UI</Category>
    <HeadlineContent>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </HeadlineContent>
  </HeaderLayout>
);

const DescriptionLayout = styled.div`
  margin-bottom: 20px;
`
const Description = ({markdown}) => {
  return (<DescriptionLayout>{renderAst(markdown.htmlAst)}</DescriptionLayout>)
};


export default (props) => {
  const {article} = props;
  console.log({props});

  return (
  <Layout>
    <TeaserImage article={article}/>
    <Header article={article}/>
    <Description markdown={article.description.childMarkdownRemark}/>
    <ContentFooter
      {...props}
      createdAt={article.updatedAt}
      updatedAt={article.updatedAt}/>
  </Layout>
)}

import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {HeadlineContent} from '../shared/headline';
import Copy from '../shared/copy';

import rehypeReact from "rehype-react"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "p": Copy }
}).Compiler

const DateGroup = styled.div`
  color: #aaa;
`

const Layout = styled.div`
  margin-bottom: 40px;
`

const Separator = styled.div`
  margin-top: 20px;

  width: 64px;
  background-color: ${ ({theme}) => theme.colors.dark};
  height:1px;
  border: none;
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

const Date = ({article}) =>(
  <DateGroup>
    <span>Aktualisiert: {article.updatedAt}</span>, &nbsp;
    <span>Erstellt: {article.createdAt}</span>
  </DateGroup>
);

const DescriptionLayout = styled.div`
  margin-bottom: 20px;
`
const Description = ({markdown}) => {
  return (<DescriptionLayout>{renderAst(markdown.htmlAst)}</DescriptionLayout>)
};


export default ({ article }) => {

  return (
  <Layout>
    <TeaserImage article={article}/>
    <Header article={article}/>
    <Description markdown={article.description.childMarkdownRemark}/>
    <Date article={article}/>

    <Separator/>
  </Layout>
)}

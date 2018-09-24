import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {HeadlineContent} from '../shared/headline';
import Copy from '../shared/copy';

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
  font-size: 1.5rem;
`

const TeaserImage = ({article}) => (
  <Link to={`/blog/${article.slug}`}>
    <Img
      alt={article.title}
      key={article.heroImage.src}
      fluid={article.heroImage.fluid}
    />
  </Link>
);

const Header = ({article}) => (
  <header>
    <Category>UX/UI</Category>
    <HeadlineContent>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </HeadlineContent>
  </header>
);

const Date = ({article}) =>(
  <DateGroup>
    <span>Aktualisiert: {article.updatedAt}</span>, &nbsp;
    <span>Erstellt: {article.createdAt}</span>
  </DateGroup>
);

const Description = ({htmlText}) => (
  <Copy
    dangerouslySetInnerHTML={{
      __html: htmlText,
    }}
  />
);

export default ({ article }) => {

  return (
  <Layout>
    <TeaserImage article={article}/>
    <Header article={article}/>
    <Description htmlText={article.description.childMarkdownRemark.html}/>
    <Date article={article}/>

    <Separator/>
  </Layout>
)}

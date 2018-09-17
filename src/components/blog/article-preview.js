import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';


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
export default ({ article }) => {
  const hero = article.heroImage;
  console.log(hero);

  return (
  <Layout>
    <h2>
      <span>UX/UI</span><br/>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h2>

    <Link to={`/blog/${article.slug}`}>
      <Img
        alt={article.title}
        key={hero.src}
        fluid={hero.fluid}
      />
    </Link>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <DateGroup>
      <span>Aktualisiert: {article.updatedAt}</span>, &nbsp;
      <span>Erstellt: {article.createdAt}</span>
    </DateGroup>

    <Separator/>
  </Layout>
)}

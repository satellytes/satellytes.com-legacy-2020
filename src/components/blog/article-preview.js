import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

export default ({ article }) => {
  const hero = article.heroImage;
  console.log(hero);

  return (
  <div>
    <h3>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <Img
      alt={article.title}
      key={hero.src}
      fluid={hero.fluidTraced}
    />
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)}

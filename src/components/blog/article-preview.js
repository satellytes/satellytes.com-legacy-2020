import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import {HeadlineContent} from '../typography/headline';
import { ContentFooter } from '../content-footer/content-footer';

const Layout = styled.div`
  margin-bottom: 40px;
`

const Category = styled.div`
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
    <Link to={`/blog/${article.slug}`}>

        {
          article.category ?
            <Category>
              {article.category.map(({name}) => name).join(', ')}
            </Category>  : null
        }
      <HeadlineContent>
        {article.title}
      </HeadlineContent>
    </Link>
  </HeaderLayout>
);

const DescriptionLayout = styled.div`
  margin-bottom: 20px;
`
const Description = ({article}) => {
  console.log(article);

  return (
  <DescriptionLayout>
    <Link to={`/blog/${article.slug}`}>
    {article.body.childMarkdownRemark.excerpt}
    </Link>
  </DescriptionLayout>
  )
};


export default (props) => {
  const {article} = props;

  return (
  <Layout>

      <TeaserImage article={article}/>
      <Header article={article}/>
      <Description article={article}/>
      <ContentFooter
        {...props}
        createdAt={article.updatedAt}
        updatedAt={article.updatedAt}/>

  </Layout>
)}

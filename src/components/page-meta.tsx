import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withPrefix } from 'gatsby'

type AuthorType = {
  name: string,
  role: string,
  image: any
}

type ArticleData = {
  title: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
  body: any,
  heroImage: any,
  author: AuthorType,
  excerpt: {
    childMarkdownRemark: {
      excerpt: string;
    }
  }
};

type PageData = {
  title: string,
  createdAt: string,
  updatedAt: string,
  heroImage: any,
  body: {
    childMarkdownRemark: {
      excerpt: string;
      htmlAst: any;
    },
  }
};

type PageMetaData = {
  title: string,
  description: string
  image: string
  article: ArticleData,
  page: any;
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
  location: {
    pathname: string
  }
};

// https://technicalseo.com/seo-tools/schema-markup-generator/
const generateSchema = (url: string, title: string) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'https://www.satellytes.com',
      '@type': 'WebSite',
      url,
      name: title
    },
  ];

  return schemaOrgJSONLD;
}


const defaultShareImage = withPrefix('/img/satellytes-share.png');

const config = {
  twitterProfile: 'http://www.twitter.com/satellytes_beep',
  twitterUser:'@satellytes_beep',
  description: 'Satellytes ist eine Digital-Agentur, die um große Unternehmen kreist und ihnen bei der Transformation und Optimierung digitaler Services und Interfaces hilft.'
}
const PageMeta = (data: PageMetaData) => {
  let title  = 'Satellytes';
  const siteUrl = data.site.siteMetadata.siteUrl

  if(data.title) {
    title =  `${data.title} - Satellytes`;
  }

  const isArticle = !!data.article;
  const isPage = !!data.page;

  const url = `${siteUrl}${data.location.pathname}`

  let description = data.description || config.description;
  let image = data.image || `${siteUrl}${defaultShareImage}`;

  if(isArticle) {
    image = `https:${data.article.heroImage.share.src}`
    description = data.article.body.childMarkdownRemark.excerpt;
  } else if(isPage) {
    if(data.page.heroImage) {
      image = `https:${data.page.heroImage.share.src}`
    }
    description = data.page.body.childMarkdownRemark.excerpt;
  }

  const schemaOrgJSONLD = generateSchema(
    url,
    title,
  );

  return (
    <Helmet title={title}>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.twitterProfile}/>
      <meta name="twitter:creator" content={config.twitterProfile} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* 300x157 or maximum of 4096x4096  */}
      <meta name="twitter:image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isArticle ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

const WithQuery = (props: any) => {
  return (
  <StaticQuery
    // tslint:disable-next-line:jsx-no-multiline-js
    query={graphql`
      query PageMetaQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    // tslint:disable-next-line:jsx-no-lambda
    render={data => ( <PageMeta {...props} {...data}/> )}
  />
)}

export default WithQuery;

// export default PageMeta;

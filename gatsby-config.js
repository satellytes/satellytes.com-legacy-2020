const environment = process.env.NODE_ENV || 'production';

console.log('deploy');
console.log(JSON.stringify(process.env));

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
  if(contentfulConfig) {
    contentfulConfig = contentfulConfig[environment];
  }
} catch (_) {}

require("dotenv").config({
  path: `.env.${environment}`,
})

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
  host: process.env.CONTENTFUL_HOST || contentfulConfig.host
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Satellytes',
    siteUrl: process.env.DEPLOY_PRIME_URL || "https://www.satellytes.com"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/satellytes-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-component"]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /assets\/svg/
          }
      }
    }
  ],
}

const environment = process.env.NODE_ENV || 'production';

let contentfulLoadedConfig = {};
let contentfulConfig = {};

try {
  // Load the Contentful config from the .contentful.json
  contentfulLoadedConfig = require('./.contentful')
} catch (_) {}

require("dotenv").config({
  path: `.env.${environment}`,
})


// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulLoadedConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulLoadedConfig.accessToken,
  host: process.env.CONTENTFUL_HOST || contentfulLoadedConfig.host
}

// include drafts from contentful
if(process.env.FULL_PREVIEW) {
  contentfulConfig = {
    ...contentfulConfig,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || contentfulLoadedConfig.previewAccessToken,
    host: process.env.CONTENTFUL_PREVIEW_HOST || contentfulLoadedConfig.previewHost
  }
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

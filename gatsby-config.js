const environment = process.env.NODE_ENV || 'production';
let contentfulLoadedConfig = {};

try {
  // Load the Contentful config from the .contentful.json
  contentfulLoadedConfig = require('./.contentful')
} catch (_) {}

require("dotenv").config({
  path: `.env.${environment}`,
})


// Overwrite the Contentful config with environment variables if they exist
let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulLoadedConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulLoadedConfig.accessToken,
  host: process.env.CONTENTFUL_HOST || contentfulLoadedConfig.host
}

/**
 * include drafts from contentful by changing host and token to the preview api
 * this flag can be set locally (see env.development) or on netlify for a branch to easily create a staging environment
 */

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
    siteUrl: process.env.URL || process.env.DEPLOY_PRIME_URL || "https://www.satellytes.com"
  },
  plugins: [
    'gatsby-plugin-sitemap',
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Satellytes',
        short_name: 'Satellytes',
        start_url: '/',
        background_color: '#202840',
        theme_color: '#202840',
        display: 'minimal-ui',
        icon: 'src/images/satellytes-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        navigateFallbackWhitelist: []
      }
    },
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
        plugins: [
          "gatsby-remark-component",
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 760,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          }
        ]
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

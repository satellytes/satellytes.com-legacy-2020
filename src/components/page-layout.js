import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import {theme, themeLight} from '../shared/theme';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";
import GlobalStyles from '../shared/globalStyles';

require('typeface-roboto')

const PageWrapper = styled.div`
  max-width: 760px;
  margin: auto;
  padding-top: 60px;
`

const PageLayout = ({ light = false, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={light ? themeLight : theme}>
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >

          <html lang="en" />
          </Helmet>

          <Header siteTitle={data.site.siteMetadata.title} />
          <GlobalStyles />

          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer/>
        </>
      </ThemeProvider>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout

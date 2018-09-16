import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import './layout.css'

import theme from '../shared/theme';
import { ThemeProvider } from 'styled-components';
import '../shared/globalStyles';
import styled from "styled-components";

require('typeface-roboto')

const PageWrapper = styled.div`
  max-width: 760px;
  margin: auto;
  padding: 0 20px;
  padding-top: 60px;
`

const Layout = ({ children }) => (
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
      <ThemeProvider theme={theme}>
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
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer/>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

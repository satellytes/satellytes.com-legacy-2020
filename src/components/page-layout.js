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
  padding-top: ${ ({theme}) => theme.navHeight }px;
  flex-grow: 1;
`

const Page = styled.div`
  display: flex;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
          <GlobalStyles />

          <Page>
            <Header siteTitle={data.site.siteMetadata.title} />
            <PageWrapper>
              {children}
            </PageWrapper>
            <Footer/>
          </Page>
        </>
      </ThemeProvider>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout

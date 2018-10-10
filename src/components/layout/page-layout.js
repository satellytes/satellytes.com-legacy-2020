import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import Footer from '../footer/footer'

import {theme, themeLight} from '../../shared/theme';
import { ThemeProvider } from 'styled-components';
import styled from "styled-components";
import GlobalStyles from '../../shared/globalStyles';

import 'typeface-roboto';

const PageWrapper = styled.div`
  padding-top: ${ ({theme}) => theme.navHeight }px;
  flex-grow: 1;
  padding-bottom: 20px;
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
          {/* <PageMeta title="Satellytes" {...this.props}/> */}
          <GlobalStyles />

          <Page>
            <Header/>
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

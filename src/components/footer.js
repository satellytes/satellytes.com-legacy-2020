import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const Links = styled.div`
  text-align: center;
`
const Layout = styled.footer`
  padding-bottom: 60px;
`
const LinkItem = styled(Link)`
  color: #5CCFE6;
  font-weight: 400;
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 20px;
  }
`
const Footer = () => (
  <Layout>
    <Links>
      <LinkItem to="/page/impressum">Impressum</LinkItem>
      <LinkItem to="/page/privacy">Datenschutz</LinkItem>
    </Links>

  </Layout>
)

export default Footer

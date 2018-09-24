import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import IconTwitter from './../assets/svg/icon-twitter.svg';
import IconLinkedin from './../assets/svg/icon-linkedin.svg';
import IconXing from './../assets/svg/icon-xing.svg';

const Links = styled.div`
  text-align: center;
`
const Layout = styled.footer`
  padding: 80px 0;
  background-color: ${({theme}) => theme.footer.background};
`

const LinkItem = styled(Link)`
  color: #5CCFE6;
  font-weight: 400;
  text-decoration: none;

  &:not(:first-child) {
    margin-left: 20px;
  }
`

const SocialItemsLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 50px);
  margin-bottom: 2em;
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialItems = () => (
  <SocialItemsLayout>
    <SocialLink
      target='_blank'
      href={"http://www.twitter.com/satellytes_beep"}>
      <IconTwitter/>
    </SocialLink>
    <SocialLink
      target='_blank'
      href={"https://www.linkedin.com/company/satellytes"}>
      <IconLinkedin/>
    </SocialLink>
    <SocialLink
      target='_blank'
      href={"https://www.xing.com/companies/satellytesgmbh"}>
      <IconXing/>
    </SocialLink>
  </SocialItemsLayout>
)

const Footer = () => (
  <Layout>
    <SocialItems/>

    <Links>
      <LinkItem to="/page/impressum">Impressum</LinkItem>
      <LinkItem to="/page/privacy">Datenschutz</LinkItem>
    </Links>

  </Layout>
)

export default Footer

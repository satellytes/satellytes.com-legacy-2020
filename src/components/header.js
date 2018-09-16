import React from 'react'
import styled from 'styled-components';
import { rgba } from 'polished'
import Navigation from './navigation';


const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-family: 'Coco Gothic';
  height: ${({theme}) => theme.navHeight}px;
`


const Border = styled.hr`
  position: absolute;
  bottom: 0.5px;
  left: 0;
  right: 0;
  height: 1px;
  border: none;
  background-color: ${({theme}) => rgba(theme.colors.light, 0.2)};
  z-index: 10;
  margin:0;
`
const Header = ({ siteTitle }) => (
  <Layout>
    <Navigation/>
    <Border/>
  </Layout>
)

export default Header

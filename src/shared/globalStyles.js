import * as fonts from './fonts';
import { createGlobalStyle } from 'styled-components';
import './prism-satellytes.css';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Coco Gothic';
    src: url('${fonts.CocoLightWoff2}') format('woff2'), url('${fonts.CocoLightWoff2}') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Coco Gothic';
    src: url('${fonts.CocoLightItalicWoff}') format('woff2'), url('${fonts.CocoLightItalicWoff2}') format('woff');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Coco Gothic';
    src: url('${fonts.CocoRegularWoff2}') format('woff2'), url('${fonts.CocoRegularWoff}') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Coco Gothic';
    src: url('${fonts.CocoBldWoff2}') format('woff2'), url('${fonts.CocoBldWoff}') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  html {
    font-size: ${10/16 * 100}%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    background: ${props => props.theme.background};
    color:  ${props => props.theme.colors.white};

    text-rendering: optimizeLegibility;
    letter-spacing: 0.4px;
    line-height: 1.5;
    margin: 0;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust:none;
  }

  html, body, #___gatsby, #___gatsby > div {
    /* height: 100%; */
  }

  * {
    box-sizing: border-box;
  }


  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles;
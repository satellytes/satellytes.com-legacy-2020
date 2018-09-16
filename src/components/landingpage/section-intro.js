import React from 'react'
import IntroSVG from './../../assets/intro.svg';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Orbit from './orbit';

const mobileHeader = 60;

const SectionLayout = styled.div`
  height: calc(100vh - ${mobileHeader}px);
  margin-left: -20px;
  margin-right: -20px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${breakpoint('sm')`
    height: calc(100vh - 60px);
    align-items: center;
  `}

`;

const SatellytesSVGLogo = styled.svg`
  display: block;
  width: 100%;
  fill: ${ ({theme}) => theme.fontWeight.dark };
  z-index: 100;
  animation: 3s cubic-bezier(0.5, 0.1, 0.37, 1) scale-in-logo forwards;
  z-index: 0;

  ${breakpoint('sm')`
    fill: white;
  `}
`

class SectionIntro extends React.Component {

  render() {

    return (
      <SectionLayout>
        <Orbit/>
        <SatellytesSVGLogo
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 200 200">{IntroSVG()}</SatellytesSVGLogo>
      </SectionLayout>
    )
  }

}

export default SectionIntro;
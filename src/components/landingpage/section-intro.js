import React from 'react'
import IntroSVG from './../../assets/intro.svg';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Orbit from './orbit';
const SectionLayout = styled.div`
  height: 100vh;
  margin-left: -20px;
  margin-right: -20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;


  ${breakpoint('sm')`
    height: calc(100vh - 60px);
    align-items: center;
  `}
`;

const SVGIntro = styled.svg`
  display: block;
  width: 100%;
  fill: ${ ({theme}) => theme.fontWeight.dark };
  z-index: 100;
  animation: 3s cubic-bezier(0.5, 0.1, 0.37, 1) scale-in-logo forwards;
  transform: scale(0.85, 0.85);
  z-index: 0;

  ${breakpoint('sm')`
    fill: white;
  `}
`

const SectionIntro = () => (
  <SectionLayout>
    <Orbit/>
    <SVGIntro
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 200 200">{IntroSVG()}</SVGIntro>
  </SectionLayout>
)

export default SectionIntro;
import React from 'react'
import IntroSVG from './../../assets/svg/intro.svg';
import styled, {keyframes} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Orbit from './orbit';

const mobileHeader = 60;

const SectionLayout = styled.div`
  height: calc(100vh - ${mobileHeader}px);

  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${breakpoint('sm')`
    height: calc(100vh - 60px);
    align-items: center;
  `}

`;



const scaleInLogo = keyframes`
  from {
    transform: scale(0.85, 0.85);
  }
  to {
    transform: scale(1, 1);
  }
`

const SatellytesSVGLogo = styled.svg`
  display: block;
  width: 100%;
  max-width: 760px;

  fill: ${ ({theme}) => theme.fontWeight.dark };
  z-index: 0;
  animation: 3s cubic-bezier(0.5, 0.1, 0.37, 1) ${scaleInLogo} forwards;

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
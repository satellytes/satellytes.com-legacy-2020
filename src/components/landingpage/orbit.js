import React from 'react'
import styled, { keyframes }  from 'styled-components';

import breakpoint from 'styled-components-breakpoint';

const configLarge = {
  radius: 100,
  offsetX: -100,
  offsetY: -100
}

const configSmall = {
  radius: 200,
  offsetX: 35,
  offsetY: -300
}

// const config = {
  // radius: 200,
  // offsetX: 35,
  // offsetY: -300
// }

// Our frame holding the lanet
const Universe = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  z-index: ${({theme}) => theme.depth.orbitLandingpage};
  pointer-events: none;
`

const Planet = styled.div`
  position: absolute;


  background-color: white;
  border-radius: 50%;

  height: ${configLarge.radius * 2}vw;
  width: ${configLarge.radius * 2}vw;
  left: ${configLarge.offsetX}vw;
  top: ${configLarge.offsetY}vw;

  ${breakpoint('sm')`
    fill: white;

    height: ${configSmall.radius * 2}vw;
    width: ${configSmall.radius * 2}vw;
    left: ${configSmall.offsetX}vw;
    top: ${configSmall.offsetY}vw;
  `}

`

const largeOrbit = keyframes`
  0% {
    transform: rotateZ(-28deg);
  }
  100% {
    transform: rotateZ(-50deg);
  }
`;

const Orbiter = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.colors.light };
  top: calc(50% - 8px);
  left: -11px;
  animation: 20s infinite linear ${largeOrbit};
  transform-origin: calc(${configLarge.radius}vw) 0;

  ${breakpoint('sm')`
    transform-origin: calc(${configSmall.radius}vw) 0;
  `}
`


const Orbit = () => (
  <Universe>
    <Planet>
      <Orbiter/>
    </Planet>
  </Universe>
)

export default Orbit;
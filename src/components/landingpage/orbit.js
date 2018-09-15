import React from 'react'
import styled, { keyframes }  from 'styled-components';

import breakpoint from 'styled-components-breakpoint';

const Planet = styled.div`
  position: absolute;
  left: 35vw;
  top: -300vw;
  height: 380vw;
  width: 380vw;
  background-color: white;
  border-radius: 50%;
  height: 400vw;
  width: 400vw;
  transform: scale(0.98);
  display: none;

  ${breakpoint('sm')`
    display: block;
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
  transform-origin: calc(200vw + 11px) 0;
  animation: 20s infinite linear ${largeOrbit};
`


const Orbit = () => (
  <Planet>
    <Orbiter/>
  </Planet>
)

export default Orbit;
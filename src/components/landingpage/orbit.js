import React from 'react'
import styled, { keyframes }  from 'styled-components';

import breakpoint from 'styled-components-breakpoint';

const radius = 200;

const mobilePlanet = {
  orbiterSize: '20px',
  radius: `${radius}vw`,
  diameter: `${radius*2}vw`,
  offsetX: `${-0.375*radius}vw`,
  offsetY: `${-1.3*radius}vw`,
  orbiterDuration: '20s',
  orbiterArcStart: 1.45 * Math.PI + 0.9,
  orbiterArcLength: -0.9
}

const debugOffset = {
  x: 0,
  y: 0
}

const desktopPlanet = {
  ...mobilePlanet,
  offsetX: `${0.175 * radius + debugOffset.x}vw`,
  offsetY: `${-1.5 * radius + debugOffset.y}vw`,
  orbiterArcStart:  0.93 * Math.PI * 2,
  orbiterArcLength: -0.1 * Math.PI * 2
}

// Our frame holding the lanet
const Universe = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  ${breakpoint('sm')`
    z-index: ${({theme}) => theme.depth.orbitLandingpage};
  `}
  pointer-events: none;
`

/**
 * Create the white planet
 * This will hugely size and shifted outside of the viewport
 * that only a small part remains visible in the viewport.
 */
const Planet = styled.div`
  position: absolute;

  /* outline: 1px solid red; */


  height: ${mobilePlanet.diameter};
  width: ${mobilePlanet.diameter};
  left: ${mobilePlanet.offsetX};
  top: ${mobilePlanet.offsetY};

  ${breakpoint('sm')`
    fill: white;

    height: ${desktopPlanet.diameter};
    width: ${desktopPlanet.diameter};
    left: ${desktopPlanet.offsetX};
    top: ${desktopPlanet.offsetY};
  `}


`


const orbitAnimationDesktop = keyframes`
  0% {
    transform: rotateZ(${desktopPlanet.orbiterArcStart}rad);
  }
  100% {
    transform: rotateZ(${desktopPlanet.orbiterArcStart + desktopPlanet.orbiterArcLength}rad);
  }
`


const orbitAnimationMobile = keyframes`
  0% {
    transform: rotateZ(${mobilePlanet.orbiterArcStart}rad);
  }
  100% {
    transform: rotateZ(${mobilePlanet.orbiterArcStart + mobilePlanet.orbiterArcLength}rad);
  }
`

const InnerOrbiterStyles = (size, radius) => (`
  /* border-radius: 50%; */
  height: ${size};
  width: ${size};

  /*
    The bounding box of the paren planet is square,
    the planet itself is inset which means we can't use the given radius
    Align with the side touching the planet, this will give us the correct origin to rotate around
    */
  transform: translate(calc(-50%), calc(${radius} - 50%))
`);

const Orbiter = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  transform-origin: ${mobilePlanet.radius} ${mobilePlanet.radius};
  animation: ${mobilePlanet.orbiterDuration} infinite linear ${orbitAnimationMobile};

  &:after {
    content: '';
    display: block;
    background-color: ${ ({theme}) => theme.colors.light };
    border-radius: 50%;
    ${InnerOrbiterStyles(mobilePlanet.orbiterSize, mobilePlanet.radius)}
  }

  ${breakpoint('sm')`
    transform-origin: ${desktopPlanet.radius} ${desktopPlanet.radius};
    animation: ${desktopPlanet.orbiterDuration} infinite linear ${orbitAnimationDesktop};

    &:after {
      ${InnerOrbiterStyles(mobilePlanet.orbiterSize, mobilePlanet.radius)}
    }
  `}
`
const PlanetShape = () => (
  <svg height="100%" width="100%" viewBox="-1 -1 2 2">
    <circle cx="0" cy="0" r="1" fill="white" />
  </svg>
)

const Orbit = () => (
  <Universe>
    <Planet>
      <PlanetShape/>
      <Orbiter/>
    </Planet>
  </Universe>
)

export default Orbit;
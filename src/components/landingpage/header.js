import React from 'react'

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const HeaderWrapper = styled.header`
  color: ${ ({theme}) => theme.colors.light};
  font-family: 'Coco Gothic';
  text-align: center;
`;

const Headline = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 10px;
`

const Tagline = styled.span`
  margin-top: 10px;
  font-style: italic;
  display: block;
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1.17;
  font-weight: ${({theme}) => theme.fontWeight.light };

  ${breakpoint('md')`
    font-size: 6rem;
  `}
`

const Header = ({headline, tagline}) => (
  <HeaderWrapper>
    <Headline>{headline}</Headline>
    <Tagline>{tagline}</Tagline>
  </HeaderWrapper>
)

export default Header
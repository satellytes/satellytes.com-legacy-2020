import React from 'react'

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { HeadlineDisplay } from './headline';

const HeaderWrapper = styled.header`
  color: ${ ({theme}) => theme.colors.light};
  font-family: 'Coco Gothic';
  margin-bottom: 60px;

  ${breakpoint('md')`
    text-align: center;
  `}
`;

const Tagline = styled.span`
  font-size: 3.5rem;
  margin-bottom: 10px;
`

const DisplayHeader = ({headline, tagline}) => (
  <HeaderWrapper>
    <Tagline>{tagline}</Tagline>
    <HeadlineDisplay>{headline}</HeadlineDisplay>
  </HeaderWrapper>
)

export default DisplayHeader
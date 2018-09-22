import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Headline = styled.h3`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-size: 2.5rem;
  margin-bottom: 4px;

  ${breakpoint('md')`
    font-size: 3rem;
  `}
`

export default Headline;

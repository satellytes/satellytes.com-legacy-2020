import styled, {css} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

// Content + Section define the basic normal vs. breakout layout
export const Content = styled.div`
  display: grid;
  grid-template-columns:  [full-start] 50px [main-start] 1fr 1fr [main-end] 50px [full-end];
  grid-gap: 30px;

  & + & {
    margin-top: 30px;
  }

  ${breakpoint('sm')`

  `}
`;

export  const Section = styled.div`
  grid-column: main;

  ${props => props.breakout ?
  css`
      grid-column: full;
  ` : null
  }
`;

// Grid + Column can be used to align items in a two column alyout
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const Column = styled.div`
  grid-column: auto / span 1;
`;

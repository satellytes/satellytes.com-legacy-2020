import styled, {css} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const mobileGutterSize = `20px`;

// Content + Section define the basic normal vs. breakout layout
export const Content = styled.div`
  max-width: 760px;
  margin: auto;
  padding: 0 20px;
  padding-top: 60px;

  & + & {
    margin-top: 30px;
  }

  ${breakpoint('md')`
    display: grid;
    grid-template-columns:  [full-start] 30px [main-start] 1fr 1fr [main-end] 30px [full-end];
    grid-gap: 30px;
  `}
`;

export  const Section = styled.div`
  grid-column: main;
  margin-bottom: 20px;

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
  grid-gap: ${mobileGutterSize} 0px;

  ${breakpoint('md')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  `}
`;

export const Column = styled.div`
  grid-column: span 2;

  ${breakpoint('md')`
    grid-column: auto / span 1;
  `}
`;

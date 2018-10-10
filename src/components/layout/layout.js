import React from 'react'
import Waypoint from 'react-waypoint';
import styled, { css, keyframes} from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const mobileGutterSize = `20px`;

// Content + Section define the basic normal vs. breakout layout
export const Content = styled.div`
  max-width: ${ ({theme}) => theme.layout.contentMaxWidth }px;
  margin: auto;
  padding: 0 ${({theme}) => theme.layout.gridGap}px;
  padding-top: 60px;

  & + & {
    margin-top: 30px;
  }

  ${breakpoint('md')`
    display: grid;
    grid-template-columns:  [full-start] ${({theme}) => theme.layout.breakoutWidth}px [main-start] 1fr 1fr [main-end] ${({theme}) => theme.layout.breakoutWidth}px [full-end];
    grid-gap: ${({theme}) => theme.layout.gridGap}px;
  `}
`;



const makeVisibleAnimation = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`



export const SectionLayout = styled.div.attrs({
  className: p => p.show ? 'is-showing' : '',
})`
  grid-column: main;
  /* margin-bottom: 20px; */

  transition: transform .3s ease, opacity .3s ease;
  transform: translateY(15px);
  opacity: 0.7;
  &.is-showing {
    animation: 0.7s ${makeVisibleAnimation} forwards;
  }

  ${props => props.breakout ?
  css`
      grid-column: full;
  ` : null
  }
`;

// Required as waypoint needs a dom element
// and it won't recognize styled component
// due to ref property being ignored by styled component
class WaypointWrapper extends React.Component {
  render() {
    return (
      <SectionLayout
        breakout={this.props.breakout}
        ref={this.props.innerRef}
        show={this.props.show}>
        {this.props.children}
      </SectionLayout>
    )
  }
}
export class Section extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }
  _handleWaypointEnter() {
    this.setState({
      visible: true
    });
  }

  render() {

    return (
      <Waypoint onEnter={() => this._handleWaypointEnter()}>
        <WaypointWrapper show={this.state.visible} {...this.props}>
        {this.props.children}
        </WaypointWrapper>
      </Waypoint>

    )
  }

}

// Grid + Column can be used to align items in a two column alyout
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${mobileGutterSize} 0px;

  ${breakpoint('md')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({theme}) => theme.layout.gridGap}px;
  `}
`;

export const Column = styled.div`
  grid-column: span 2;

  ${breakpoint('md')`
    grid-column: auto / span 1;
  `}
`;

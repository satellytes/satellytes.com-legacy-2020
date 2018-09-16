import React from 'react'
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';

const makeVisibleAnimation = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const SectionLayout = styled.div.attrs({
  className: p => p.show ? 'is-showing' : '',
})`
  transition: transform .1s ease, opacity .1s ease;
  transform: translateY(15px);
  opacity: 0.3;
  &.is-showing {
    animation: 2.3s ${makeVisibleAnimation} forwards;
  }

`;

class Section extends React.Component {
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
      <Waypoint
        onEnter={() => this._handleWaypointEnter()}>
        <SectionLayout show={this.state.visible}>{this.props.children}</SectionLayout>
      </Waypoint>

    )
  }

}

export default Section;
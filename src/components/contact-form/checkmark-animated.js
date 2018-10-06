import React from 'react'
import IconCheckmark from './../../assets/svg/checkmark.svg';
import styled, { css } from 'styled-components';
import {CSSTransition} from 'react-transition-group';

const IconBase = ({className, complete}) => (
  <CSSTransition
      in={complete}
      timeout={500}
      classNames="iconfade"
      mountOnEnter
      >
    <div className={className}>
      <IconCheckmark/>
    </div>
  </CSSTransition>
)

const IconAnimation = css`

  &.iconfade-enter {
    transform: translate(0, -100%);
  };

  &.iconfade-enter-active {
      transform: translate(0, 0px);
      transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);;
  };

  &.iconfade-exit {
    transform: translate(0, 0px);
  };
  &.iconfade-exit-active {
      transform: translate(0, 100%);
      transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);;
  };

  &.iconfade-exit-done {
    transform: translate(0, 100%);
  };
`
const Icon = styled(IconBase)`
  margin-right: 15px;
  ${IconAnimation};
`;

export default Icon;

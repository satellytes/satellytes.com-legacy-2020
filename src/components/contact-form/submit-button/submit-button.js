import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../../button/button';
import Progress from './progress-track';
import {
  CSSTransition
} from 'react-transition-group';

import CheckmarkAnimated from './checkmark-animated';

const ButtonBase = styled(Button)`
  position: relative;
`

const LabelAnimation = css`
  &.reveal-enter {
    transform: translate(-31px, 0);
  };

  &.reveal-enter-active {
    transform: translate(0, 0);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
  };

  &.reveal-exit {
    transform: translate(0, 0);
  };

  &.reveal-exit-active {
    transition: transform 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate(-31px, 0);
  };
  &.reveal-exit-done {
    transform: translate(-31px, 0);
  };
`
const LabelLayout = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  ${LabelAnimation};
`

const Label = ({children, complete}) => (
  <CSSTransition
    in={complete}
    timeout={500}
    classNames="reveal">
    <LabelLayout>
      <CheckmarkAnimated complete={complete}/>
      {children}
    </LabelLayout>
  </CSSTransition>
)

const SubmitButton = ({children, progressLabel, completeLabel, sending, completed, disabled}) => {

  function getLabel() {
    if(completed) {
      return completeLabel;
    }else if(sending) {
      return progressLabel;
    }else{
      return children;
    }
  }

  return (
    <ButtonBase type='submit' disabled={disabled}>
      <Progress complete={completed} sending={sending}/>
      <Label complete={completed}>{getLabel()}</Label>
    </ButtonBase>
  )
};

export default SubmitButton;

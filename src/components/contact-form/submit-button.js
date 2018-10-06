import React from 'react'
import styled, { css, keyframes } from 'styled-components';
import Button from '../button/button';
import { cover, darken } from 'polished';
import {
  CSSTransition
} from 'react-transition-group';

import CheckmarkAnimated from './checkmark-animated';

const ButtonBase = styled(Button)`
  position: relative;
`

const progressAnimation = keyframes`
  0% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`

const ProgressBar = styled.div`
  background-color: ${({theme}) => theme.colors.progress};
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: scale(1, 1);
  transform-origin: left;

  ${props => props.complete === false ? css`
    animation: 5s infinite linear ${progressAnimation};
  ` : null}

  ${props => props.complete === true ? css`
    transform: scale(1, 1);
  ` : null}

`
const ProgressTrack = styled.div`
  ${cover()}
  z-index: 0;
  background-color: ${({theme}) => darken(0.2, theme.colors.progress)};
`

const Progress = ({sending, complete}) => {
  if(!(sending || complete)) {
    return null;
  }

  return (
    <ProgressTrack>
      <ProgressBar complete={complete}/>
    </ProgressTrack>
  )
}

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

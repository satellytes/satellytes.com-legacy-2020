import React from 'react'
import styled, { css } from 'styled-components';

const SubmitButtonLayout = styled.div`
  position: relative;
  padding-left: 18px;
  text-align: left;

  ${ ({isSubmitting}) => isSubmitting ? css`
    background-color: red;
  ` : ''};

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }


  &.reset::after {
    transition: none;
    transform: translateX(-100%);
  }

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:before {
    background-color: ${({theme}) => theme.colors.light};
    z-index: -2;
    transition: background-color .2s ease;
  }

  &:after {
    background-color: #B3F2FF;
    transform: translateX(-100%);
    transition: transform .3s ease;
    z-index: -1;
  }
`

const SubmitButton = (props) => (
  <SubmitButtonLayout {...props}>{props.children}</SubmitButtonLayout>
);

export default SubmitButton;

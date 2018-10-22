import React from 'react';
import {run} from './experiments';
import styled, { keyframes } from 'styled-components';

const Layout = styled.div`
  margin: auto;
  margin-top: 60px;

  color: #fff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 140px;
`

const Pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`

const TriggerButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  background-color: transparent;


  circle {
    transform-origin: 0 0;
    transition: transform 0.2s ease-in-out;
  }


  &:hover circle:nth-child(2) {
    animation: ${Pulse} 1s infinite alternate;
  }
  &:hover circle:nth-child(3) {
    animation: ${Pulse} 1.2s infinite alternate;
  }
`

const Title = styled.span`
  font-family: ${ ({theme}) => theme.fontFamily.coco };
  font-weight: ${ ({theme}) => theme.fontWeight.regular };
  color: #fff;
  font-size: 1rem;
`

export const ExperimentTrigger = () => (
  <Layout>
    <TriggerButton onClick={run}>
      <svg width="60" height="60" viewBox="0 -20 60 60">
        <g transform="translate(40 10)">
          <circle fill="#FFFFFF" cx="0" cy="0" r="10"/>
          <circle fill="#FFFFFF" cx="0" cy="0" r="10"/>
          <circle fill="#FFFFFF" cx="0" cy="0" r="10"/>
        </g>
        <g fill="none">
          <polyline stroke="#FFFFFF" opacity="0.400000006" points="1 38 1 10 26 10 22.4999949 12.5437733"/>
        </g>
      </svg>
    </TriggerButton>
    <Title>Please don't touch</Title>
  </Layout>
)



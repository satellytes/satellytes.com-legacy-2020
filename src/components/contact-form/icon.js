import React from 'react'
import styled from 'styled-components';

const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 50px;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .2s ease-out;

  img {
    width: 22px;
  }
`;

const Icon = ({src}) => (
  <IconWrapper>
    <img src={src} alt="person-icon"/>
  </IconWrapper>
);

export default Icon;
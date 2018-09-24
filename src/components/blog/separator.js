import React from 'react'
import styled from 'styled-components';

const Separator = styled.div`
  margin-top: 20px;

  width: 64px;
  background-color: ${ ({theme}) => theme.colors.dark};
  height:1px;
  border: none;
`;

export default Separator;
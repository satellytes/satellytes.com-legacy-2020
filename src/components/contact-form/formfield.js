import React from 'react';
import styled, { css } from 'styled-components';
import Icon from './icon';
import { rgba } from 'polished';

const ErrorMessage = styled.div`
  color: ${ ({theme}) => theme.colors.error };
`

const InputWrapper = styled.div`
  position: relative;
  align-items: center;
  background-color: ${rgba("#000000", 0.2)};
  border-radius: 5px;
  color: white;

  ${({error}) => error ? css`
    border: 1px solid  ${({theme}) => theme.colors.error};
    color: ${({theme}) => theme.colors.error};
  ` : null }
`;

const Formfield = ({id, label, icon, children, hasError, errorMessage}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <InputWrapper error={hasError}>
      {children}
      { icon ? <Icon src={icon}/> : null }
    </InputWrapper>
    {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null }
  </div>
)

export default Formfield;
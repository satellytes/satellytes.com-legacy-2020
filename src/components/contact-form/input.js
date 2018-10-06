import styled, { css } from 'styled-components';
import { Field } from 'formik';

const textInput = css`
display: block;
width: 100%;
border: none;
background-color: transparent;
color: inherit;
padding: 10px 18px;
font-size: 1.5rem;
border-radius: 5px;
transition: box-shadow .2s ease;
font-family: ${ ({theme}) => theme.fontFamily.roboto };

&:focus {
  box-shadow: 0 0 0 2px ${ ({theme}) => theme.colors.light };
  outline: none;
}

&::placeholder {
  color: ${ ({theme}) => theme.colors.light };
}

&.has-error::placeholder {
  color: ${ ({theme}) => theme.colors.error };
}

&.has-error {
  box-shadow: 0 0 0 1px ${ ({theme}) => theme.colors.error };
}

&[disabled] {
  opacity: 0.5;
  pointer-events: none;
}
`;

export const Input = styled(Field)`
  ${textInput}
`;

export const Textarea = styled(Field).attrs({component: 'textarea'})`
  ${textInput}
  height: 150px;
  padding-top: 12px;
`;

import styled, { css } from "styled-components";
import { rgba } from "polished";

type ButtonType = {
  inline: boolean;
}

const Button = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  line-height:  5rem;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  color: ${ ({theme}) => theme.colors.dark };
  font-weight: ${ ({theme}) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco};

  transition: background-color .2s ease;
  background-color: ${ ({theme}) => theme.button.background };
  color: ${ ({theme}) => theme.button.color };
  overflow: hidden;
  position: relative;
  text-align: left;

  padding-left: 15px;
  &:hover, &:active, &:focus {
    background-color: ${ ({theme}) => theme.button.backgroundHover };
  }

  &[disabled]{
    background-color: ${ ({theme}) => rgba(theme.colors.light, 0.5) };
    pointer-events: none;
  }


  ${({inline}:ButtonType) => inline && css`
    width: auto;
    font-size: inherit;
    display: inline-block;
    line-height:  3rem;
    padding: 0 10px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  `}
`
export default Button;
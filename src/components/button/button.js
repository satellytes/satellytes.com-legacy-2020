import styled from "styled-components";
import { rgba } from "polished";

const Button = styled.button`
  display: block;
  width: 100%;
  line-height:  50px;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  color: ${ ({theme}) => theme.colors.dark };
  font-weight: ${ ({theme}) => theme.fontWeight.bold};
  font-family: ${ ({theme}) => theme.fontFamily.coco};

  transition: background-color .2s ease;
  background-color: ${ ({theme}) => theme.colors.light };
  cursor: pointer;
  overflow: hidden;
  position: relative;
  text-align: left;

  &:hover, &:active, &:focus {
    background-color: #80EAFF;
  }

  &[disabled]{
    background-color: ${ ({theme}) => rgba(theme.colors.light, 0.5) };
    pointer-events: none;
  }
`
export default Button;
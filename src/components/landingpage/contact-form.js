import {hideVisually, rgba} from 'polished';
import React from 'react'
import styled, { css } from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import Button from '../button';

import PersonIcon from "./../../images/icon-person.png";
import MailIcon from "./../../images/icon-mail.png";

const Formfield = styled.div`
  position: relative;
  align-items: center;
  background-color: ${rgba("#000000", 0.2)};
  border-radius: 5px;
  color: white;
`;

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
)

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
`

const Input = styled.input`
  ${textInput}
`
const Textarea = styled.textarea`
  ${textInput}
  height: 150px;
  padding-top: 12px;
`

const HoneyPot = styled.div`
  ${hideVisually()};
`
const FormGroup = styled.div`
  & + & {
    margin-top: 20px;
  }
`;


const Textfield = ({icon, children}) => (
  <Formfield>
    {children}
    <Icon src={icon}/>
  </Formfield>
)



export const ContactForm = () => (
  <form data-netlify-honeypot="non-human-field" data-netlify="true">
    <HoneyPot/>
    <FormGroup>
      <Textfield icon={PersonIcon}>
        <Input type="text" aria-label="Name" placeholder="Name" name="name" required />
      </Textfield>
    </FormGroup>

    <FormGroup>
      <Textfield icon={MailIcon}>
        <Input type="text" aria-label="E-Mail" placeholder="E-Mail" name="email" required />
      </Textfield>
    </FormGroup>

    <FormGroup>
      <Formfield>
        <Textarea type="text" aria-label="Nachricht" placeholder="Nachricht" name="message" required />
      </Formfield>
    </FormGroup>

    <FormGroup>
      <Button>Senden</Button>
    </FormGroup>
  </form>
)

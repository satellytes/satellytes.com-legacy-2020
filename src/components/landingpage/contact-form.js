import {hideVisually, rgba} from 'polished';
import React from 'react'
import styled, { css } from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import Button from '../button';

import PersonIcon from "./../../images/icon-person.png";
import MailIcon from "./../../images/icon-mail.png";
import { Formik, Form, Field } from 'formik';

import * as Yup from "yup";

function delayPromise(duration) {
  return function(...args){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve(...args);
      }, duration)
    });
  };
}
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(256, 'Das ist zu lang')
    .required('Wir würden dich gerne mit Namen ansprechen'),

    email: Yup.string()
    .email('Bei dieser Adresse scheint etwas nicht zu stimmen')
    .required('Wir brauchen deine E-Mail, um dich zu kontaktieren'),

    message: Yup.string()
    .min(10, 'Diese Nachricht ist ein bisschen zu kurz')
    .max(5000, 'Die Nachricht ist zu lang.')
    .required('Die Nachricht fehlt, du willst uns doch eine schicken oder?'),
});
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
`

const Input = styled(Field)`
  ${textInput}
`
const Textarea = styled(Field).attrs({component: 'textarea'})`
  ${textInput}
  height: 150px;
  padding-top: 12px;
`

const HoneyPot = styled.div`
  ${hideVisually()};
`

const FormGroup = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

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

const FormLayout = styled.div`
  margin-top: 20px;
`

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

export class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(values, { setSubmitting }){
    const data = JSON.stringify(values, null, 2);

    setSubmitting(true);

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": "sy-contact-form",
    //     ...values
    //   })
    // })
    Promise.resolve(true)
    .then(delayPromise(3000))
    .then(() => {
      this.onSubmitSuccess()
    })
    .catch(this.onSubmitError)
    .finally(() => {
      setSubmitting(false)
    })
  }
  onSubmitSuccess = response => {
    console.log('onSubmitSuccess')
    this.setState({
      submitting: false,
      success: true
    })
    this.setState({success: true})
  }

  onSubmitError = error => {
    console.log('onSubmitError')
    this.setState({
      submitting: false,
      error: true
    })

  }

  handleChange = field => event => {
    console.log('field', field,  { [field]: event.target.value})
    this.setState({ [field]: event.target.value});
  }

  render() {

    return (
      <FormLayout>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validateOnBlur={true}
          // validationSchema={SignupSchema}
          onSubmit={this.submit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form data-netlify-honeypot="non-human-field" data-netlify="true" >
              <HoneyPot/>

              <FormGroup>
                <Formfield
                  id="name" icon={PersonIcon} label='Name'
                  hasError={errors.name && touched.name} errorMessage={errors.name}>
                  <Input id="name" name="name" placeholder="Name" />
                </Formfield>
              </FormGroup>

              <FormGroup >
                <Formfield
                  icon={MailIcon} id='email' label='E-Mail'
                  hasError={errors.email && touched.email} errorMessage={errors.email}>
                  <Input id='email' name="email" placeholder="E-Mail"/>
                </Formfield>
              </FormGroup>

              <FormGroup>
                <Formfield
                  id='message' label='Ihre Nachricht'
                  hasError={errors.message && touched.message} errorMessage={errors.message} >
                  <Textarea id='message' name="message"  placeholder="Nachricht"/>
                </Formfield>
              </FormGroup>

              <FormGroup>
                <Button type='submit' disabled={isSubmitting} >Senden</Button>
                <SubmitButton isSubmitting={isSubmitting}>Senden</SubmitButton>
              </FormGroup>
            </Form>
          )}
        </Formik>
    </FormLayout>
    )
  }
}

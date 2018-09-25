import {hideVisually, rgba} from 'polished';
import React from 'react'
import styled, { css } from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import Button from '../button';

import PersonIcon from "./../../images/icon-person.png";
import MailIcon from "./../../images/icon-mail.png";
import { Formik, Form, Field } from 'formik';

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

const Formfield = styled.div`
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
  & + & {
    margin-top: 20px;
  }
`;


const ErrorMessage = styled.div`
  color: ${ ({theme}) => theme.colors.error };
`
const Textfield = ({icon, children, hasError, errorMessage}) => (
  <div>
    <Formfield error={hasError}>
      {children}
      { icon ? <Icon src={icon}/> : null }
    </Formfield>
    {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null }
  </div>
)

const FormLayout = styled.div`
  margin-top: 20px;
`

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
    this.validate = this.validate.bind(this);
  }

  submit(values, { setSubmitting }){
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, 400);
  }

  handleChange = field => event => {
    console.log('field', field,  { [field]: event.target.value})
    this.setState({ [field]: event.target.value});
  }

  validate(values) {
    console.log('validate');

    let errors = {};
    errors.name = 'not good';
    return errors;
  }

  render() {

    return (
      <FormLayout>
        <Formik
          validationSchema={SignupSchema}
          onSubmit={this.submit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form data-netlify-honeypot="non-human-field" data-netlify="true" >
              <HoneyPot/>

              <FormGroup>
                <Textfield icon={PersonIcon} hasError={errors.name && touched.name} errorMessage={errors.name}>
                  <Input name="name" />
                </Textfield>
              </FormGroup>

              <FormGroup >
                <Textfield icon={MailIcon} hasError={errors.email && touched.email} errorMessage={errors.email}>
                  <Input name="email"/>
                </Textfield>
              </FormGroup>

              <FormGroup>
                <Textfield hasError={errors.message && touched.message} errorMessage={errors.message} >
                  <Textarea name="message"/>
                </Textfield>
              </FormGroup>

              <FormGroup>
                <Button type='submit' disabled={isSubmitting} >Senden</Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
    </FormLayout>
    )
  }
}

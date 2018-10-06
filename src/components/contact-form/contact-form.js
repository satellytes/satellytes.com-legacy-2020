import {hideVisually, rgba} from 'polished';
import React from 'react'
import styled, { css } from 'styled-components';
import Button from '../button/button';

import PersonIcon from "./../../images/icon-person.png";
import MailIcon from "./../../images/icon-mail.png";
import { Formik, Form } from 'formik';

import * as Yup from "yup";
import SubmitButton from './submit-button';
import Formfield from './formfield';
import {Input, Textarea} from './input';

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


const HoneyPot = styled.div`
  ${hideVisually()};
`

const FormGroup = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

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

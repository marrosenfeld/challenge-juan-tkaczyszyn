/*
 * Messages
 *
 * This contains all the text for the auth component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  error:{
    login: {
      id: 'boilerplate.components.Auth.error.login',
      defaultMessage: 'Wrong user or password, please try again.',
    },
  },
  button:{
    login: {
      id: 'boilerplate.components.Auth.button.login',
      defaultMessage: 'Login',
    },
    forgotPassword: {
      id: 'boilerplate.components.Auth.button.forgotPassword',
      defaultMessage: 'Forgot Password',
    },
    submit: {
      id: 'boilerplate.components.Auth.button.submit',
      defaultMessage: 'Submit',
    },
    goBack: {
      id: 'boilerplate.components.Auth.button.goBack',
      defaultMessage: 'Go Back',
    },
  },
  input: {
    email: {
      id: 'boilerplate.components.Auth.input.email.placeholder',
      defaultMessage: 'E-mail',
    },
    password: {
      id: 'boilerplate.components.Auth.input.password.placeholder',
      defaultMessage: 'Password',
    },
  },
  forgotPassword:{
    message:{
      id: 'boilerplate.components.Auth.forgotPassword.message',
      defaultMessage: 'Enter your e-mail address below to reset your password.',
    },
    emailSent:{
      id: 'boilerplate.components.Auth.forgotPassword.emailSent',
      defaultMessage: `An email has been sent to {email} with further instructions.`
    }
  },

  description: {
    id: 'app.components.NotFoundPage.description',
    defaultMessage: 'That\'s all we know.',
  },
});

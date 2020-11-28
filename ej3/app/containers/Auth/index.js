import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGlobal } from '../App/selectors';
import ThemeDefault from '../../themes/theme-default';
import * as appActions from '../../containers/App/actions';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import ForgotPassword from '../../components/Auth/ForgotPassword';

class AuthPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: '',
        password: ''
      },
      forgotPassword: {
        email: '',
      },
      showForgotPassword: false,
      errorMessage: '',
    };

    this.showLogin = this.showLogin.bind(this);
    this.showForgotPassword = this.showForgotPassword.bind(this);

    this.signIn = this.signIn.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.forgotPasswordEmailChanged = this.forgotPasswordEmailChanged.bind(this);

    this.loginEmailChanged = this.loginEmailChanged.bind(this);
    this.loginPasswordChanged = this.loginPasswordChanged.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.appStore.authenticationErrorMessage !==
    this.props.appStore.authenticationErrorMessage) {
      this.setState({
        errorMessage: newProps.appStore.authenticationErrorMessage,
      });
    }
  }

  loginEmailChanged(event) {
    const login = this.state.login;
    login.email = event.target.value;

    this.setState({
      login,
    });

    this.props.actions.clearAuthenticationMessage();
  }

  loginPasswordChanged(event) {
    const login = this.state.login;
    login.password = event.target.value;

    this.setState({
      login,
    });

    this.props.actions.clearAuthenticationMessage();
  }

  resetPassword() {
    // validations goes here

    const payload = {
      email: this.state.forgotPassword.email,
    };

    this.props.actions.resetPassword(payload);
  }

  forgotPasswordEmailChanged(event) {
    this.setState({
      forgotPassword: {
        email: event.target.value,
      },
    });
  }
  signIn() {
    // validations goes here

    const payload = {
      email: this.state.login.email,
      password: this.state.login.password
    };

    this.props.actions.signIn(payload);
  }

  showLogin() {
    this.setState({
      showForgotPassword: false,
    });
  }

  showForgotPassword() {
    this.setState({
      showForgotPassword: true,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
            <div>
              { this.state.showForgotPassword ? (
                <ForgotPassword
                  email={this.state.forgotPassword.email}
                  onEmailChange={this.forgotPasswordEmailChanged}
                  onGoBack={this.showLogin}
                />
                ) : (
                  <Login
                    email={this.state.login.email}
                    onEmailChange={this.loginEmailChanged}
                    password={this.state.login.password}
                    onPasswordChange={this.loginPasswordChanged}
                    onSignIn={this.signIn}
                    onForgotPassword={this.showForgotPassword}
                    errorMessage={this.state.errorMessage}
                  />
                )
              }
            </div>
        </div>
      </MuiThemeProvider >
    );
  }
}


AuthPage.propTypes = {
  actions: PropTypes.any,
  appStore: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  appStore: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

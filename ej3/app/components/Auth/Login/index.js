import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import styles from '../styles';
import messages from '../messages';
import {injectIntl, intlShape, FormattedRelative} from 'react-intl';
import {getFromKey} from '../../../utils/emilib'

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    const {formatMessage} = this.props.intl;

    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div style={styles.logoContainer}>
              <img
                style={{ width: 295, height: 54 }}
                src="http://adminwebtemplates.com/logo.png" alt="Fortress Admin Template"
              />
            </div>
            {
              this.props.errorMessage ? (
                <div>
                  <p style={styles.errorMessage}>

                    * {formatMessage(getFromKey(messages, this.props.errorMessage))}
                  </p>
                </div>
              ) : null
            }

            <form>
              <TextField
                hintText={formatMessage(messages.input.email)}
                floatingLabelText={formatMessage(messages.input.email)}
                fullWidth
                value={this.props.email}
                onChange={this.props.onEmailChange}
              />
              <TextField
                hintText={formatMessage(messages.input.password)}
                floatingLabelText={formatMessage(messages.input.password)}
                fullWidth
                type="password"
                value={this.props.password}
                onChange={this.props.onPasswordChange}
              />

              <div style={styles.buttonsContainer}>
                <RaisedButton
                  label={formatMessage(messages.button.login)}
                  primary
                  style={styles.boxBtn}
                  onClick={this.props.onSignIn}
                />

              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <FlatButton
              label={formatMessage(messages.button.forgotPassword)}
              onClick={this.props.onForgotPassword}
              style={styles.flatButton}
              icon={<FontIcon className="material-icons">help</FontIcon>}
            />
          </div>

        </div>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Login);

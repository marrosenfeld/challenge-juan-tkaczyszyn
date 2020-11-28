import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles';
import {injectIntl, intlShape, FormattedRelative} from 'react-intl';
import messages from '../messages';

class ForgotPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);

    const {formatMessage} = this.props.intl;

    this.state = {
      showEmailSentMessage: false,
      message: formatMessage(messages.forgotPassword.message),
    };

    this.sentEmail = this.sentEmail.bind(this);
  }


  sentEmail() {
    if (this.props.email){
      this.setState({
        showEmailSentMessage: true,
        message: this.props.intl.formatMessage(messages.forgotPassword.emailSent, {email: this.props.email}),
      });

    }
  }

  render() {
    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
            <div>
              <div style={styles.title}>
                {this.props.intl.formatMessage(messages.button.forgotPassword)}
              </div>
              <div style={styles.logoSmallContainer}>
                <img src="http://adminwebtemplates.com/logo-small.png" alt="Fortress Admin Template" />
              </div>
            </div>
            <hr />
            <p>{this.state.message}</p>
            <form>
              {
                this.state.showEmailSentMessage ? null :
                (
                  <TextField
                    hintText={this.props.intl.formatMessage(messages.input.email)}
                    floatingLabelText={this.props.intl.formatMessage(messages.input.email)}
                    fullWidth
                    value={this.props.email}
                    onChange={this.props.onEmailChange}
                    />
                )
              }

              <div style={styles.buttonsContainer}>
                <RaisedButton
                  label={this.props.intl.formatMessage(messages.button.goBack)}
                  style={styles.goBackBtn}
                  onClick={this.props.onGoBack}
                  />

                {
                  this.state.showEmailSentMessage ? null :
                  (
                    <RaisedButton
                      label={this.props.intl.formatMessage(messages.button.submit)}
                      primary
                      style={styles.boxBtn}
                      onClick={this.sentEmail}
                      />
                  )
                }
              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ForgotPassword);

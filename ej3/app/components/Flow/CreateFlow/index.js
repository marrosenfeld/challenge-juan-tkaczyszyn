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
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

class CreateFlow extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      subsidiaryError: ""
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleUpdateInput = (searchText, dataSource, params) => {
    this.setState({
      searchText: searchText,
    });
    // console.log('handleUpdateInput', searchText, dataSource, params)
    // this.props.onSubsidiaryChange(searchText)
  };


  handleNewRequest = (chosenRequest, index) => {
    // console.log("handleNewRequest", chosenRequest, chosenRequest.valueKey)
    if (!chosenRequest.valueKey){
      const {formatMessage} = this.props.intl;
      let valueKey = null;
      let name = ""

      const subsidiaries = this.props.subsidiaries
      for (let s in subsidiaries){
        if (subsidiaries[s].name.toLowerCase().indexOf(chosenRequest.toLowerCase()) > -1){
          valueKey = subsidiaries[s].id
          name = subsidiaries[s].name
          break
        }
      }

      if(valueKey){
        this.setState({
          subsidiaryError: '',
          searchText: name
        });
        this.props.onSubsidiaryChange(valueKey)
      } else {
        this.setState({
          subsidiaryError: formatMessage(messages.error.subsidiary)
        });
      }

    } else {
      this.setState({
        subsidiaryError: ""
      });
      this.props.onSubsidiaryChange(chosenRequest.valueKey)
    }

  };

  render() {

    const {formatMessage} = this.props.intl;

    const dataSource = []
    const subsidiaries = this.props.subsidiaries
    for (let s in subsidiaries){
      dataSource.unshift({textKey: subsidiaries[s].name, valueKey: subsidiaries[s].id})
    }

    const dataSourceConfig = {
      text: 'textKey',
      value: 'valueKey',
    };

    return (
      <div id="login-form">
        <div style={styles.boxContainer}>
          <Paper style={styles.paper}>
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
                hintText={formatMessage(messages.input.name)}
                floatingLabelText={formatMessage(messages.input.name)}
                fullWidth
                value={this.props.name}
                onChange={this.props.onNameChange}
              />
              <TextField
                hintText={formatMessage(messages.input.fileName)}
                floatingLabelText={formatMessage(messages.input.fileName)}
                fullWidth
                value={this.props.fileName}
                onChange={this.props.onFileNameChange}
              />
              <AutoComplete
                floatingLabelText={formatMessage(messages.input.subsidiary)}
                filter={AutoComplete.fuzzyFilter}
                openOnFocus={true}
                dataSource={dataSource}
                dataSourceConfig={dataSourceConfig}
                maxSearchResults={3}
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                onNewRequest={this.handleNewRequest}
                errorText={this.state.subsidiaryError}
              />

              <div style={styles.buttonsContainer}>
                <RaisedButton
                  label={formatMessage(messages.button.create)}
                  primary
                  style={styles.boxBtn}
                  onClick={this.props.onCreate}
                />
                {this.props.onBack?
                  (
                    <RaisedButton
                    label={formatMessage(messages.button.back)}
                    secondary
                    onClick={this.props.onBack}
                    />
                  ):null
                }

              </div>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}




CreateFlow.propTypes = {
  name: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  subsidiaryId: PropTypes.number.isRequired,
  subsidiaries: PropTypes.array.isRequired,
  onFileNameChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubsidiaryChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onBack: PropTypes.func,
  errorMessage: PropTypes.string,
  intl: intlShape.isRequired,
};

export default injectIntl(CreateFlow);

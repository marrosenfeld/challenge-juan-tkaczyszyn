import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import messages from '../messages';
import { white, lightBlue600, pink500, red500 } from 'material-ui/styles/colors';
import {injectIntl, intlShape, FormattedRelative} from 'react-intl';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';


const styles = {
  buttonDelete:{
    color: "white"
  },
  container: {
    marginTop: 50,
  },
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: '20px',
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 1,
  },
  cardHeader: {
    backgroundColor: 'black',
  },
  cardAvatar:{
    objectFit: 'contain',
    backgroundColor: "whitesmoke"
  },
  cardActions: {
    backgroundColor: lightBlue600,
  },
  cardButtonActions: {
    color: white,
    minWidth: 70,
  },
};



class FlowTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      selectedFlow: null
    };

    this.selectFlowToBeDeleted = this.selectFlowToBeDeleted.bind(this);
    this.handleCloseDeleteDialog = this.handleCloseDeleteDialog.bind(this);
    this.deleteFlow = this.deleteFlow.bind(this);

  }

  selectFlowToBeDeleted(flow) {
    this.setState({
      openDeleteDialog: true,
      selectedFlow: flow,
    });
  }

  handleCloseDeleteDialog() {
    this.setState({
      openDeleteDialog: false,
      selectedFlow: null,
    });
  }

  deleteFlow() {
    const selectedFlow = this.state.selectedFlow;

    if (this.props.onFlowRemoved){
      this.props.onFlowRemoved(selectedFlow)
    }
    this.setState({
      openDeleteDialog: false,
      selectedFlow: null
    });
  }


  render() {
    const {formatMessage} = this.props.intl;

    const actionsDelete = [
      <FlatButton
        label={formatMessage(messages.button.cancel)}
        primary
        onTouchTap={this.handleCloseDeleteDialog}
      />,
      <FlatButton
        label={formatMessage(messages.button.remove)}
        secondary
        keyboardFocused
        onTouchTap={this.deleteFlow}
      />,
    ];

    return (
      <div>
        <div className="row" style={styles.container}>
          <Table
          height="300px"
          fixedHeader={true}
          fixedFooter={false}
          selectable={true}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>{formatMessage(messages.table.id)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.company)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.name)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.fileName)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.listings)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.country)}</TableHeaderColumn>
              <TableHeaderColumn>{formatMessage(messages.table.delete)}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover={true}
            stripedRows={false}
          >
            {this.props.flows.map( (flow, index) => (
              <TableRow key={flow.id}>
                <TableRowColumn>{flow.id}</TableRowColumn>
                <TableRowColumn>{flow.subsidiaryName}</TableRowColumn>
                <TableRowColumn>{flow.name}</TableRowColumn>
                <TableRowColumn>{flow.fileName}</TableRowColumn>
                <TableRowColumn>{flow.listings}</TableRowColumn>
                <TableRowColumn>{flow.countryName}</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton
                    // style={styles.buttonDelete}
                    secondary
                    icon={<FontIcon className="material-icons" color={white}>delete_forever</FontIcon>}
                    onClick={() => this.selectFlowToBeDeleted(flow)}
                  />
                </TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>

        <Dialog
          title={this.state.selectedFlow && formatMessage(messages.dialog.remove.title, { flow: this.state.selectedFlow.name})}
          actions={actionsDelete}
          modal={false}
          open={this.state.openDeleteDialog}
          onRequestClose={this.handleCloseDeleteDialog}
        >
          {this.state.selectedFlow && formatMessage(messages.dialog.remove.text, { listings: this.state.selectedFlow.listings })}
        </Dialog>
      </div>
    </div>
    )
  }
}

FlowTable.propTypes = {
  flows: PropTypes.array.isRequired,
  onFlowRemoved: PropTypes.func,
  intl: intlShape.isRequired,
};


export default injectIntl(FlowTable);

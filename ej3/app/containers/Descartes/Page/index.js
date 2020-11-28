import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { white, cyan500, cyan600, pink500, pink600, purple500, purple600, orange500, orange600, lightBlue600 } from 'material-ui/styles/colors';
import * as flowActions from '../actions';
import * as appActions from '../../App/actions';
import makeSelectDescartesPage from '../selectors';
import { makeSelectGlobal } from '../../../containers/App/selectors';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

import PageBase from '../../../components/PageBase';


const styles = {
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
  cardActions: {
    backgroundColor: lightBlue600,
  },
  cardButtonActions: {
    color: white,
    minWidth: 70,
  },
};

class DescartesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
      errorMessage: '',
      loading: true,
    };

  }

  componentWillReceiveProps(newProps) {
    if (newProps.descartesStore.candidates !==
    this.props.descartesStore.candidates) {
      this.setState({
        candidates: newProps.descartesStore.candidates
      });
    }
  }

  componentWillMount() {
    this.setState({
      loading: false,
    });
    if (!this.props.descartesStore.candidates || !this.props.descartesStore.candidates.length || this.props.descartesStore.candidates.length < 2){
        this.props.actions.getCandidates();
    }
  }

  render() {
    let view = null;
    let title = ''
      view = <div>Your job 😈</div>

    return (
      <PageBase
        navigation="Application / Descartess"
        noWrapContent
        loading={this.state.loading}
      >
          {view}

      </PageBase>
    );
  }
}

DescartesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  descartesStore: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  descartesStore: makeSelectDescartesPage(),
  appStore: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  // You can use actions from another container, for example appActions, like this:
  // const actions = bindActionCreators({ ...appActions, ...apidemoActions }, dispatch);

  const actions = bindActionCreators({ ...appActions, ...flowActions }, dispatch);
  return {
    actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DescartesPage);

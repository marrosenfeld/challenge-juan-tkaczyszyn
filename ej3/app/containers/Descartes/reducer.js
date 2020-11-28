/*
 *
 * ApidemoPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CANDIDATES_SUCCESS,
  GET_CANDIDATES_ERROR,
  CLEAR_MESSAGE,
  GET_COLUMNS_SUCCESS,
  GET_COLUMNS_ERROR,
  GET_COLUMN_REASON_REJECTION_SUCCESS,
  GET_COLUMN_REASON_REJECTION_ERROR,
} from './constants';

const initialState = fromJS({
  candidates: [],
  loading: false,
  message: '',
});

function descartesPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES_SUCCESS: {
      /*TODO*/
      return state;
    }
    case GET_CANDIDATES_ERROR: {
      /*TODO*/
      return state;
    }
    case CLEAR_MESSAGE:{
      return state.set('errorMessage', '');
    }
    default:
      return state;
  }
}

export default descartesPageReducer;

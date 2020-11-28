/*
 *
 * PlatformPage actions
 *
 */

import {
  GET_CANDIDATES,
  GET_CANDIDATES_SUCCESS,
  GET_CANDIDATES_ERROR,
  GET_COLUMNS,
  GET_COLUMNS_SUCCESS,
  GET_COLUMNS_ERROR,
  GET_COLUMN_REASON_REJECTION,
  GET_COLUMN_REASON_REJECTION_SUCCESS,
  GET_COLUMN_REASON_REJECTION_ERROR,
  CLEAR_MESSAGE,
} from './constants';


export function getCandidates() {
  return {
    type: GET_CANDIDATES
  };
}

export function getCandidatesSuccess(candidates) {
  return {
    type: GET_CANDIDATES_SUCCESS,
    candidates
  };
}

export function getCandidatesError(error) {
  return {
    type: GET_CANDIDATES_ERROR,
    error
  };
}

export function getColumns() {
  return {
    type: GET_COLUMNS
  };
}

export function getColumnsSuccess(candidates) {
  return {
    type: GET_COLUMNS_SUCCESS,
    candidates
  };
}

export function getColumnsError(error) {
  return {
    type: GET_COLUMNS_ERROR,
    error
  };
}

export function getColumnReasonRejection() {
  return {
    type: GET_COLUMN_REASON_REJECTION
  };
}

export function getColumnReasonRejectionSuccess(reasons) {
  return {
    type: GET_COLUMN_REASON_REJECTION_SUCCESS,
    reasons
  };
}

export function getColumnReasonRejectionError(error) {
  return {
    type: GET_COLUMN_REASON_REJECTION_ERROR,
    error
  };
}


export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}

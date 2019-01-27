// @flow
import * as API from './api';

export default function initGame() {
  return dispatch => {
    dispatch(API.initGame());
  };
}

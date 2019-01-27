// import _ from 'lodash';
import axios from 'axios';
// import socket from 'socket.io';
import { SERVER_URL } from '../constants/config';

const defaultSuccess = {};

export const INIT_GAME_SUCCESS = 'INIT_GAME_SUCCESS';
export const INIT_GAME_REQUEST = 'INIT_GAME_REQUEST';
export const INIT_GAME_ERROR = 'INIT_GAME_ERROR';

export const initGameSuccess = (res, success) => ({
  type: INIT_GAME_SUCCESS,
  res,
  success
});
export const initGameRequest = res => ({ type: INIT_GAME_REQUEST, res });
export const initGameError = error => ({ type: INIT_GAME_ERROR, error });

export function initGame() {
  return dispatch => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: `${SERVER_URL}/start`
    };
    dispatch(initGameRequest());
    return axios(options)
      .then(res => {
        const result = res.data;
        dispatch(initGameSuccess(result, defaultSuccess));
        return result;
      })
      .catch(error => {
        dispatch(initGameError(error.message));
      });
  };
}

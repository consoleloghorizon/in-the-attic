import _ from 'lodash';
import axios from 'axios';
import socket from 'socket.io';

const defaultSuccess = {};

export const INIT_GAME_SUCCESS = 'INIT_GAME_SUCCESS';
export const INIT_GAME_REQUEST = 'INIT_GAME_REQUEST';
export const INIT_GAME_ERROR = 'INIT_GAME_ERROR';

export const initGameSuccess = (res, success) => ({type: INIT_GAME_SUCCESS, res, success});
export const initGameRequest = res => ({type: INIT_GAME_REQUEST, res});
export const initGameErr = error => ({type: INIT_GAME_ERROR, error});

export function initGame() {
  return (dispatch, getState) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      url: '3.92.201.176:8000'
    }
    dispatch(initGameRequest());
    return axios(options)
    .then(res => {
      const result = res.data.result;
      dispatch(initGameSuccess(result, defaultSuccess));
    })
    .catch(error => {
      dispatch(initGameError(error.message));
    })
  }
}

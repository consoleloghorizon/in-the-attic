// @flow
import _ from 'lodash';
import { UPDATE_COUNTDOWN, START_GAME, RESET_LOBBY } from '../actions/lobby';
import { INIT_GAME_SUCCESS, PLAYER_JOINED } from '../actions/api';
import type { Action } from './types';

const initState = {
  countdown: 0,
  round: '',
  phase: '',
  gameCode: '',
  players: [],
  socket: undefined
};

export default function game(state: object = initState, action: Action) {
  switch (action.type) {
    case INIT_GAME_SUCCESS:
      return {
        ...state,
        gameCode: action.res.gameCode,
        socket: action.res.socket
      };
    case PLAYER_JOINED:
      const players = _.clone(state.players);
      players.push(action.res.player);
      return {
        ...state,
        players
      }
    case UPDATE_COUNTDOWN:
      return {
        ...state,
        countdown: action.res
      };
    case START_GAME:
      return {
        ...state,
        countdown: 0,
        round: 0,
        phase: 1
      };
    case RESET_LOBBY:
      return {
        ...initState
      };
    default:
      return state;
  }
}

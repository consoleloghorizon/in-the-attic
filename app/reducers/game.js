// @flow
import { UPDATE_COUNTDOWN, START_GAME } from '../actions/lobby';
import { INIT_GAME_SUCCESS } from '../actions/api';
import type { Action } from './types';

const initState = {
  countdown: 0,
  round: '',
  phase: '',
  gameCode: '',
  players: []
};

export default function game(state: object = initState, action: Action) {
  switch (action.type) {
    case INIT_GAME_SUCCESS:
      return {
        ...state,
        gameCode: action.res.gameCode
      };
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
    default:
      return state;
  }
}

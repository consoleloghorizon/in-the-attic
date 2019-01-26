// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';
export const START_GAME = 'START_GAME';


export function updateCountdown(count: int) {
  return {
    type: UPDATE_COUNTDOWN,
    res: count
  };
}

export function startGame() {
  return {
    type: START_GAME
  };
}

export function startCountdown(delay: int = 5000) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch(startGame());
  };
}

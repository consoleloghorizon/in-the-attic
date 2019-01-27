// @flow
import { initGame } from './api';
import type { Dispatch } from '../reducers/types';

export const UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN';
export const START_GAME = 'START_GAME';

export function updateCountdown(count: int) {
  return {
    type: UPDATE_COUNTDOWN,
    res: count
  };
}

export { initGame };

export function startGame() {
  return {
    type: START_GAME
  };
}

export function startCountdown() {
  return (dispatch: Dispatch) => {
    let timer = 3;
    dispatch(updateCountdown(timer));
    const countdown = setInterval(() => {
      timer -= 1;
      if (timer > 0) {
        dispatch(updateCountdown(timer));
      } else {
        clearInterval(countdown);
        dispatch(startGame());
      }
    }, 1000);
  };
}

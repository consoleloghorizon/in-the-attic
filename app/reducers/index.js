// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import game from './game';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    game
  });
}

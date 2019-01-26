import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type gameStateType = {
  +game: object
};

export type Action = {
  +type: string
};

export type GetState = () => gameStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;

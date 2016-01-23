import { createStore } from 'redux';

export default function (reducer, initialState) {
  return createStore(reducer, initialState);
}
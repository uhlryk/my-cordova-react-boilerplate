import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default (reducer, initialState = {}, middlewares = []) => applyMiddleware(thunk, ...middlewares)(createStore)(reducer, initialState);

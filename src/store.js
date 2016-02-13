// Creates the store
// -- combines core reducers with local reducers
import { 
  createStore, 
  bindActionCreators, 
  applyMiddleware, 
  combineReducers }       from 'redux';
import thunk              from 'redux-thunk';
import createLogger       from 'redux-logger';
import * as reducers from './reducers';

const combinedReducers  = combineReducers({ reducers });
const loggerMiddleware  = createLogger();

export const store      = createStore(combinedReducers, applyMiddleware(thunk, loggerMiddleware));
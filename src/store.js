// Creates the store
// -- combines core reducers with local reducers
import {
  createStore,
  bindActionCreators,
  applyMiddleware,
  combineReducers }       from 'redux';
import thunk              from 'redux-thunk';
import createLogger       from 'redux-logger';
import * as reducers      from './reducers';
import { routeReducer, syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { extend }         from 'lodash';

const combinedReducers  = combineReducers(extend({}, reducers, {
  routing: routeReducer
}));

const loggerMiddleware          = createLogger();
const reduxRouterMiddleware     = syncHistory(browserHistory);

// NOTE!!!!
// Ensure that loggerMiddleware is ALWAYS last!!!
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware, loggerMiddleware)(createStore);


const store                     = createStoreWithMiddleware(combinedReducers);

reduxRouterMiddleware.listenForReplays(store);

export { store };

// Creates the store
// -- combines core reducers with local reducers
import {
  createStore,
  applyMiddleware}        from 'redux';
import thunk              from 'redux-thunk';
import createLogger       from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';


const loggerMiddleware          = createLogger();
const reduxRouterMiddleware     = syncHistory(browserHistory);

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxRouterMiddleware, loggerMiddleware));
}

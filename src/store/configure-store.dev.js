// Creates the store
// -- combines core reducers with local reducers
import {
  createStore,
  applyMiddleware,
  compose }               from 'redux';
import thunk              from 'redux-thunk';
import createLogger       from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import DevTools           from '../components/containers/devtools';
import rootReducer from '../reducers';


const loggerMiddleware          = createLogger();
const reduxRouterMiddleware     = syncHistory(browserHistory);

const enhancer = compose(
    // Ensure that loggerMiddleware is ALWAYS last!!!
    applyMiddleware(thunk, reduxRouterMiddleware, loggerMiddleware),
    DevTools.instrument()
);

export default (initialState) => {
  const store = createStore(rootReducer, {}, enhancer);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}

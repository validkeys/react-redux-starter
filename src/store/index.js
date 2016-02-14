// Creates the store
// -- combines core reducers with local reducers
import {
  createStore,
  bindActionCreators,
  applyMiddleware,
  compose }               from 'redux';
import thunk              from 'redux-thunk';
import createLogger       from 'redux-logger';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import DevTools           from '../containers/devtools';
import rootReducer from '../reducers';


const loggerMiddleware          = createLogger();
const reduxRouterMiddleware     = syncHistory(browserHistory);

const enhancer = compose(
    // Ensure that loggerMiddleware is ALWAYS last!!!
    applyMiddleware(thunk, reduxRouterMiddleware, loggerMiddleware),
    DevTools.instrument()
);

const configureStore = (initialState) => {
  return createStore(rootReducer, {}, enhancer);
}

const store = configureStore({});

reduxRouterMiddleware.listenForReplays(store);

export { store };

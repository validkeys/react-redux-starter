import {
  createStore,
  bindActionCreators,
  applyMiddleware,
  compose }               from 'redux';
import DevTools           from '../../components/domain/_debug_/devtools';

// ROOT REDUCER
import { rootReducer } from '../modules';

// MIDDLEWARES
import loggerMiddleware       from '../redux-middleware/logger';
import thunk                  from '../redux-middleware/thunk';
import reduxRouterMiddleware  from '../redux-middleware/redux-router';


const enhancer = compose(
    // Ensure that loggerMiddleware is ALWAYS last!!!
    applyMiddleware(thunk, reduxRouterMiddleware, loggerMiddleware),
    DevTools.instrument()
);

const configureStore = (initialState) => {
  let store = createStore(rootReducer, {}, enhancer);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}

export default configureStore;

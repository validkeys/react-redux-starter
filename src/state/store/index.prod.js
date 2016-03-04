import {
  createStore,
  bindActionCreators,
  applyMiddleware,
  compose }               from 'redux';

// ROOT REDUCER
import { rootReducer } from '../modules';

// MIDDLEWARES
import thunk                  from '../redux-middleware/thunk';
import reduxRouterMiddleware  from '../redux-middleware/redux-router';


const enhancer = compose(
  applyMiddleware(thunk, reduxRouterMiddleware)
);

const configureStore = (initialState) => {
  let store = createStore(rootReducer, {}, enhancer);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}

export default configureStore;

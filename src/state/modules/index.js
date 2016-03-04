import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

// Modules
import * as APP from './app';

// Root Reducer
const rootReducer = combineReducers({
  [APP.constants.STATE_KEY]: APP.reducer,
  routing:  routeReducer
})

export { rootReducer };

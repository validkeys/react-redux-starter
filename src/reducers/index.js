import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import * as types from '../actions/action-types';

const initialState = {};

export const data = (state = initialState, { type, payload }) => {
  return state;
};

const rootReducer = combineReducers({
  data,
  routing: routeReducer
})

export default rootReducer;

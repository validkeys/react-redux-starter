import { createReducer } from '../../utils';
import {
  APP_LOAD_START,
  APP_LOAD_FINISH
} from './constants';

const initialState = {
  loading: false,
  loaded:  false
};

export default createReducer( initialState, {
  [APP_LOAD_START]( state, { type, payload }) {
    return Object.assign({}, state, { loading: true });
  },

  [APP_LOAD_FINISH](state, { type, payload }) {
    return Object.assign({}, state, { loading: false, loaded: true });
  }
})

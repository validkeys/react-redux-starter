import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';

if (!constants.hasOwnProperty("STATE_KEY")) {
  throw new Error("Your constants must have a state key");
}

export {
  constants,
  reducer,
  actions,
  selectors
};

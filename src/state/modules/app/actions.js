import {
  APP_LOAD_START,
  APP_LOAD_FINISH
} from './constants';


export const appLoading = () => {
  return { type: APP_LOAD_START };
}

export const appLoaded = () => {
  return { type: APP_LOAD_FINISH };
}

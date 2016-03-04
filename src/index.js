// CORE IMPORTS
import React              from 'react';
import ReactDOM           from 'react-dom';
import Root from './components/domain/app/root';
import styles from './styles/app.styl';
// --------------------------------------------

import { appLoading } from './state/modules/session';


import configureStore from './state/store';
const store = configureStore({});

store.dispatch(appLoading());

ReactDOM.render(<Root store={store} />, document.getElementById("myapp")
);

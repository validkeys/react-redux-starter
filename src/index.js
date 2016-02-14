// CORE IMPORTS
import React              from 'react';
import ReactDOM           from 'react-dom';
import { setConfig }      from './actions';
import configureStore     from './store/configure-store';
import { Provider }       from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
// --------------------------------------------

const store = configureStore();

import Root  from './containers/root';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root} />
    </Router>
  </Provider>, document.getElementById("myapp")
);

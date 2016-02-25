// CORE IMPORTS
import React              from 'react';
import ReactDOM           from 'react-dom';
import { setConfig }      from './actions';
import configureStore     from './store/configure-store';
import { Provider }       from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// --------------------------------------------

const store = configureStore();

import Root  from './components/containers/root';
import Example from './components/example';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Root} >
          <IndexRoute component={Example} />
        </Route>
      </Router>
    </div>
  </Provider>, document.getElementById("myapp")
);

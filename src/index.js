// CORE IMPORTS
import React              from 'react';
import ReactDOM           from 'react-dom';
import { setConfig }      from './actions';
import { store }          from './store';
import { Provider }       from 'react-redux';
import { defaults }       from 'lodash';
import { Router, Route, browserHistory } from 'react-router';
// import routes from './routes';
// --------------------------------------------

import ExampleComponent  from './components/example';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}> 
      <Route path="/" component={ExampleComponent} />
    </Router>
  </Provider>, document.getElementById("myapp")
);
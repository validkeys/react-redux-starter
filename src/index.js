// CORE IMPORTS
import React              from 'react';
import ReactDOM           from 'react-dom';
import { setConfig }      from './actions';
import { store }          from './store';
import { Provider }       from 'react-redux';
import { defaults }       from 'lodash';
// --------------------------------------------


// 
// LOCAL EMBED COMPONENT
// 
import ExampleComponent  from './components/example';

ReactDOM.render(
  <Provider store={store}>
    <ExampleComponent />
  </Provider>, document.getElementById("myapp")
);
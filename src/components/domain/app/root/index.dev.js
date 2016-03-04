import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import DevTools from 'components/domain/_debug_/devtools';

import routes from '../../../../routes';

export default ( props ) => {

  const { store } = props;
  const routesWithStore = routes(store);

  return (
    <Provider store={store}>
      <div>
        <Router history={browserHistory} routes={routesWithStore} />
        <DevTools />
      </div>
    </Provider>
  )
}

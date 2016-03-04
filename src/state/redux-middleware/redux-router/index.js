import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middleware = syncHistory(browserHistory);

export default middleware;

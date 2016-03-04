import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../../../state/modules/app';
import {
  appSelector
} from '../../../../state/modules/app/selectors';

const ExampleComponent = (props) => {
  return (
    <div>
      Example Component
      App Is Loaded: {(props.app.loaded) ? "YES" : "NO"}
      <button onClick={() => props.actions.appLoaded()}>Mark App As Loaded</button>
    </div>
  )
};


export default connect(
  (state) => ({
    app: appSelector(state)
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ExampleComponent)

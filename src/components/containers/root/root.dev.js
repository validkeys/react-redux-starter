import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import CSSModules from 'react-css-modules';
import DevTools from '../devtools';

const Component = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <DevTools />
      </div>
    );
  }
});

export default connect(state => ({
    state: state
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  }), null,
  { withRef: false }
)(Component);

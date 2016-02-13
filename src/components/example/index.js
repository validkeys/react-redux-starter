import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import CSSModules from 'react-css-modules';

import styles from './styles.styl';


// All assets loaded can be reached at:
// --> this.props.state.assets

// All collections loaded can be reached at:
// --> this.props.state.collections

// View the example component in the example
// folder for more default state given to you

// Checkout core/reducers/index.js to get a sense of the
// default state structure. (see: const initialState = {})

const Component = React.createClass({
  render() {
    return (
      <div styleName='example-container' className="my-example-container">
        "HELLO"
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
)(CSSModules(Component, styles));
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import { connect } from 'react-redux';
import {
  appSelector
} from '../../../state/modules/app/selectors';

import ExampleComponent from '../../../components/domain/app/example';

const AppComponent = ( props ) => {
  const styleName = (props.app.loaded) ? "root-loaded" : "root";
  return (
    <div styleName={styleName}>
      Application Route
      <ExampleComponent />
      {props.children}
    </div>
  );
};

export default connect(
  (state) => ({
    app: appSelector(state)
  }), null
)(CSSModules(AppComponent, styles))

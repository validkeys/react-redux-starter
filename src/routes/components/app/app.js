import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';

const AppComponent = ( props ) => (
  <div styleName="root">
    Application Route
    {props.children}
  </div>
)

export default CSSModules(AppComponent, styles);

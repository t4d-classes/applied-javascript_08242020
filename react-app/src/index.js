import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

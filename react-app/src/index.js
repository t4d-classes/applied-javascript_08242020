import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'blue' },
  { id: 2, name: 'green' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'purple' },
];

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

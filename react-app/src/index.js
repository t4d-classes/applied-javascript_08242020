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

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion', year: 2019, color: 'white', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 120000 },
];

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

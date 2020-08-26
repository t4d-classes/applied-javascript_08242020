import React from 'react';

import { CarViewRow } from './CarViewRow';

export const CarTable = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car => <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );

}
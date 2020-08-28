import React from 'react';

import { useForm } from '../hooks/useForm';

export const CarEditRow = (props) => {

  const [
    carForm,
    change
  ] = useForm({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price,
  });

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  };

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" id="edit-make-input" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" id="edit-model-input" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="text" id="edit-year-input" name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" id="edit-color-input" name="color" value={carForm.color} onChange={change} /></td>
      <td><input type="text" id="edit-price-input" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={props.onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

};
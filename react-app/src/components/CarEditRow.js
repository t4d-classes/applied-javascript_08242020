import React, { useState } from 'react';

export const CarEditRow = (props) => {

  const [
    carForm,
    setCarForm
  ] = useState({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price,
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  };

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" id="make-input" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" id="model-input" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="text" id="year-input" name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" id="color-input" name="color" value={carForm.color} onChange={change} /></td>
      <td><input type="text" id="price-input" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={props.onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

};
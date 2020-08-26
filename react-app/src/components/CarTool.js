import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

const nanToValue = (value) => {
  if (isNaN(value)){
    return '';
  } else {
    return value;
  }
};

export const CarTool = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });
  };

  console.log(carForm);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} />
      <form>
        <div>
          <label>Make:</label>
          <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" id="year-input" name="year" value={nanToValue(carForm.year)} onChange={change} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" id="color-input" name="color" value={carForm.color} onChange={change} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" id="price-input" name="price" value={nanToValue(carForm.price)} onChange={change} />
        </div>
      </form>
    </>
  );

};
import React from 'react';

import { useForm } from '../hooks/useForm';

const nanToValue = (value) => {
  if (isNaN(value)){
    return '';
  } else {
    return value;
  }
};

export const CarForm = ({
  buttonText, onSubmitCar,
}) => {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const submitCar = () => {
    onSubmitCar(carForm);
    resetCarForm();
  };

  return (
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
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );

};
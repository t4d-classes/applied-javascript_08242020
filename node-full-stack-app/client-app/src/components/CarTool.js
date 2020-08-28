import React from 'react';

import { useCarStore } from '../hooks/useCarStore';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const {
    cars, editCarId, appendCar, replaceCar,
    removeCar, editCar, cancelCar,
  } = useCarStore(props.cars.concat());

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={removeCar}
        onSaveCar={replaceCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
    </>
  );

};
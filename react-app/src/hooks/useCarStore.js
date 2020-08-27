import { useState } from 'react';
import { useList } from './useList';

export const useCarStore = (initialCars) => {

  const [ cars, appendCar, replaceCar, removeCar ] = useList(initialCars);
  const [ editCarId, setEditCarId ] = useState(-1);

  return {
    cars,
    editCarId,
    appendCar: (car) => {
      appendCar(car);
      setEditCarId(-1);
    },
    replaceCar: (car) => {
      replaceCar(car);
      setEditCarId(-1);
    },
    removeCar: (carId) => {
      removeCar(carId);
      setEditCarId(-1);
    },
    editCar: setEditCarId,
    cancelCar: () => setEditCarId(-1),
  };

};

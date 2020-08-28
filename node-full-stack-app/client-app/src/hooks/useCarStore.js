import { useState, useEffect } from 'react';

import { CarsData } from '../services/CarsData';

const carsData = new CarsData('/api');

export const useCarStore = () => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = () => {
    return carsData.allCars().then(cars => setCars(cars));
  };

  useEffect(() => {
    refreshCars();
  }, []);

  return {
    cars,
    editCarId,
    refreshCars,
    appendCar: async (car) => {
      await carsData.appendCar(car);
      await refreshCars();
      setEditCarId(-1);
    },
    replaceCar: (car) => {
      return carsData.replaceCar(car)
        .then(() => refreshCars())
        .then(() => setEditCarId(-1));
    },
    removeCar: (carId) => {
      return carsData.removeCar(carId)
        .then(() => refreshCars())
        .then(() => setEditCarId(-1));
    },
    editCar: setEditCarId,
    cancelCar: () => setEditCarId(-1),
  };

};

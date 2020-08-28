import { useState, useEffect, useCallback } from 'react';

import { CarsData } from '../services/CarsData';

const carsData = new CarsData('/api');

export const useCarStore = () => {

  const [ cars, setCars ] = useState([]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const refreshCars = useCallback(() => {
    return carsData.allCars().then(cars => setCars(cars));
  }, []);

  useEffect(() => {
    refreshCars();
  }, []);

  return {
    cars,
    editCarId,
    refreshCars,
    appendCar: useCallback(async (car) => {
      await carsData.appendCar(car);
      await refreshCars();
      setEditCarId(-1);
    }, []),
    replaceCar: useCallback((car) => {
      return carsData.replaceCar(car)
        .then(() => refreshCars())
        .then(() => setEditCarId(-1));
    }, []),
    removeCar: useCallback((carId) => {
      return carsData.removeCar(carId)
        .then(() => refreshCars())
        .then(() => setEditCarId(-1));
    }, []),
    editCar: setEditCarId,
    cancelCar: useCallback(() => setEditCarId(-1), []),
  };

};

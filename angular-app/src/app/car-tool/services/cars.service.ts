import { Injectable } from '@angular/core';

import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'white', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
  ];

  constructor() { }

  public all(): Car[] {
    return this.cars.concat();
  }

  public addCar(car: Car): CarsService {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    return this;
  }

  public deleteCar(carId: number): CarsService {
    this.cars = this.cars.filter(c => c.id !== carId);
    return this;
  }
}

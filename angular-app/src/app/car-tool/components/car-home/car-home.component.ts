import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/Car';

import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  // state, value can be changed
  headerText = 'Car Tool';

  // state, value can be changed
  cars: Car[] = [];

  // state, value can be changed
  editCarId = -1;

  constructor(
    private carsSvc: CarsService,
  ) { }

  ngOnInit(): void {
    this.cars = this.carsSvc.all();
  }

  editCar(carId: number): void {
    this.editCarId = carId;
  }

  cancelCar(): void {
    this.editCarId = -1;
  }

  addCar(car: Car): void {
    this.editCarId = -1;
    this.cars = this.carsSvc.addCar(car).all();
  }

  updateCar(car: Car): void {
    this.editCarId = -1;
    this.cars = this.carsSvc.updateCar(car).all();
  }

  deleteCar(carId: number): void {
    this.editCarId = -1;
    this.cars = this.carsSvc.deleteCar(carId).all();
  }

}

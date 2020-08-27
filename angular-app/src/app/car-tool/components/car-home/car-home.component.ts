import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  // state, value can be changed
  carColors = ['red', 'green', 'blue'];

  // state, value can be changed
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carsSvc: CarsService,
  ) { }

  ngOnInit(): void {

    this.cars = this.carsSvc.all();

    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  editCar(carId: number): void {
    this.editCarId = carId;
  }

  addCar(): void {
    this.cars = this.carsSvc.addCar(this.carForm.value).all();
  }

  deleteCar(carId: number): void {
    this.cars = this.carsSvc.deleteCar(carId).all();
  }

}

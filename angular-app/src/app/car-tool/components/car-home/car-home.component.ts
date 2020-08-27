import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  // state, value can be changed
  headerText = 'Car Tool';

  // state, value can be changed
  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'white', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
  ];

  // state, value can be changed
  editCarId = -1;

  // state, value can be changed
  carColors = ['red', 'green', 'blue'];

  // state, value can be changed
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
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
    this.cars = this.cars.concat({
      ...this.carForm.value,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  }

  deleteCar(carId: number): void {
    this.cars = this.cars.filter(c => c.id !== carId);
  }

}



export class CarsData {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async allCars() {
    const res = await fetch(`${this.baseUrl}/cars`);
    const cars = await res.json();
    return cars.map(car => {
      car.id = car._id;
      delete car._id;
      return car;
    });
  }

  async appendCar(car) {
    const res = await fetch(`${this.baseUrl}/cars`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    const appendedCar = await res.json();
    return appendedCar;
  }

  async replaceCar(car) {
    await fetch(`${this.baseUrl}/cars/${encodeURIComponent(car.id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
  }

  async removeCar(carId) {
    await fetch(`${this.baseUrl}/cars/${encodeURIComponent(carId)}`, {
      method: 'DELETE',
    });
  }

}
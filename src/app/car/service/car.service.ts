import { Injectable } from '@angular/core';

import { Car } from 'src/app/shared/models/car.model';

const LS_KEY = "cars";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  listAll(): Car[] {
    const cars = localStorage[LS_KEY]
    return cars ? JSON.parse(cars) : [];
  }

  insertCar(car: Car): void {
    const cars = this.listAll();
    car.id = new Date().getTime();
    cars.push(car);
    localStorage[LS_KEY] = JSON.stringify(cars);
  }

  findById(id: number): Car | undefined {
    const cars: Car[] = this.listAll();
    return cars.find(car => car.id === id);
  }

  update(car: Car) : void {
    const cars: Car[] = this.listAll();
    cars.forEach(
      (obj, index, objs) => {
        if (car.id === obj.id) {
          objs[index] = car;
        }
      }
    );
    localStorage[LS_KEY] = JSON.stringify(cars);
  }

  delete(id: number) : void {
    let cars: Car[] = this.listAll();
    cars = cars.filter( car => car.id !== id );
    localStorage[LS_KEY] = JSON.stringify(cars);
  }
}

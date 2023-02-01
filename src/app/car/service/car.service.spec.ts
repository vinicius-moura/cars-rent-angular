import { TestBed } from '@angular/core/testing';
import { Car } from 'src/app/shared/models/car.model';

import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;
  const localStorageMock = JSON.stringify([1,'name','description',500.52,true,'FRC-3548','red', new Date()]);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cars when there cars', () => {
    window.localStorage.setItem('cars', localStorageMock);

    var result = service.listAll();

    expect(result).toEqual(JSON.parse(localStorageMock));
  });

  it('should return a empty object when there no cars', () => {
    var result = service.listAll();
    expect(result).toEqual([]);
  });

  it('should insert a new car on list', () => {
    const date = new Date();
    const car = new Car(1,'name','description',500.52,true,'FRC-3548','BMW','red', date);

    var result = service.insertCar(car);

    expect(window.localStorage.length).toBe(1);
  });

  it('should not find a car in a empty list', () => {
    var result = service.findById(1);

    expect(result).toBe(undefined);
  });

  it('should find a car by ID', () => {
    const date = new Date();
    const car = new Car(1,'name','description',500.52,true,'FRC-3548','red', 'BMW', date);
    
    service.insertCar(car);
    var carsObject = JSON.parse(window.localStorage['cars']);
    var result = service.findById(carsObject[0].id);

    expect(result?.id).toBe(carsObject[0].id);
  });

  it('should update a car', () => {
    const date = new Date();
    const car = new Car(1,'name','description',500.52,true,'FRC-3548','red', 'BMW', date);
    
    service.insertCar(car);
    var carsObject = JSON.parse(window.localStorage['cars']);
    const carUpdate = new Car(carsObject[0].id,'updated','description',0,false,'FRC-XXXX','BMW','blue', date);
    var result = service.update(carUpdate);

    var objectUpdated = JSON.parse(window.localStorage['cars'])
    expect(objectUpdated[0].name).toBe('updated');
  });

  it('should delete a car', () => {
    const date = new Date();
    const car = new Car(1,'name','description',500.52,true,'FRC-3548','BMW','red', date);

    service.insertCar(car);
    var carsObject = JSON.parse(window.localStorage['cars']);
    service.delete(carsObject[0].id);

    var objectDeleted = JSON.parse(window.localStorage['cars'])
    expect(objectDeleted.length).toBe(0);
  });
});

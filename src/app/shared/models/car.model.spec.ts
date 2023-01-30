import { Car } from './car.model';

describe('Car', () => {

  let car: Car;
  var date = new Date("2022-01-01");

  beforeEach(() => {
    car = new Car(1,'name','description',500.52,true,'FRC-3548','red',date);
  });

  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });

   it('should have default values', () => {
    expect(car.id).toEqual(1);
    expect(car.name).toEqual('name');
    expect(car.description).toEqual('description');
    expect(car.dailyRate).toEqual(500.52);
    expect(car.avaliable).toEqual(true);
    expect(car.licensePlate).toEqual('FRC-3548');
    expect(car.color).toEqual('red');
    expect(car.createdAt).toEqual(date);
  });
});
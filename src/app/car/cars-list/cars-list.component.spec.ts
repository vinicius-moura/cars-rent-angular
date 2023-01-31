import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponent } from './cars-list.component';
import { CarService } from '../service/car.service';
import { Car } from 'src/app/shared/models/car.model';


describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;
  let carService: CarService;
  const car = new Car(1,'name','description',500.52,true,'FRC-3548','red', new Date());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    carService = TestBed.get(CarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll on ngOnInit', () => {
    spyOn(component, 'listAll');
    component.ngOnInit();
    expect(component.listAll).toHaveBeenCalled();
  });

  it('should call CarService on listAll', () => {
    spyOn(carService, 'listAll').and.returnValue([]);
    component.listAll();
    expect(carService.listAll).toHaveBeenCalled();
  });

  it('should not call CarService delete when confirm returns false', () => {
    spyOn(carService, 'delete');
    spyOn(window, 'confirm').and.returnValue(false);
    const event = { preventDefault: () => {} }

    component.delete(event, car);

    expect(carService.delete).not.toHaveBeenCalled();
  });

  it('should call CarService delete when confirm returns true', () => {
    spyOn(carService, 'delete');
    spyOn(window, 'confirm').and.returnValue(true);
    const event = { preventDefault: () => {} }

    component.delete(event, car);

    expect(carService.delete).toHaveBeenCalled();
  });
});

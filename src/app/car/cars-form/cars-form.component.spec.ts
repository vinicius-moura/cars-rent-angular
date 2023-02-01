import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, FormGroup  } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CarsFormComponent } from './cars-form.component';
import { CarService } from '../service/car.service';
import { Car } from 'src/app/shared/models/car.model';

describe('CarsFormComponent', () => {
  let component: CarsFormComponent;
  let fixture: ComponentFixture<CarsFormComponent>;
  let carService: CarService;
  let activatedRoute: ActivatedRoute;
  const car = new Car(1,'name','description',500.52,true,'FRC-3548','red', new Date());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ CarsFormComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {}
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsFormComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    carService = TestBed.get(CarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call findId when theres no id on route', () => {
    spyOn(component, 'findId');
    component.ngOnInit();
    expect(component.findId).not.toHaveBeenCalled();
  });

  it('should call findId when theres a id on route', () => {
    activatedRoute.snapshot.params['id'] = 1;
    spyOn(component, 'findId');
    component.ngOnInit();
    expect(component.findId).toHaveBeenCalled();
  });

  it('should not call carService.insertCar when the form is invalid', () => {
    spyOn(carService, 'insertCar');
    component.insertCar();
    expect(carService.insertCar).not.toHaveBeenCalled();
  });

  it('should return error when does not find id', () => {
    let error = new Error("Car not found: id = 2");
    expect(() => component.findId(2)).toThrow(error);
  });

  it('should not return error when does find id', () => {
    spyOn(carService, 'findById').and.returnValue(car);;
    expect(() => component.findId(2)).not.toThrow();
  });

  it('should not call carService.update when the form is invalid', () => {
    spyOn(carService, 'update');
    component.update();
    expect(carService.update).not.toHaveBeenCalled();
  });

});

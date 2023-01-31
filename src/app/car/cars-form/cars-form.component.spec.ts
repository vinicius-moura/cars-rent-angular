import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';

import { CarsFormComponent } from './cars-form.component';

describe('CarsFormComponent', () => {
  let component: CarsFormComponent;
  let fixture: ComponentFixture<CarsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ CarsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

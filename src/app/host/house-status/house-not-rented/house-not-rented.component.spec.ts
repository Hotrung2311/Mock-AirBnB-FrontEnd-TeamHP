import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseNotRentedComponent } from './house-not-rented.component';

describe('HouseNotRentedComponent', () => {
  let component: HouseNotRentedComponent;
  let fixture: ComponentFixture<HouseNotRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseNotRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseNotRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

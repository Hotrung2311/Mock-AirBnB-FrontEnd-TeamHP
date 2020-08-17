import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentedComponent } from './house-rented.component';

describe('HouseRentedComponent', () => {
  let component: HouseRentedComponent;
  let fixture: ComponentFixture<HouseRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

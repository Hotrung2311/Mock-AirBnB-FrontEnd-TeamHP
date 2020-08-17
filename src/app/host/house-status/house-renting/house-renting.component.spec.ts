import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentingComponent } from './house-renting.component';

describe('HouseRentingComponent', () => {
  let component: HouseRentingComponent;
  let fixture: ComponentFixture<HouseRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNotRentedComponent } from './products-not-rented.component';

describe('ProductsNotRentedComponent', () => {
  let component: ProductsNotRentedComponent;
  let fixture: ComponentFixture<ProductsNotRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNotRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNotRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

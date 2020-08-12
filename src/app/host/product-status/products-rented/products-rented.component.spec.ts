import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRentedComponent } from './products-rented.component';

describe('ProductsRentedComponent', () => {
  let component: ProductsRentedComponent;
  let fixture: ComponentFixture<ProductsRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

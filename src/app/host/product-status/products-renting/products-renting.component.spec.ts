import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRentingComponent } from './products-renting.component';

describe('ProductsRentingComponent', () => {
  let component: ProductsRentingComponent;
  let fixture: ComponentFixture<ProductsRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

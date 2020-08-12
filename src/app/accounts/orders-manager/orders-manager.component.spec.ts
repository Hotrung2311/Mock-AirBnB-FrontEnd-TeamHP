import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManagerComponent } from './orders-manager.component';

describe('OrdersManagerComponent', () => {
  let component: OrdersManagerComponent;
  let fixture: ComponentFixture<OrdersManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

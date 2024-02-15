import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrdersComponent } from './place-orders.component';

describe('PlaceOrdersComponent', () => {
  let component: PlaceOrdersComponent;
  let fixture: ComponentFixture<PlaceOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

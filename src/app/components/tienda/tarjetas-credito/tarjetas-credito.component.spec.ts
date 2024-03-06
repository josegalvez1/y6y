import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasCreditoComponent } from './tarjetas-credito.component';

describe('TarjetasCreditoComponent', () => {
  let component: TarjetasCreditoComponent;
  let fixture: ComponentFixture<TarjetasCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetasCreditoComponent]
    });
    fixture = TestBed.createComponent(TarjetasCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

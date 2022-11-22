import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTipoInmuebleComponent } from './consultar-tipo-inmueble.component';

describe('ConsultarTipoInmuebleComponent', () => {
  let component: ConsultarTipoInmuebleComponent;
  let fixture: ComponentFixture<ConsultarTipoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTipoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarTipoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

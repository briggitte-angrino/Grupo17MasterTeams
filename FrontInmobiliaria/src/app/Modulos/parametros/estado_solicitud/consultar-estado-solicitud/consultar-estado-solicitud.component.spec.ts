import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEstadoSolicitudComponent } from './consultar-estado-solicitud.component';

describe('ConsultarEstadoSolicitudComponent', () => {
  let component: ConsultarEstadoSolicitudComponent;
  let fixture: ComponentFixture<ConsultarEstadoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEstadoSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDepartamentoComponent } from './consultar-departamento.component';

describe('ConsultarDepartamentoComponent', () => {
  let component: ConsultarDepartamentoComponent;
  let fixture: ComponentFixture<ConsultarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

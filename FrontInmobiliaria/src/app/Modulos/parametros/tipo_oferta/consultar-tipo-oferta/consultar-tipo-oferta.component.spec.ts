import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTipoOfertaComponent } from './consultar-tipo-oferta.component';

describe('ConsultarTipoOfertaComponent', () => {
  let component: ConsultarTipoOfertaComponent;
  let fixture: ComponentFixture<ConsultarTipoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTipoOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarTipoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

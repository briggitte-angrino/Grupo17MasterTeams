import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoOfertaComponent } from './crear-tipo-oferta.component';

describe('CrearTipoOfertaComponent', () => {
  let component: CrearTipoOfertaComponent;
  let fixture: ComponentFixture<CrearTipoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTipoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

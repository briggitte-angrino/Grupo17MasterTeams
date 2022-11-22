import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoOfertaComponent } from './editar-tipo-oferta.component';

describe('EditarTipoOfertaComponent', () => {
  let component: EditarTipoOfertaComponent;
  let fixture: ComponentFixture<EditarTipoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoOfertaComponent } from './eliminar-tipo-oferta.component';

describe('EliminarTipoOfertaComponent', () => {
  let component: EliminarTipoOfertaComponent;
  let fixture: ComponentFixture<EliminarTipoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

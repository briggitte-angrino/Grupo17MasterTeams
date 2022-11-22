import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarInmueblesComponent } from './eliminar-inmuebles.component';

describe('EliminarInmueblesComponent', () => {
  let component: EliminarInmueblesComponent;
  let fixture: ComponentFixture<EliminarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

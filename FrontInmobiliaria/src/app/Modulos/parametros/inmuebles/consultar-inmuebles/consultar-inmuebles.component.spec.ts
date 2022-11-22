import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInmueblesComponent } from './consultar-inmuebles.component';

describe('ConsultarInmueblesComponent', () => {
  let component: ConsultarInmueblesComponent;
  let fixture: ComponentFixture<ConsultarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPersonaComponent } from './consultar-persona.component';

describe('ConsultarPersonaComponent', () => {
  let component: ConsultarPersonaComponent;
  let fixture: ComponentFixture<ConsultarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRolesComponent } from './consultar-roles.component';

describe('ConsultarRolesComponent', () => {
  let component: ConsultarRolesComponent;
  let fixture: ComponentFixture<ConsultarRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

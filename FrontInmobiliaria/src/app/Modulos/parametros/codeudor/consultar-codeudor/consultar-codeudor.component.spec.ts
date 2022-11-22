import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCodeudorComponent } from './consultar-codeudor.component';

describe('ConsultarCodeudorComponent', () => {
  let component: ConsultarCodeudorComponent;
  let fixture: ComponentFixture<ConsultarCodeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCodeudorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCodeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

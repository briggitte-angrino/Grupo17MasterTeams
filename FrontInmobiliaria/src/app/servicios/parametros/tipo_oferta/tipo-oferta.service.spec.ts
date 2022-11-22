import { TestBed } from '@angular/core/testing';

import { TipoOfertaService } from './tipo-oferta.service';

describe('TipoOfertaService', () => {
  let service: TipoOfertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoOfertaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

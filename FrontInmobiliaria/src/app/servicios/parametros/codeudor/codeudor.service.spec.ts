import { TestBed } from '@angular/core/testing';

import { CodeudorService } from './codeudor.service';

describe('CodeudorService', () => {
  let service: CodeudorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeudorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

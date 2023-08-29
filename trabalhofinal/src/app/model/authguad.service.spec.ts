import { TestBed } from '@angular/core/testing';

import { AuthguadService } from './authguad.service';

describe('AuthguadService', () => {
  let service: AuthguadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

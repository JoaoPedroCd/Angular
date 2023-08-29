import { TestBed } from '@angular/core/testing';

import { ProdutoServiceService } from './produto.service';

describe('ProdutoService', () => {
  let service: ProdutoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

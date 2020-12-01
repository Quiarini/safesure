import { TestBed } from '@angular/core/testing';

import { ContatoSegurancaService } from './contato-seguranca.service';

describe('ContatoSegurancaService', () => {
  let service: ContatoSegurancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoSegurancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

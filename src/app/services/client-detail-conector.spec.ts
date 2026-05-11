import { TestBed } from '@angular/core/testing';

import { ClientDetailConector } from './client-detail-conector';

describe('ClientDetailConector', () => {
  let service: ClientDetailConector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDetailConector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

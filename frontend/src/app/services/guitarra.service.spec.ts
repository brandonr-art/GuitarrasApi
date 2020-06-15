import { TestBed } from '@angular/core/testing';

import { GuitarraService } from './guitarra.service';

describe('GuitarraService', () => {
  let service: GuitarraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

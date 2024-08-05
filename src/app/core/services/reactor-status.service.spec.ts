import { TestBed } from '@angular/core/testing';

import { ReactorStatusService } from './reactor-status.service';

describe('ReactorStatusService', () => {
  let service: ReactorStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactorStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

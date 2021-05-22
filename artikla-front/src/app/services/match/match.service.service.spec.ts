import { TestBed } from '@angular/core/testing';

import { Match.ServiceService } from './match.service.service';

describe('Match.ServiceService', () => {
  let service: Match.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Match.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

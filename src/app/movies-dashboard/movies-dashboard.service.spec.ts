import { TestBed } from '@angular/core/testing';

import { MoviesDashboardService } from './movies-dashboard.service';

describe('MoviesDashboardService', () => {
  let service: MoviesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

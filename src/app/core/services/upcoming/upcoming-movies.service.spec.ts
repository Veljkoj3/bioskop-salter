import { TestBed } from '@angular/core/testing';

import { UpcomingMoviesService } from './upcoming-movies.service';

describe('UpcomingMoviesService', () => {
  let service: UpcomingMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RecommendationListService } from './recommendation-list.service';

describe('RecommendationListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationListService = TestBed.get(RecommendationListService);
    expect(service).toBeTruthy();
  });
});

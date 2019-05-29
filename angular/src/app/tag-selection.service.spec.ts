import { TestBed } from '@angular/core/testing';

import { TagSelectionService } from './tag-selection.service';

describe('TagSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagSelectionService = TestBed.get(TagSelectionService);
    expect(service).toBeTruthy();
  });
});

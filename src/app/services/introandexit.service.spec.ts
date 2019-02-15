import { TestBed } from '@angular/core/testing';

import { IntroandexitService } from './introandexit.service';

describe('IntroandexitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntroandexitService = TestBed.get(IntroandexitService);
    expect(service).toBeTruthy();
  });
});

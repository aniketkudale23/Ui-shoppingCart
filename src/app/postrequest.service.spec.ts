import { TestBed, inject } from '@angular/core/testing';

import { PostrequestService } from './postrequest.service';

describe('PostrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostrequestService]
    });
  });

  it('should be created', inject([PostrequestService], (service: PostrequestService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { InviteesService } from './invitees.service';

describe('InviteesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InviteesService = TestBed.get(InviteesService);
    expect(service).toBeTruthy();
  });
});

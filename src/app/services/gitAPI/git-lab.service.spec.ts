import { TestBed } from '@angular/core/testing';
import {GitLabService} from '../gitAPI/git-lab.service'

describe('GitLabService', () => {
  let service: GitLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

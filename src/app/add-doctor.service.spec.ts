import { TestBed } from '@angular/core/testing';

import { AddDoctorService } from './add-doctor.service';

@Injectable({
  providedIn: 'root'
})

describe('AddDoctorService', () => {
  let service: AddDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { AddPetGuard } from './add-pet.guard';

describe('AddPetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPetGuard]
    });
  });

  it('should ...', inject([AddPetGuard], (guard: AddPetGuard) => {
    expect(guard).toBeTruthy();
  }));
});

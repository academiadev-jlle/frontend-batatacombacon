import { PetStatusPipe } from './pet-status.pipe';

describe('PetStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new PetStatusPipe();
    expect(pipe).toBeTruthy();
  });
});

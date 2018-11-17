import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetNotFoundComponent } from './pet-not-found.component';

describe('PetNotFoundComponent', () => {
  let component: PetNotFoundComponent;
  let fixture: ComponentFixture<PetNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

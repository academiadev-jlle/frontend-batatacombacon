import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFormsComponent } from './pet-forms.component';

describe('PetFormsComponent', () => {
  let component: PetFormsComponent;
  let fixture: ComponentFixture<PetFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

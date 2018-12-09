import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

describe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        SharedModule,
        BrowserModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: AuthService, useValue: AuthService },
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);

      comp = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
      comp.ngOnInit();
    });
  }));

  it('should create empty form', async(() => {
    expect(comp.loginUser.valid).toBeFalsy();
  }));

  it('should set submitted to true', async(() => {
    comp.submitClick(event);
    expect(comp.submitted).toBeTruthy();
  }));

  it('form should be invalid empty input', async(() => {
    comp.loginUser.controls['email'].setValue('');
    comp.loginUser.controls['senha'].setValue('');
    expect(comp.loginUser.controls['email'].valid).toBeFalsy();
    expect(comp.loginUser.controls['senha'].valid).toBeFalsy();
    expect(comp.loginUser.valid).toBeFalsy();
  }));
  it('form should be invalid email validator', async(() => {
    comp.loginUser.controls['email'].setValue('user');
    expect(comp.loginUser.controls['email'].valid).toBeFalsy();
    expect(comp.loginUser.valid).toBeFalsy();
  }));

  it('form shold be valid', async(() => {
    comp.loginUser.controls['email'].setValue('user@user.com');
    comp.loginUser.controls['senha'].setValue('123456');
    expect(comp.loginUser.valid).toBeTruthy();
  }));

  it('button click should submit form', async(() => {
    fixture.detectChanges();
    spyOn(comp, 'submitClick');
    el = fixture.debugElement.query(By.css('btn-entrar'));
  }));

});

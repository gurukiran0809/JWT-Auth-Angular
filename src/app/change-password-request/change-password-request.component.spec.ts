import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordRequestComponent } from './change-password-request.component';

describe('ChangePasswordRequestComponent', () => {
  let component: ChangePasswordRequestComponent;
  let fixture: ComponentFixture<ChangePasswordRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordRequestComponent]
    });
    fixture = TestBed.createComponent(ChangePasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

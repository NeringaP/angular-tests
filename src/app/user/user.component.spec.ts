import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [UserComponent]
  //   })
  //   .compileComponents();
    
  //   fixture = TestBed.createComponent(UserComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
    .compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

});

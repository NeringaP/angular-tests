import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [UserComponent]
  //   })
  //   .compileComponents();
  // });

  it('should create the app', () => {
    // fixture = TestBed.createComponent(UserComponent);
    // let app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should use user name from the service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display the user name if the user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(component.user.name);
  });

  it('shouldn\'t display the user name if the user is not logged in', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(component.user.name);
  });


});

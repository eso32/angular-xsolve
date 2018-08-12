import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserComponent } from './find-user.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../services/user/user.service';
import { of } from 'rxjs';

const userServiceStub = {
  getUserById(id) {
    const users = { id };
    return of(users);
  }
};

describe('FindUserComponent', () => {
  let component: FindUserComponent;
  let fixture: ComponentFixture<FindUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindUserComponent],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get values from subscription', () => {
    expect(component.user.id).toEqual(1);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagerAppComponent } from './usermanager-app.component';

describe('UsermanagerAppComponent', () => {
  let component: UsermanagerAppComponent;
  let fixture: ComponentFixture<UsermanagerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

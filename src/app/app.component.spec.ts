import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [
  { path: '', loadChildren: './usermanager/usermanager.module#UsermanagerModule'},
  { path: '**', redirectTo: ''}
]

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        RouterModule.forRoot(routes)
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'xsolve-test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('xsolve-test');
  }));
});

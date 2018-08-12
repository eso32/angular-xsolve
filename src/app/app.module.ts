import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule} from '@angular/material';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './usermanager/usermanager.module#UsermanagerModule'},
  { path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
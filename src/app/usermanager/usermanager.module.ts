import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FindUserComponent } from './components/find-user/find-user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UsermanagerAppComponent } from './usermanager-app.component';
import { UserService } from './services/user/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { RequestInterceptor } from './services/http.interceptor';
import { ErrorHandler } from './services/error.handler';
import { TodosService } from './services/todos/todos.service';

const routes: Routes = [
  {
    path: '', component: UsermanagerAppComponent,
    children: [
      { path: 'find-user', component: FindUserComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'user-list', component: UserListComponent },
      { path: '**', component: FindUserComponent },
    ]
  },
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    UserService,
    TodosService,
    ErrorHandler,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  declarations: [UsermanagerAppComponent, FindUserComponent, SidenavComponent, ToolbarComponent, UserListComponent, TodosComponent]
})
export class UsermanagerModule { }

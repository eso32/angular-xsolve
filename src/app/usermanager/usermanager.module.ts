import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UsermanagerAppComponent } from './usermanager-app.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { 
    path: '', component: UsermanagerAppComponent, 
    children: [
      { path: '', component: MainContentComponent}
    ]
  },
  {
    path: '**', redirectTo: ''
  }
]


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  declarations: [UsermanagerAppComponent, MainContentComponent, SidenavComponent, ToolbarComponent]
})
export class UsermanagerModule { }

import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatCardModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatCardModule
  ]
})
export class MaterialModule { }

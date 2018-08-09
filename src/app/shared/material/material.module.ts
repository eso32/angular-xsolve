import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, 
  MatToolbarModule, MatListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatFormFieldModule,
  MatInputModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class MaterialModule { }

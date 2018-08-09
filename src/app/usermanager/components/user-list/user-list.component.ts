import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  users: Observable<User[]>;
  displayedColumns = ['id', 'name', 'email', 'phone'];
  dataSource: MatTableDataSource<any>;

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data); 
      this.dataSource.paginator = this.paginator;    
      this.dataSource.sort = this.sort; 
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

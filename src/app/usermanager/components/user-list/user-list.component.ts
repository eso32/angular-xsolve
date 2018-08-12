import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  users: Observable<User[]>;
  displayedColumns = ['id', 'name', 'email', 'phone'];
  dataSource: MatTableDataSource<any>;
  itemsPerPage: number;
  userSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.itemsPerPage = Number(localStorage.getItem('numberOfElementsInTable'));

    this.users = this.userService.users;
    this.userService.loadAll();

    this.userSubscription = this.users.subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data); 
      this.dataSource.paginator = this.paginator;    
      this.dataSource.sort = this.sort; 
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }  
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setPageSize(PageEvent) {
    localStorage.setItem('numberOfElementsInTable', PageEvent.pageSize.toString());
  }

}

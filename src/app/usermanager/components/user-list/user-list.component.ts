import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewChild } from '@angular/core';
import { pick } from 'lodash';

import { User } from '../../models/User.model';
import { UserService } from '../../services/user/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.itemsPerPage = Number(localStorage.getItem('numberOfElementsInTable'));

    this.users = this.userService.users;
    this.userService.loadAll();

    this.userSubscription = this.users.subscribe(data => {
      const readyData = data.map(el => {
        return pick(el, ['id', 'name', 'email', 'phone']);
      });

      this.dataSource = new MatTableDataSource<any>(readyData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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

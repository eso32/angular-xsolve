import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private httpClient: HttpClient) {
    this.dataStore = { users: []};
    this._user = new BehaviorSubject<User[]>(this.dataStore.users);
  }

  get users(): Observable<User[]> {
    return this._user.asObservable();
  }

  loadAll() {
    const usersUrl = 'http://jsonplaceholder.typicode.com/users';

    return this.httpClient.get<User[]>(usersUrl)
    .subscribe(data => {
      this.dataStore.users = data;
      this._user.next(Object.assign({}, this.dataStore).users);
    }, error => {
      console.log('Failed when fetching users');
    })
  }

}

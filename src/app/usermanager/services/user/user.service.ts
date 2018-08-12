import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../../models/User.model';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../models/enums/URLS.enum';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };

  constructor(private httpClient: HttpClient) {
    this.dataStore = { users: [] };
    this._user = new BehaviorSubject<User[]>(this.dataStore.users);
  }

  get users(): Observable<User[]> {
    return this._user.asObservable();
  }

  loadAll(): Subscription {
    const usersUrl = URLS.PLACEHOLDER_USERS;
    return this.httpClient.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._user.next(Object.assign({}, this.dataStore).users);
      });
  }

  getUserById(id: number): Observable<User> {
    const userUrl = URLS.PLACEHOLDER_USERS + id.toString();

    return this.httpClient.get<User>(userUrl);
  }

}

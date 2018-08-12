import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import {filter} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserById(1);
  }

  getUserById(id: number) {
    if(!id) {
      this.user = undefined;
      return 
    }
    console.log(id);
    this.userSubscription = this.userService.getUserById(id).subscribe( (user: User) => {
      this.user = user;
    }, err => {
      this.user = undefined;
    })
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { MockMediaQueryList } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NgZone } from '@angular/core';

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px`);

  // users: Observable<User[]>;
  users: User[];

  constructor(zone: NgZone, private userService: UserService) {
    this.mediaMatcher.addListener(mql => zone.run(()=>this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.users = [
      {name: 'tomek'},
      {name: 'ola'}
    ]
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}

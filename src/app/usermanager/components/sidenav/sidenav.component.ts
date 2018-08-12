import { Component, OnInit } from '@angular/core';
import { MockMediaQueryList } from '@angular/flex-layout';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user/user.service';
import { MenuItem } from '../../models/MenuItem.model';
import { User } from '../../models/User.model';

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px`);
  public menu: MenuItem[];

  constructor(zone: NgZone, private userService: UserService) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
    this.menu = [
      {
        link: '/find-user',
        title: 'Find user'
      },
      {
        link: '/todos',
        title: 'Todos'
      },
      {
        link: '/user-list',
        title: 'Users list'
      }
    ];
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}

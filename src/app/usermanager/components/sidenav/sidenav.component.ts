import { Component, OnInit } from '@angular/core';
import { MockMediaQueryList } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NgZone } from '@angular/core';
import { menuItem } from '../../models/menuItem.model';

const SMALL_SCREEN_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_SCREEN_BREAKPOINT}px`);
  private menu: menuItem[];

  constructor(zone: NgZone, private userService: UserService) {
    this.mediaMatcher.addListener(mql => zone.run(()=>this.mediaMatcher = mql));
    this.menu = [
      {
        link: '/users',
        title: 'User'
      },
      {
        link: '/manage',
        title: 'Manage users'
      },
      {
        link: '/user-list',
        title: 'Users list'
      }
    ]
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}

import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UsersService} from '../services/users.service';
import {UserAttr} from '../user';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: UserAttr;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UsersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.fetchUserDetails();
    this.notificationService.show('This screen shows detail of the user selected on the previous screen.');
    this.notificationService.add('On changing firstName or lastName from the textboxes, it changes the name written below the picture.');
    this.notificationService.add('This is achieved using angular\'s two way binding feature');
  }

  fetchUserDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.fetchUser(id)
      .subscribe(user => this.user = user.data);
  }

}

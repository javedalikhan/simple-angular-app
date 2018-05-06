import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {UserAttr} from '../user';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserAttr[];
  constructor(private usersService: UsersService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.usersService.fetchUsers()
      .subscribe(users => this.users = users.data);
    this.notificationService.show('This screen is showing a list of users fetched using User Service.');
    this.notificationService.add('For integration, the API available at https://reqres.in/ is used.');
    this.notificationService.add('Angular directives have been used to iterate over the list.');
    this.notificationService.add('On click of any of the blue bar having the user details, it will take you to the next screen.');
  }
}

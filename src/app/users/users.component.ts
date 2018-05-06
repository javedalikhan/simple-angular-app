import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.usersService.fetchUsers()
      .subscribe(users => this.users = users);
  }
}

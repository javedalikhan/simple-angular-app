import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  fetchUserDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.fetchUser(id).subscribe(user => this.user = user);
  }

}

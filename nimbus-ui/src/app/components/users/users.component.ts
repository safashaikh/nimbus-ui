import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo: User[] = [];
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe( data => this.usersInfo = {...data})
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { catchError, map, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { JsonObjectExpressionStatement } from 'typescript';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersInfo: User[] = [];
  teststr: any;
  userService: UserService;
  num: number = 10;
  offset: number = 0;
  constructor(userService: UserService) {
    this.userService = userService;
    this.teststr = '';
   }

  ngOnInit(): void {
    console.log('Initialized');
    this.userService.getUsers(this.num, this.offset)
    .subscribe( data => {
      let users = data['data'];
      console.log(data)
      for (var user of users){
        var newuser = new User(user.ID, user.nameLast, user.nameFirst, user.username, user.email, user.addressID);
        this.usersInfo.push(newuser);
      }
    })
  }

  onNumChange(event: any) : void {
    this.num = event.target.value;
    this.usersInfo = [];
    this.userService.getUsers(this.num, this.offset)
      .subscribe( data => {
        let users = data['data'];
        for (var user of users){
          var newuser = new User(user.ID, user.nameLast, user.nameFirst, user.username, user.email, user.addressID);
          this.usersInfo.push(newuser);
        }
      })
    
  }

  onNext(event: any) : void {
    this.offset = +this.offset + this.num;
    this.usersInfo = [];
    this.userService.getUsers(this.num, this.offset)
      .subscribe( data => {
        let users = data['data'];
        for (var user of users){
          var newuser = new User(user.ID, user.nameLast, user.nameFirst, user.username, user.email, user.addressID);
          this.usersInfo.push(newuser);
        }
      })
  }

  onPrev(event: any) : void {
    this.offset = +this.offset - this.num;
    this.usersInfo = [];
    this.userService.getUsers(this.num, this.offset)
      .subscribe( data => {
        let users = data['data'];
        for (var user of users){
          var newuser = new User(user.ID, user.nameLast, user.nameFirst, user.username, user.email, user.addressID);
          this.usersInfo.push(newuser);
        }
      })
  }



}

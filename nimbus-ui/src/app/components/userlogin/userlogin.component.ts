import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  loginURL: string = "http://useraddressflask-env.eba-2thfz2gi.us-east-1.elasticbeanstalk.com/userlogin/google";

  constructor() { }

  ngOnInit(): void {
  }

}

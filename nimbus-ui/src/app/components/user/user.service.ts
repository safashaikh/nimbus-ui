import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address, User } from './user';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JsonObjectExpression } from 'typescript';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = "";
  }

  getUserServiceUrl(id: string): string {
    const theUrl = window.location.href;
    let result: string;

    if ((theUrl.includes('127.0.0.1')) || (theUrl.includes('localhost')))
    {
      result = 'http://127.0.0.1:5000/users/'+id;
    } else {
      result = 'http://eb2-env.eba-khxuypq3.us-east-1.elasticbeanstalk.com/users/'+id;
    }
    if (id!=''){
      result = 'http://127.0.0.1:5000/users/'+id;
    }else{
      result = 'http://127.0.0.1:5000/users';
    }
    return result;
  }
  

  getUser(userID: string): Observable<any> {
    let theUrl: string;

    theUrl = this.getUserServiceUrl(userID);
    return this.http.get<any>(theUrl);
  }

  getUserAddress(userID: string): Observable<Address> {
    let theUrl: string;

    theUrl = this.getUserServiceUrl(userID) + '/address';
    return this.http.get<Address>(theUrl);
  }

  getUsers() : Observable<any> {
    let theUrl: string;

    theUrl = 'http://127.0.0.1:5000/users'; //this.getUserServiceUrl('');
    return this.http.get<any>(theUrl);
  }
}

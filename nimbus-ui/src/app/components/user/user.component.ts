import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/order';
import { OrderService } from '../order/order.service';
import { Address, User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currUser: User;
  userID: string;
  userAddr: Address;
  userService: UserService;
  orderService: OrderService;
  cOrders: Order[] = [];
  
  allUsers = true;
  constructor(userService: UserService, orderService: OrderService, private route: ActivatedRoute) {
    this.userService = userService;
    this.orderService = orderService;
    this.currUser = new User(0,"ex","ex","ex", "ex",0);
    this.userID = '0';
    this.userAddr = new Address(0,'','','','','','','');
   }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.userService.getUser(this.userID)
    .subscribe( data => {
      let user = data['data'][0];
      console.log(user);
      this.currUser = new User(user.ID, user.nameLast, user.nameFirst, user.username, user.email, user.addressID);
      console.log(this.currUser)
    });

    this.userService.getUserAddress(this.userID)
    .subscribe ( data => {
      let addr = data['data'][0];
      console.log(addr);
      this.userAddr = new Address(addr.ID, addr.streetNo, addr.streetName1, addr.streetName2, addr.city, addr.state, addr.zipcode, addr.countryCode);
    })

    this.orderService.getCustomerOrders(this.userID)
    .subscribe( data => this.cOrders = data)
  }

  // Include for all users page
  /*onLookup(): void {
    if (this.artistName.length > 5) {
      this.imdbService.getArtists(this.artistName)
        .subscribe((data) => this.setArtistInfo(data));
    }
  }*/

}

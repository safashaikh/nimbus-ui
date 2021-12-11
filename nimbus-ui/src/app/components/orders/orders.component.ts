import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  orderService: OrderService;
  userID: string = '0';

  constructor(orderService: OrderService, public router: Router, private route: ActivatedRoute) {
    this.orderService = orderService;
   }

  ngOnInit(): void {
    /*if (this.router.url == 'users/:userID'){
      this.userID = this.route.snapshot.params['userID']
      this.orderService.getCustomerOrders(this.userID)
      .subscribe( data => this.orders = data)
    }*/

    if (this.route.snapshot.params['userID']){
      this.orders = [];
      this.userID = this.route.snapshot.params['userID']
      this.orderService.getCustomerOrders(this.userID)
      .subscribe( data => {
        console.log(data)
        this.orders = data
      })
    }
    
  }

}

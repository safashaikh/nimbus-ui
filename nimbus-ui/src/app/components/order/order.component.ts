import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  currOrder: Order;
  orderID: string;
  orderService: OrderService;
  total: Number;
  constructor(orderService: OrderService, private route: ActivatedRoute) {
    this.orderService = orderService;
    this.currOrder = new Order('','','',0,0,'','','','',0,'','','','',0);
    this.orderID = '0';
    this.total = 0;
   }

  ngOnInit(): void {
    this.orderID = this.route.snapshot.params['orderID'];
    this.orderService.getOrder(this.orderID)
    .subscribe( data => {
      console.log(data);
      this.currOrder = data;
      this.currOrder.oid = this.orderID;
      var x = +this.currOrder.price
      var y = +this.currOrder.quantity
      this.total = x*y;
      //this.total = Math.round(this.total * 100)/100;
      console.log(this.currOrder);
    } );
    
  }

}

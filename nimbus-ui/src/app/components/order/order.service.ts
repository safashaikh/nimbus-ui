import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  hosturl: string = 'http://localhost:5003';
  ORDERS: Order[] = [];

  constructor(private http: HttpClient) { }

  getOrder(orderID: string): Observable<Order> {
    let theUrl = this.hosturl+'/orderDetailsAsync/'+orderID;
    return this.http.get<Order>(theUrl);
  }

  _getCustomerOrders(cid:string): Observable<any> {
    let ordersUrl = 'http://44.197.87.209:5000/orders?customer='+cid
    return this.http.get<any>(ordersUrl);
  }

  getCustomerOrders(cid: string) : Observable<Order[]> {
    
    let oids: string[] = [];
    this._getCustomerOrders(cid)
    .subscribe( data => {
      let orders = data['data'];
      for (var order of orders){
        oids.push(order.orderID);
      }
    }

    )

    for (var oid of oids){
      let order_i: Order;
      this.getOrder(oid)
      .subscribe( data =>{
        this.ORDERS.push(data)
      }
        )

    }
    
    
    return of(this.ORDERS);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  hosturl: string = 'https://lmptddyukl.execute-api.us-east-1.amazonaws.com/Beta';
  ORDERS: Order[] = [];
  oids: string[] = [];

  constructor(private http: HttpClient) { }

  getOrder(orderID: string): Observable<Order> {
    let theUrl = this.hosturl+'/orderdetails/'+orderID;
    return this.http.get<Order>(theUrl);
  }

  _getCustomerOrders(cid:string): Observable<any> {
    let ordersUrl = 'https://lmptddyukl.execute-api.us-east-1.amazonaws.com/Beta/orders?customer='+cid
    return this.http.get<any>(ordersUrl);
  }

  getCustomerOrders(cid: string) : Observable<Order[]> {
    this.ORDERS = [];
    this.oids = [];
    this._getCustomerOrders(cid)
    .subscribe( data => {
      let orders = data['data'];
      for (var order of orders){
        this.oids.push(order.orderID);
      }
      console.log(this.oids)

      for (var oid of this.oids){
        let order_i: Order;
        this.getOrder(oid)
        .subscribe( data =>{
          let t_order: Order = data;
          console.log(t_order);
          t_order.oid = oid;
          this.ORDERS.push(t_order)
        }
          )
  
      }

    }

    )

    

    

    
    
    
    return of(this.ORDERS);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  theProduct: Product;
  allProducts: Product[] = new Array(3);
  hosturl: string = 'https://lmptddyukl.execute-api.us-east-1.amazonaws.com/Beta';

  constructor(private http: HttpClient) { 
    this.theProduct = new Product("1", "Cazcase Deer Pattern Smart Case Cover Flip Stand Cover for Apple iPad pro 10.5 inch (A1701 / A1709) / ipad Air 3 10.5 inch 2019 (Brown)", "CAZCASE");

    this.allProducts[0] = new Product("1", "Cazcase Deer Pattern Smart Case Cover Flip Stand Cover for Apple iPad pro 10.5 inch (A1701 / A1709) / ipad Air 3 10.5 inch 2019 (Brown)", "CAZCASE");
    this.allProducts[1] = new Product('2', "D-kandy for Gionee A1 Lite, Fashion Series Leather Flip Wallet Case Stand with Metal Logo, Magnetic Closure & Card Holder Flip Cover for Gionee A1 Lite - (Fashion Brown)", "D-kandy");
    this.allProducts[2] = new Product('3', "Heartly Kickstand Hard Dual Rugged Armor Hybrid Bumper Back Case Cover for Lenovo A6600 / Lenovo A6600 Plus - Best Black", "Heartly");

  }

  getProduct(productID: string): Observable<Product> {
    let theUrl: string;

    theUrl = this.hosturl+'/products/'+productID;
    return this.http.get<Product>(theUrl);
  }

  getProducts() : Observable<Product[]> {
    let theUrl: string;

    theUrl = this.hosturl+'/products';
    return this.http.get<Product[]>(theUrl);
  }

  getAllProducts(): Product[] {
    return this.allProducts;
  }

}

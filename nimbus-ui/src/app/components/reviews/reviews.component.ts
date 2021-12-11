import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../product/product';
import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  productsService: ProductsService;
  pid: string = '0';
  reviews: Review[] = [];
  constructor(productService: ProductsService, private route: ActivatedRoute) {
    this.productsService = productService;
   }

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['pid']
    this.productsService.getProduct(this.pid)
    .subscribe( data => {
      console.log(data);
      let pdata = data[0];
      console.log(pdata)
      let rv_str: any[] = pdata['reviews']
      console.log(rv_str)
      for (let i=0; i<rv_str.length; ++i){
        console.log(rv_str[i])
        let newR = new Review(rv_str[i]);
        this.reviews.push(newR);
      }
    })
  }

}
